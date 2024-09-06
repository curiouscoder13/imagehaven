import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="flex w-48 flex-col">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="background-image flex w-full flex-col items-center justify-center gap-2">
          <div className="text-5xl font-semibold">Welcome to ImageHaven</div>
          <div className="p-2 text-xl">Your personal photo gallery</div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="p-4">
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
