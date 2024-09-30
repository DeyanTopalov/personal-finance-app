import { LogoLarge } from "@lib/images";
import { Button } from "@components/ui/button";
import Link from "next/link";
import SignInFormRHF from "@components/CustomInputField/signin-form-rhf";

export default function Home() {
  return (
    // flex h-full max-h-[920px] w-full gap-5 rounded-lg bg-clr-beige-100
    <section className="h-full w-full">
      {/* <div className="h-full w-full max-w-[40%] overflow-hidden rounded-lg">
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
      </div> */}
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-bold">
          Take Control of Your Finances.
        </h1>
        <div className="2_buttons mt-10 flex gap-4">
          <div className="flex w-[100px] items-center justify-center overflow-hidden rounded-md border-2 border-white bg-white text-center transition-all duration-150 ease-in-out hover:bg-white/85 hover:drop-shadow-2xl">
            <Link className="h-full w-full py-2 font-bold" href="/sign-in">
              Sign In
            </Link>
          </div>
          <div className="flex w-[100px] items-center justify-center overflow-hidden rounded-md border-2 border-slate-950 bg-slate-950 text-center text-white transition-all duration-150 ease-in-out hover:bg-slate-950/85 hover:drop-shadow-2xl">
            <Link className="h-full w-full py-2 font-bold" href="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      {/* <SignInFormRHF /> */}
    </section>
  );
}

// export default function Home() {
//   return (
//     <section className="flex h-full max-h-[920px] w-full gap-5 rounded-lg bg-clr-beige-100">
//       <div className="h-full w-full max-w-[40%] overflow-hidden rounded-lg">
//         <div className="hidden size-full flex-col justify-between bg-landing-page-pattern bg-cover bg-bottom bg-no-repeat p-10 text-white lg:flex">
//           <div>
//             <LogoLarge />
//           </div>

//           <div>
//             <h2 className="text-preset-1 mb-6">
//               Keep track of your money and save for your future
//             </h2>
//             <p className="text-preset-4">
//               Personal finance app puts you in control of your spending. Track
//               transactions, set budgets, and add to savings pots easily.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full flex-col items-center justify-center">
//         <h1 className="text-center text-5xl font-bold">
//           Take Control of Your Finances.
//         </h1>
//         <div className="2_buttons mt-10 flex gap-4">
//           <div className="flex w-[100px] items-center justify-center overflow-hidden rounded-md border-2 border-white bg-white text-center transition-all duration-150 ease-in-out hover:bg-white/85 hover:drop-shadow-2xl">
//             <Link className="h-full w-full py-2 font-bold" href="/sign-in">
//               Sign In
//             </Link>
//           </div>
//           <div className="flex w-[100px] items-center justify-center overflow-hidden rounded-md border-2 border-slate-950 bg-slate-950 text-center text-white transition-all duration-150 ease-in-out hover:bg-slate-950/85 hover:drop-shadow-2xl">
//             <Link className="h-full w-full py-2 font-bold" href="/sign-up">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
