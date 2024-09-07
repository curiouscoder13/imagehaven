import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import TopNav from "./_components/topnav";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata: Metadata = {
  title: "ImageHaven",
  description: "A private photo gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <link
            rel="preload"
            href="https://utfs.io/f/5654b773-7ef4-4189-93d2-a8a03c85bedc-v1skp.webp"
            as="image"
          />
          <link
            rel="preload"
            href="https://utfs.io/f/48c72f8a-323f-456c-bc56-8b517f0481d6-8nyxuw.webp"
            as="image"
          />
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <body className="">
            <div className="grid h-screen grid-rows-[auto_1fr]">
              <TopNav />
              <main className="overflow-x-hidden overflow-y-scroll">
                {children}
              </main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
