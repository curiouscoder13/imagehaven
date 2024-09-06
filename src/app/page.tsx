import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="image-card shadow- flex flex-col items-center bg-white p-2 text-black sm:w-48 md:w-64"
        >
          {/** I would like to limit the width and height of the image and hide the excess use img */}
          <img src={image.url} alt="image" className="image-card-content" />

          {/* <img src={image.url} alt="image" /> */}
          <div className="pt-2 font-semibold">
            {/** Removed file extension in image name */}
            {image.name.split(".").slice(0, -1).join(".")}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="background-image flex w-full flex-col items-center justify-center gap-2 text-center">
          <div className="text-5xl font-semibold">Welcome to ImageHaven</div>
          <div className="text-xl">Your personal photo gallery</div>
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
