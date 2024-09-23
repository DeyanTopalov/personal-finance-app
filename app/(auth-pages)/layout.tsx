import type { Metadata } from "next";
import "@styles/globals.css";
import { publicSans } from "../fonts/fonts";
import { LogoLarge } from "@lib/images";

//! Note: when this is a nested layout, no need to start with HTML and Body tags
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full max-h-[57.5rem] w-full gap-5 rounded-lg bg-clr-beige-100 md:max-w-[90rem] md:place-items-center md:px-5 md:py-5">
      <div className="hidden h-full w-full max-w-[40%] overflow-hidden rounded-lg lg:block">
        <div className="hidden size-full flex-col justify-between bg-landing-page-pattern bg-cover bg-bottom bg-no-repeat p-10 text-white lg:flex">
          <div>
            <LogoLarge />
          </div>
          <div>
            <h2 className="text-preset-1 mb-6">
              Keep track of your money and save for your future
            </h2>
            <p className="text-preset-4">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
