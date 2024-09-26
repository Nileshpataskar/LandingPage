import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={acmeLogo}
              alt="Acme Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={acmeLogo}
              alt="Acme Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={acmeLogo}
              alt="Acme Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Inc."
              width={100}
              height={100}
              className="logo-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Inc."
              width={100}
              height={100}
              className="logo-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
