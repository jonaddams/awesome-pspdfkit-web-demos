export default function Page() {
  return (
    <div className="container m-auto">
      <div className="flex justify-center">
        <div className="mb-3 mt-5 w-1/2 lg:h-screen">
          <h1 className="text-bright-gray mb-5 text-3xl font-bold">
            Legal Disclaimer
          </h1>
          <p>
            This software is provided as-is, without warranty of any kind,
            express or implied, including but not limited to the warranties of
            merchantability, fitness for a particular purpose and
            noninfringement. In no event shall the authors or copyright holders
            be liable for any claim, damages or other liability, whether in an
            action of contract, tort or otherwise, arising from, out of or in
            connection with the software or the use or other dealings in the
            software.
          </p>
          <p>
            The user is solely responsible for determining the appropriateness
            of using or redistributing the software and assumes any risks
            associated with the exercise of permissions under the license.
          </p>
        </div>
      </div>
    </div>
  );
}
