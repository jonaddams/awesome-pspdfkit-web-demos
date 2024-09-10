import Link from "next/link";

export default function WebExamples() {
  return (
    <div className="mb-3 mt-5 border-b pb-2">
      <div className="mb-3">
        <h2 className="text-bright-gray mb-1 text-xl font-bold lg:text-2xl">
          Web
        </h2>
        <p className="text-shuttle-gray">
          A wide variety of examples what PSPDFKit for Web can do can be found
          in the{" "}
          <a
            href="https://github.com/PSPDFKit/pspdfkit-web-examples-catalog"
            className="text-royal-blue underline"
          >
            Example Catalog Repository
          </a>{" "}
          -{" "}
          <a
            href="https://web-examples.services.demo.pspdfkit.com/"
            className="text-royal-blue underline"
          >
            Try them online
          </a>
          .
        </p>
      </div>

      {/* electronic signatures examples */}
      {/* <div className="mb-3">
        <h3 className="text-shuttle-gray mb-1 text-base font-semibold lg:text-lg">
          Electronic Signatures
        </h3>
        <ul className="ml-5 list-disc">
          <li>
            <Link href="" className="text-royal-blue underline">
              Description of the example
            </Link>
          </li>
        </ul>
      </div> */}

      {/* text comparison examples */}
      <div className="mb-3">
        <h3 className="text-shuttle-gray mb-1 text-base font-semibold lg:text-lg">
          Text Comparison
        </h3>
        <ul className="ml-5 list-disc">
          <li>
            <Link
              href="/web/text-comparison"
              className="text-royal-blue underline"
            >
              Semantic Text Comparison of Two Documents
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
