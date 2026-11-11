import { expect, test, type Page } from "@playwright/test";
import { websiteStyles } from "../../src/data/websiteStyles";

async function openStudy(page: Page) {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /Open study/ }).first();
  const title = await trigger.locator("h2").innerText();
  await trigger.focus();
  await trigger.press("Enter");
  await expect(page.getByRole("button", { name: "Close", exact: true })).toBeVisible();
  return { trigger, title };
}

test("named modal contains keyboard focus and blocks background focus", async ({ page }) => {
  const { trigger, title } = await openStudy(page);
  const dialog = page.getByRole("dialog", { name: title, exact: true });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Close", exact: true })).toBeFocused();
  await trigger.evaluate((node: HTMLElement) => node.focus());
  await expect(trigger).not.toBeFocused();
  for (let i = 0; i < 20; i++) {
    await page.keyboard.press("Tab");
    // Native dialogs may let Tab visit browser chrome (activeElement becomes
    // body). They must never send focus into an inert page control.
    expect(await dialog.evaluate((node) => {
      const active = document.activeElement;
      return active === document.body || node.contains(active);
    })).toBe(true);
  }
  await page.keyboard.press("Shift+Tab");
  await expect(trigger).not.toBeFocused();
});

test("Escape and visible close return focus and allow reopening", async ({ page }) => {
  const { trigger } = await openStudy(page);
  const close = page.getByRole("button", { name: "Close", exact: true });
  await page.keyboard.press("Escape");
  await expect(close).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await trigger.press("Enter");
  await close.click();
  await expect(close).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("fallback light dismiss keeps inside clicks and selection drags open", async ({ page }) => {
  await page.addInitScript(() => {
    Reflect.deleteProperty(HTMLDialogElement.prototype, "closedBy");
    const show = HTMLDialogElement.prototype.showModal;
    HTMLDialogElement.prototype.showModal = function () {
      this.removeAttribute("closedby");
      show.call(this);
    };
  });
  const { trigger, title } = await openStudy(page);
  const dialog = page.getByRole("dialog", { name: title, exact: true });
  await expect(dialog).toBeVisible();
  const box = (await dialog.boundingBox())!;
  await page.mouse.click(box.x + 3, box.y + 3);
  await expect(dialog).toBeVisible();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(2, 2);
  await page.mouse.up();
  await expect(dialog).toBeVisible();
  await page.mouse.click(2, 2);
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("native light dismiss closes only from outside", async ({ page }) => {
  const { trigger } = await openStudy(page);
  await page.getByRole("button", { name: "Recipe", exact: true }).click();
  await expect(page.getByRole("button", { name: "Close", exact: true })).toBeVisible();
  await page.mouse.click(2, 2);
  await expect(page.getByRole("button", { name: "Close", exact: true })).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("mobile reduced-motion layout keeps study controls usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const { title } = await openStudy(page);
  const dialog = page.getByRole("dialog", { name: title, exact: true });
  await expect(dialog).toBeVisible();
  const box = (await dialog.boundingBox())!;
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(390);
  expect(box.y + box.height).toBeLessThanOrEqual(844);
  expect(await dialog.evaluate((node) => node.scrollWidth <= node.clientWidth)).toBe(true);
  expect(await dialog.evaluate((node) => node.getAnimations({ subtree: true }).length)).toBe(0);
  await page.getByRole("button", { name: "Sources", exact: true }).click();
  await expect(page.getByRole("button", { name: "Sources", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(dialog.getByRole("link").first()).toBeVisible();
  await page.getByRole("button", { name: "Prompt", exact: true }).click();
  await expect(dialog.getByRole("button", { name: /Copy/ })).toBeVisible();
  await page.screenshot({ path: `.verification/dialog-mobile-${test.info().project.name}.png` });
});

test("responsive study regions do not overlap", async ({ page }) => {
  for (const width of [375, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const { title } = await openStudy(page);
    const dialog = page.getByRole("dialog", { name: title, exact: true });
    const regions = dialog.locator(":scope > div > div");
    const preview = (await regions.nth(0).boundingBox())!;
    const detail = (await regions.nth(1).boundingBox())!;
    if (width < 1280) expect(preview.y + preview.height).toBeLessThanOrEqual(detail.y + 1);
    else expect(preview.x + preview.width).toBeLessThanOrEqual(detail.x + 1);
    await page.screenshot({ path: `.verification/dialog-${width}-${test.info().project.name}.png` });
    await page.getByRole("button", { name: "Close", exact: true }).click();
  }
});

test("every catalog study exposes the exact reusable prompt", async ({ page }) => {
  test.setTimeout(60_000);
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async (text: string) => { document.documentElement.dataset.copiedPrompt = text; },
    } });
  });
  await page.goto('/');
  for (const style of websiteStyles) {
    const card = page.getByRole('button', { name: /Open study/ }).filter({ has: page.getByRole('heading', { name: style.title, exact: true }) });
    // WebKit does not focus buttons on pointer clicks; test keyboard return
    // from an explicitly focused invoker instead.
    await card.focus();
    await card.press("Enter");
    const dialog = page.getByRole('dialog', { name: style.title, exact: true });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Prompt', exact: true }).click();
    await dialog.getByRole('button', { name: 'Copy prompt', exact: true }).click();
    await expect(dialog.getByRole('status')).toContainText('Prompt copied.');
    await expect(page.locator('html')).toHaveAttribute('data-copied-prompt', style.starterPrompt);
    await page.keyboard.press('Escape');
    await expect(card).toBeFocused();
  }
});

test("clipboard denial offers manual selection and allows retry", async ({ page }) => {
  await page.addInitScript(() => {
    let attempts = 0;
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async () => { if (++attempts === 1) throw new DOMException('Denied', 'NotAllowedError'); },
    } });
  });
  const { title } = await openStudy(page);
  const dialog = page.getByRole('dialog', { name: title, exact: true });
  await dialog.getByRole('button', { name: 'Prompt', exact: true }).click();
  const copy = dialog.getByRole('button', { name: 'Copy prompt', exact: true });
  await copy.click();
  await expect(dialog.getByRole('status')).toContainText('Copy unavailable');
  await expect(copy).toBeEnabled();
  await dialog.getByRole('button', { name: 'Select prompt text' }).click();
  expect(await page.evaluate(() => window.getSelection()?.toString())).toBe(websiteStyles.find(style => style.title === title)!.starterPrompt);
  await copy.click();
  await expect(dialog.getByRole('status')).toContainText('Prompt copied.');
  await expect(dialog.getByRole('button', { name: 'Select prompt text' })).toHaveCount(0);
});
