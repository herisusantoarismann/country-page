import Image from "next/image";

import BackgroundImage from "@/assets/images/hero-image-wr.jpg";
import Logo from "@/assets/images/Logo.svg";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen bg-secondary">
      <div className="">
        <div className="relative h-60 w-full flex items-center justify-center">
          <Image
            src={BackgroundImage}
            alt="background-image"
            className="absolute w-full h-full object-cover z-10"
          />
          <Image src={Logo} alt="logo" className="w-1/10 -mt-10 z-20" />
        </div>
      </div>
    </main>
  );
}
