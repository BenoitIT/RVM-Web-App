import React from "react";
interface SearchBoxProps {}

const SearchBox: React.FunctionComponent<SearchBoxProps> = () => {
  return (
    <form>
      <div className="relative w-[30vw]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-lime-700 rounded-lg bg-gray-50"
          placeholder="search by names...."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-8 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
