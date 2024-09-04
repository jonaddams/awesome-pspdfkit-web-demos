import React, { useState, useRef } from "react";
import Image from "next/image";
import uploadFileLight from "/public/upload-file-light.svg";

interface FileDropProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFile: React.Dispatch<React.SetStateAction<string | File | null>>;
}

export default function FileDrop({ setFile, setLoading }: FileDropProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files.length > 1) {
      setError("Please select only one file");
      return;
    }

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setError("");
      setLoading(true);
      setFile(e.dataTransfer.files[0]);
    } else {
      setError("Invalid file type");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 1) {
      setError("Please select only one file");
      return;
    }

    if (e.target.files && e.target.files[0]) {
      setError("");
      setLoading(true);
      setFile(e.target.files[0]);
    }
  };

  const showFilePicker = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="hidden lg:block">
      <div
        className={`dark:hover:border-blue-40 hover:border-blue-40 w-full rounded-[10px] border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-950 ${
          dragActive ? "border-blue-500" : ""
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          name="file"
          className="hidden"
          accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.template,application/vnd.ms-word.document.macroEnabled.12,application/vndopenxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-powerpoint,application/vnd.ms-powerpoint.presentation.macroEnabled.12,image/png,image/jpeg,image/tiff,application/pdf"
          onChange={handleChange}
        />
        <div className="flex w-full items-center justify-center py-8">
          <div className="flex items-center dark:hidden">
            <Image
              src={uploadFileLight}
              alt="upload icon"
              className="cursor-pointer"
              width={72}
            />
          </div>
        </div>
        <div className="px-4 pb-8 text-base font-medium">
          <span className="text-trout dark:text-white">
            Drop your document here, or{" "}
            <span
              className="dark:text-blue-40 text-royal-blue cursor-pointer"
              onClick={showFilePicker}
            >
              browse
            </span>
          </span>
          <br />
          <span className="text-raven text-sm">
            Supports .docx, .doc, .dotx, .docm, .pptx, .ppt, .pptm, .xls, .xlsx,
            .xlsm, .pdf, pdf/a, .tiff, .png, .jpg
          </span>
          {error && (
            <span className="text-base font-medium text-red-500">{error}</span>
          )}
        </div>
      </div>
    </div>
  );
}
