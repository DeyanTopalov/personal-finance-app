import type { Metadata } from "next";
import "@styles/globals.css";
import { publicSans } from "./fonts/fonts";
import { LogoLarge } from "@lib/images";

export const metadata: Metadata = {
  title: "Personal Finance App",
  description: "Frontend Mentor challenge to build a Personal Finance App",
};

// test

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${publicSans.className} grid h-svh w-svw place-items-center gap-0 bg-white p-5 text-left text-base antialiased md:h-screen md:w-full`}
//       >
//         {/*         <main className="grid h-full w-svw md:max-w-[90rem] md:place-items-center md:px-5 md:py-5"> */}
//         <main className="flex h-full max-h-[920px] w-full gap-5 rounded-lg bg-clr-beige-100 md:max-w-[90rem] md:place-items-center md:px-5 md:py-5">
//           <div className="h-full w-full max-w-[40%] overflow-hidden rounded-lg">
//             <div className="hidden size-full flex-col justify-between bg-landing-page-pattern bg-cover bg-bottom bg-no-repeat p-10 text-white lg:flex">
//               <div>
//                 <LogoLarge />
//               </div>

//               <div>
//                 <h2 className="text-preset-1 mb-6">
//                   Keep track of your money and save for your future
//                 </h2>
//                 <p className="text-preset-4">
//                   Personal finance app puts you in control of your spending.
//                   Track transactions, set budgets, and add to savings pots
//                   easily.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

// bg-clr-beige-100

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} grid h-svh w-svw place-items-center gap-0 bg-white text-left text-base antialiased md:h-screen md:w-full`}
      >
        <main className="grid h-full w-svw md:max-w-[90rem] md:place-items-center md:px-5 md:py-5">
          {children}
        </main>
      </body>
    </html>
  );
}
