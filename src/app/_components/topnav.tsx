"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-between bg-sky-950 p-4 text-xl font-semibold">
      <a href="/" className="font-mono italic">
        Image<span className="text-sky-300">Haven</span>
      </a>
      <div className="flex flex-row text-lg font-semibold">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
