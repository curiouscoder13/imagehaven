import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
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
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt="image"
              className="image-card-content"
              width={240}
              height={150}
            />
          </Link>

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
        <div className="hero-content flex flex-col items-center justify-center gap-2 text-center">
          <Image
            className="bg-img"
            src={
              "https://utfs.io/f/5654b773-7ef4-4189-93d2-a8a03c85bedc-v1skp.webp"
            }
            alt="image"
            width={1920}
            height={1080}
          />
          <div className="hero-welcome">Welcome to ImageHaven</div>
          <div className="hero-detail">Your personal photo gallery</div>
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
