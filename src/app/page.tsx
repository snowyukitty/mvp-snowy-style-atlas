import { GalleryClient } from "@/components/GalleryClient";
import { websiteStyles } from "@/data/websiteStyles";

export default function Home() {
  return (
    <div className="relative">
      <GalleryClient initialStyles={websiteStyles} />
    </div>
  );
}
