import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center bg-black text-white text-sm py-3 gap-3">
        <p className="text-white/60 hidden md:block ">
          Streamline your WorkFlow and boost your productivity.
        </p>

        <div className="gap-1 inline-flex items-center">
          <p>Get started for free</p>
          <ArrowRight className=" h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="saas logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center ">
              <a href="#">About</a>
              <a href="#">Feature</a>
              <a href="#">Customer</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="text-white bg-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};