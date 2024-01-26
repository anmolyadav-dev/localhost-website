import Assignment from "../components/Assignment";
import Event from "../components/Event";
import Table from "../components/Table";

const page = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center flex flex-col md:flex-row p-8 text-white">
      <div className="flex-shrink-0 md:w-1/2 md:pr-8 mt-20 bg-white bg-opacity-20 p-4 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <h2 className="text-xl font-semibold mb-4">Shubham Asati</h2>
        <Table />
      </div>

      <div className="flex-shrink-0 md:w-1/2 md:pl-8 md:mt-20 flex flex-col gap-4">
        <Assignment />
        <Event />
      </div>
    </div>
  );
};

export default page;
