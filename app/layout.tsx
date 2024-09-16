import type { Metadata } from "next";
import "@styles/globals.css";
import { publicSans } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Personal Finance App",
  description: "Frontend Mentor challenge to build a Personal Finance App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} bg-clr-beige-100 grid h-svh w-svw place-items-center gap-0 text-left text-base antialiased md:h-screen md:w-full`}
      >
        <main className="grid h-full w-svw md:max-w-[90rem] md:place-items-center md:px-5 md:py-5">
          {children}
        </main>
      </body>
    </html>
  );
}
