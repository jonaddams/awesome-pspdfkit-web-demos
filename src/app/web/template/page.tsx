"use client";

import { useState } from "react";
import Image from "next/image";
import Viewer from "./viewer-component";

import FileSelect from "./file-select-component";
import LoadFromUrl from "./load-from-url-component";
import FileDrop from "./file-drop-component";

import codeSampleImg from "/public/code-sample.svg";
import codeIcon from "/public/code-icon.svg";
import webIcon from "/public/web-icon.svg";
import guideIcon from "/public/guide-icon.svg";

declare global {
  interface Window {
    PSPDFKit: any;
  }
}

export default function Page() {
  const [file, setFile] = useState<string | File | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container m-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="border-silver-sand w-full border sm:w-1/4 lg:h-screen">
          <div className="p-3">
            <div className="p-3">
              <Image
                src={codeSampleImg}
                alt="Code Sample"
                width={46}
                className="inline-block pr-3"
              />
              <span className="text-bright-gray text-sm font-medium">
                Name of Code Sample
              </span>
            </div>
            <div className="border-silver-sand border-y py-3">
              {/* Description */}
              <div className="text-shuttle-gray p-3 text-sm font-medium">
                This is a dedicated space for adding a code sample description
                and adding an explanation on how to use it.
              </div>
              {/* Links */}
              <div>
                <div className="text-raven p-2 text-sm font-medium">
                  <Image
                    src={codeIcon}
                    alt="GitHub"
                    width={33}
                    className="inline-block pr-3"
                  />
                  <span>View on </span>
                  {/* CHANGE THE LINK TO THE APPROPRIATE REPO */}
                  <a
                    href="https://github.com/PSPDFKit/your-repo-here"
                    className="text-royal-blue underline"
                  >
                    GitHub
                  </a>
                </div>
                <div className="text-raven p-2 text-sm font-medium">
                  <Image
                    src={guideIcon}
                    alt="Guide"
                    width={33}
                    className="inline-block pr-3"
                  />
                  {/* CHANGE THE LINK TO THE APPROPRIATE SECTION */}
                  <span>Read more in our </span>
                  <a
                    href="https://pspdfkit.com/guides/web/intro/"
                    className="text-royal-blue underline"
                  >
                    Guide
                  </a>
                </div>
                <div className="text-raven p-2 text-sm font-medium">
                  <Image
                    src={webIcon}
                    alt="Demo"
                    width={33}
                    className="inline-block pr-3"
                  />
                  <a
                    href="https://pspdfkit.com/demo/hello"
                    className="text-royal-blue underline"
                  >
                    Web Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 pt-0">
            {/* Select a file */}
            <FileSelect
              loading={loading}
              setLoading={setLoading}
              setFile={setFile}
            />

            <div className="text-bright-gray my-5 block text-base font-medium">
              or
            </div>

            {/* Load from URL */}
            <LoadFromUrl setFile={setFile} setLoading={setLoading} />

            <div className="text-bright-gray my-5 hidden text-base font-medium lg:block">
              or
            </div>

            {/* File Picker */}
            <FileDrop setFile={setFile} setLoading={setLoading} />
          </div>
        </div>
        <div className="border-silver-sand w-full border-b border-r border-t bg-gray-200 sm:w-3/4">
          <Viewer file={file || null} setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
}

