import Link from "next/link";
import Image from "next/image";
import headerImg from "/public/header.png";
import discordImg from "/public/discord.svg";
import WebExamples from "./global-components/web-examples";

export default function Home() {
  return (
    <main>
      <div className="container m-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full p-3">
            <Image
              src={headerImg}
              alt="Header"
              objectFit="contain"
              className="mb-3"
            />
            <a
              href="https://discord.gg/Z754Pfb8bD"
              className="mb-5 inline-block"
            >
              <Image src={discordImg} alt="Discord" width={100} />
            </a>
            <h1 className="text-bright-gray mb-2 text-xl font-bold lg:text-3xl">
              Awesome PSPDFKit Web Demos
            </h1>
            <p className="text-shuttle-gray">
              This repository contains examples built with PSPDFKit. These
              examples are not officially supported. They may stop working, they
              may not be repaired -- and still serve for inspiration. Read the{" "}
              <Link href="/disclaimer" className="text-royal-blue underline">
                disclaimer
              </Link>{" "}
              or{" "}
              <a
                href="https://support.pspdfkit.com/hc/en-us/requests/new"
                rel="nofollow"
                className="text-royal-blue underline"
              >
                reach out
              </a>{" "}
              if you have questions.
            </p>

            <WebExamples />
          </div>
        </div>
      </div>
    </main>
  );
}
