import Image from "next/image";
import React from "react";

import BackgroundImage from "@/assets/images/hero-image-wr.jpg";
import Logo from "@/assets/images/Logo.svg";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: IProps) => {
  return (
    <main className="max-w-screen flex min-h-screen flex-col bg-secondary lg:overflow-hidden">
      <div className="relative z-10 flex h-60 w-full items-center justify-center">
        <Image
          src={BackgroundImage}
          alt="background-image"
          className="absolute z-10 h-full w-full object-cover"
          priority
        />
        <Image src={Logo} alt="logo" className="w-1/10 z-20 -mt-10" priority />
      </div>
      <div className="relative -top-16 z-50 flex-1 px-4 lg:-top-12 xl:px-24">
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;
