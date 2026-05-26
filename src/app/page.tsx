import { GalleryClient } from "@/components/GalleryClient";
import { prisma } from "@/lib/prisma";
import stylesData from "@/data/styles.json";

export default async function Home() {
  // Simple auto-seeding for MVP
  const count = await prisma.image.count();
  if (count === 0) {
    console.log("Seeding initial data...");
    await prisma.image.createMany({
      data: stylesData.map((img) => ({
        ...img,
        tags: JSON.stringify(img.tags),
      })),
    });
  }

  // Fetch from DB
  const dbImages = await prisma.image.findMany({
    orderBy: [
      { score: "desc" },
      { createdAt: "desc" }
    ]
  });

  // Map back to the expected type, handling Prisma nulls
  const initialImages = dbImages.map((img) => ({
    ...img,
    tags: JSON.parse(img.tags),
    titleEn: img.titleEn ?? undefined,
    model: img.model ?? undefined,
    palette: img.palette ?? undefined,
    mood: img.mood ?? undefined,
    original: img.original ?? undefined,
  }));

  return (
    <div className="relative">
      <GalleryClient initialImages={initialImages} />
    </div>
  );
}
