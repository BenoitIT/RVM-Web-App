import React from "react";
interface SearchBoxProps {}

const SearchBox: React.FunctionComponent<SearchBoxProps> = () => {
  return (
    <form>
      <div className="relative desktop:w-[30vw] md:w-[80vw] xs:w-full">
        <div className="desktop:absolute xs:hidden inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
          className="block w-full desktop:p-4 md:p-3 xs:p-2 pl-10 text-sm text-gray-900 border border-lime-700 rounded-lg bg-gray-50 outline-none"
          placeholder="search by names...."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 desktop:bottom-2.5 xs:bottom-1 md:bottom-2  bg-lime-700 hover:bg-lime-800 focus:ring-4outline-none font-medium rounded-md text-sm dektop:px-8  md:px-4 xs:px-3 desktop:py-2 xs:py-1"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
