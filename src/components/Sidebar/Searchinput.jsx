import { IoSearch } from "react-icons/io5";

const Searchinput = () => {
  return (
    <form className="flex gap-2 py-2 px-3 items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-[15rem] border text-md rounded-lg block p-2.5 bg-gray-100 border-gray text-gray-800 focus:outline-gray-500"
      />
      <button type="submit" className="btn btn-circle">
        <IoSearch className="h-full w-full p-3" />
      </button>
    </form>
  );
};

export default Searchinput;
