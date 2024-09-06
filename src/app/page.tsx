import Link from "next/link";

// mock-1. Initializing mock data
const mockUrls = [
  "https://utfs.io/f/4b47ff0a-94bb-47ed-afa3-1fe1ce943bb8-1omhcd.webp",
  "https://utfs.io/f/13a07932-b6b7-4efa-bde6-d9e2e948fefe-641yqg.webp",
  "https://utfs.io/f/1d7ef259-a0af-45d1-b742-8cd582a715c5-f1mnx5.webp",
];

// mock-2. Mapping mock data to image objects
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      {/* mock-3. Rendering mock images */}
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
