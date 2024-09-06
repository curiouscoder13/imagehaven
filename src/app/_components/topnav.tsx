import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <div className="flex w-full items-center justify-between bg-sky-950 p-4 text-xl font-semibold">
      <a href="/" className="font-mono italic">
        Image<span className="text-sky-300">Haven</span>
      </a>
      <div className="text-lg font-semibold">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
