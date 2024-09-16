import Image from "next/image";

export const LandingPageImage = () => {
  return (
    <Image
      src="/illustration-authentication.svg"
      alt="landing page background image"
      //   width={560}
      //   height={920}
      fill
      className="h-full w-full object-cover"
    />
  );
};

export const LogoSmall = () => {
  return (
    <Image
      src="/logo-small.svg"
      alt="landing page background image"
      width={14}
      height={22}
      className=""
    />
  );
};

export const LogoLarge = () => {
  return (
    <Image
      src="/logo-large.svg"
      alt="landing page background image"
      width={122}
      height={22}
      className=""
    />
  );
};
