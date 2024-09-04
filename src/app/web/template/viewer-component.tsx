import React, { useEffect, useRef } from "react";

interface ViewerProps {
  file: String | File | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

declare global {
  interface Window {
    PSPDFKit: any;
  }
}

const Viewer: React.FC<ViewerProps> = ({ file, setLoading }) => {
  const officeExtensions = [
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
  ];

  const containerRef = useRef(null);

  const pspdfkitConfig = {
    baseUrl: process.env.NEXT_PUBLIC_PSPDFKIT_BASE_URL,
    licenseKey: process.env.NEXT_PUBLIC_PSPDFKIT_LICENSE_KEY,
    styleSheets: ["/pspdfkit.css"],
    ProcessorEngine: "fasterProcessing",
    // https://pspdfkit.com/api/web/PSPDFKit.html#.ProcessorEngine
  };

  const getArrayBuffer = async (file: File) => {
    return await file.arrayBuffer();
  };

  const isOfficeFile = (fileName: String) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    return officeExtensions.includes(extension as string);
  }

  const load = (
    container: HTMLElement | null,
    file: string | ArrayBuffer | File,
  ) => {
    console.log("Loading document");
    window.PSPDFKit.load({
      ...pspdfkitConfig,
      container,
      document: file,
    });
    
    setLoading(false);
  };

  function loadOffice(
    container: HTMLElement | null,
    file: string | ArrayBuffer | File,
  ) {
    console.log("Converting Office document to PDF");
    window.PSPDFKit.convertToPDF(
      {
        ...pspdfkitConfig,
        document: file,
      },
      window.PSPDFKit.Conformance.PDFA_1A,
    )
      .then((arrayBuffer: any) => {
        load(container, arrayBuffer);
      })
      .catch((error: { message: any }) => {
        console.error("Error converting document to PDF:", error.message);
      });
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.PSPDFKit) {
      const container = containerRef.current;

      // Unload the previous instance before loading a const
      window.PSPDFKit.unload(container);

      if (!file) {
        // First load, preload the worker
        window.PSPDFKit.preloadWorker(pspdfkitConfig);
        console.log("Preloading worker");
      } else {
        const fileType = typeof file;

        switch (fileType) {
          case "string":
            if (isOfficeFile(file as string)) {
              loadOffice(container, file.toString());
            } else {
              load(container, file.toString());
            }
            break;
          case "object":
            const fileName = (file as File).name;
            const arrayBuffer = getArrayBuffer(file as File)
              .then((arrayBuffer) => {
                if (isOfficeFile(fileName)) {
                  loadOffice(container, arrayBuffer);
                } else {
                  load(container, arrayBuffer);
                }
              })
              .catch((error) => {
                console.error("Error loading document:", error);
              });
            break;
          default: {
            console.error("Invalid document type");
          }
        }
      }
    }
  });

  return <div ref={containerRef} className="h-screen" id="pspdfkitViewer" />;
}

export default Viewer;
