import Image from "next/image";

export const landingPageImage = () => {
  return (
    <Image
      src="/illustration-authentication.svg"
      alt="landing page background image"
      width={560}
      height={920}
      className="h-full w-full object-cover"
    />
  );
};
