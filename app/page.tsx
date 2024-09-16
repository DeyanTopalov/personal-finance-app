import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-full w-full gap-5 bg-green-100">
      <div className="h-full w-[560px] rounded-lg bg-yellow-200">img here</div>
      <div className="w-full bg-blue-200">
        <h1>Take Control of Your Finances.</h1>
      </div>
    </section>
  );
}
