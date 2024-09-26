import logo from "@/assets/logosaas.png";
import Image from "next/image";
import X from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2  before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} alt="logo" />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Feature</a>
          <a href="#">Customer</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <X />
          <Insta />
          <Linkedin />
          <Pin />
        </div>
        <p className="mt-6">
          &copy; 2024 your company, Inc. All right reserved
        </p>
      </div>
    </footer>
  );
};
