import Image from "next/image";
import Link from "next/link";
import logo from "/public/pspdfkit.svg";

export default function Header() {
  return (
    <header className="">
      <div className="container m-auto">
        <div className="flex m-3">
          <div className="w-1/2 text-left">
            <Link href="/">
              <Image
                alt="PSPDFKit"
                className="inline-block mr-5"
                src={logo}
                width="48"
              />
              <span className="text-outer-space font-semibold">PSPDFKit</span>
            </Link>
            <span className="hidden lg:inline-block text-shuttle-gray text-sm mx-5 font-medium border-l border-geyser p-3">
              Awesome Web Demos
            </span>
          </div>
          <div className="w-1/2 text-right flex items-center justify-end">
            <a
              href="https://pspdfkit.com/try/"
              className="mx-3 text-sm text-ebony-clay hidden lg:inline-block"
            >
              Free Trial
            </a>
            <button className="bg-royal-blue color font-medium px-3 py-1 text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
