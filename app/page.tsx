import { LogoLarge } from "@lib/images";

export default function Home() {
  return (
    <section className="flex h-full max-h-[920px] w-full gap-5 bg-green-100">
      <div className="h-full w-full max-w-[40%] overflow-hidden rounded-lg bg-yellow-200">
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
      <div className="w-full bg-blue-200">
        <h1>Take Control of Your Finances.</h1>
      </div>
    </section>
  );
}
