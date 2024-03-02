import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center flex justify-center items-center">
      <div className="text-center text-white mt-28 lg:mt-20">
        <h2 className="text-lg lg:text-2xl mb-4 font-mono uppercase">
          Submission Guidelines:
        </h2>
        <ul className="text-xl lg:text-3xl text-left mb-8 mx-10 list-disc font-mono">
          <li>
            All participants should submit their projects on{" "}
            <span className="text-pink">3rd March between 2 AM and 9 AM.</span>
          </li>
          <li>
            <span className="text-pink">No submissions</span> after 9 AM shall
            be accepted.
          </li>
          <li>
            Projects should be submitted via{" "}
            <span className="text-pink">GitHub link.</span>
          </li>
          <li>
            Every project should include a proper descriptive{" "}
            <span className="text-pink">Readme file.</span>
          </li>
          <li>
            Extra Documentation is optional and can be given via{" "}
            <span className="text-pink">Google Drive link.</span>
          </li>
          <li>
            Registration in{" "}
            <Link
              href="https://quine.sh/?utm_source=aarcher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-pink uppercase">Quine</span> link
            </Link>{" "}
            compulsory.
            <Link
              href="https://quine.sh/?utm_source=aarcher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600"
            >
              ( Link )
            </Link>
          </li>
        </ul>
        <h2 className="text-lg lg:text-2xl mb-4 font-mono uppercase">
          Presentation Round:
        </h2>
        <div className=" text-xl lg:text-3xl text-left mx-6 font-mono uppercase">
          <p className="  ">
            Presentation to be taken on{" "}
            <span className="text-pink">3rd March at 12 PM in CR-7.</span>
          </p>
          <p className=" mb-4">
            The presentation should be under{" "}
            <span className="text-pink">5 minutes</span> including the PPT, any
            descriptive material, and Q&A by the judges, per team. (3 min
            presentation + 2 min question & answer).
          </p>
          <p className=" ">
            <span className="text-pink">NOTE:</span> Exceeding the time limit
            may result in negative marking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
