import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// Keep lookup local and reproducible. Installation and upgrades are explicit npm tasks.
const root = new URL("../", import.meta.url);
const packageRoot = new URL("node_modules/modern-web-guidance/", root);
const args = process.argv.slice(2);
if (!["search", "retrieve", "list", "legacy-scan", "--help", "--version"].includes(args[0])) {
  console.error("Usage: npm run mwg -- <search|retrieve|list|legacy-scan|--help|--version> ...");
  process.exit(2);
}

try {
  const project = JSON.parse(readFileSync(new URL("package.json", root), "utf8"));
  const installed = JSON.parse(readFileSync(new URL("package.json", packageRoot), "utf8"));
  const lock = JSON.parse(readFileSync(new URL("package-lock.json", root), "utf8"));
  const pin = project.devDependencies["modern-web-guidance"];
  const locked = lock.packages["node_modules/modern-web-guidance"];
  if (!/^\d+\.\d+\.\d+$/.test(pin) || installed.version !== pin || locked.version !== pin || !locked.integrity) {
    throw new Error("Guidance dependency must match an exact, integrity-locked version. Run npm ci.");
  }
  const result = spawnSync(process.execPath, [
    fileURLToPath(new URL(installed.bin["modern-web-guidance"], packageRoot)), ...args,
  ], {
    cwd: fileURLToPath(root),
    env: { ...process.env, DISABLE_TELEMETRY: "1" },
    stdio: "inherit",
    shell: false,
  });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
} catch (error) {
  console.error(`Guidance unavailable: ${error.message}`);
  process.exit(1);
}
