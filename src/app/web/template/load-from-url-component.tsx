import React, { useState } from "react";

interface LoadFromUrlProps {
  setFile: React.Dispatch<React.SetStateAction<string | File | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const validExtensions = [
  "docx",
  "doc",
  "dotx",
  "docm",
  "xlsx",
  "xls",
  "xlsm",
  "pptx",
  "ppt",
  "pptm",
  "png",
  "jpg",
  "jpeg",
  "tiff",
  "tif",
  "pdf",
];

function isValidFileExtension(url: string) {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  const extension = pathname?.split(".").pop()?.toLowerCase() ?? "";
  return validExtensions.includes(extension);
}

async function isValidAndAccessibleURL(url: string) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) {
      return false;
    } else {
      return true;
    }
    return true;
  } catch (error) {
    console.error("Error validating URL:", error);
    return false;
  }
}

async function validateURL(url: string) {
  try {
    new URL(url);
    if (!isValidFileExtension(url)) {
      return { valid: false, reason: "Invalid file extension" };
    }
    if (await isValidAndAccessibleURL(url)) {
      return { valid: true, reason: "URL is valid and accessible" };
    } else {
      return { valid: false, reason: "URL is inaccessible" };
    }
  } catch (error) {
    return { valid: false, reason: "Invalid URL format" };
  }
}

export default function LoadFromUrl({ setFile, setLoading }: LoadFromUrlProps) {
  const [error, setError] = useState("");

  const handleURLSubmit = async () => {
    const inputElement = document?.getElementById(
      "docURL",
    ) as HTMLInputElement | null;

    const url = inputElement?.value || "";
    const result = await validateURL(url);

    if (!result.valid) {
      setError(result.reason);
      setLoading(false);
      return;
    }

    setError("");
    setLoading(true);
    setFile(url);
  };

  return (
    <div>
      <span className="text-bright-gray text-base font-medium">
        Paste a link to your document:
      </span>
      <input type="text" className="mt-1 w-full border p-2" id="docURL" />
      <button
        className="bg-royal-blue mt-2 w-full py-2 text-base font-medium text-white"
        onClick={handleURLSubmit}
      >
        Load Document
      </button>
      {error && <p className="text-base font-medium text-red-500">{error}</p>}
    </div>
  );
}
