import React from "react";

interface FileSelectProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFile: React.Dispatch<React.SetStateAction<string | File | null>>;
}

export default function FileSelect({
  loading,
  setLoading,
  setFile,
}: FileSelectProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);

    const value = event.target.value;

    if (value) {
      setFile(value);
    }
  };

  return (
    <div>
      <div className="pb-3 text-center" style={{ minHeight: 36 }}>
        {loading && (
          <span className="text-royal-blue font-medium">Loading...</span>
        )}
      </div>
      <label className="text-bright-gray mt-2 text-base font-medium" />
      Choose a Sample Document
      <div className="mb-1 mt-2">
        <select
          id="sample-doc"
          name="sample-doc"
          className="focus:ring-[#4537de]-600 block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
          onChange={handleSelectChange}
        >
          <option value="">Select a file</option>
          <option
            value={
              "https://public-solutions-engineering-bucket.s3.eu-central-1.amazonaws.com/docs/danish-magazine-pdfa.pdf"
            }
          >
            PDF/A: Danish Magazine
          </option>
          <option
            value={
              "https://public-solutions-engineering-bucket.s3.eu-central-1.amazonaws.com/docs/quarterly-report.docx"
            }
          >
            Word: Quarterly Report
          </option>
          <option
            value={
              "https://public-solutions-engineering-bucket.s3.eu-central-1.amazonaws.com/docs/art-museums.xlsx"
            }
          >
            Excel: Art Museums
          </option>
          <option
            value={
              "https://public-solutions-engineering-bucket.s3.eu-central-1.amazonaws.com/docs/ai-cow.png"
            }
          >
            PNG Image: AI Cow Analysis
          </option>
        </select>
      </div>
    </div>
  );
}
