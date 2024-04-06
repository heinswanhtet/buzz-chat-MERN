import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 mb-2.5">
      <input
        type="text"
        placeholder="Search...."
        className="input input-bordered input-sm rounded-full"
      />
      <button type="submit">
        <FcSearch className="w-7 h-7 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
