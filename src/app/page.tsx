import Image from "next/image";

import BackgroundImage from "@/assets/images/hero-image-wr.jpg";
import Logo from "@/assets/images/Logo.svg";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen bg-secondary">
      <div className="relative h-60 w-full flex items-center justify-center">
        <Image
          src={BackgroundImage}
          alt="background-image"
          className="absolute w-full h-full object-cover z-10"
        />
        <Image src={Logo} alt="logo" className="w-1/10 -mt-10 z-20" />
      </div>
      <div className="px-24">
        <div className="bg-secondary px-8 py-12 border boder-brand-grey rounded-lg">
          <div>
            <p>Found 234 countries</p>
          </div>
        </div>
      </div>
    </main>
  );
}
