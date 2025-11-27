import { useState, useContext } from "react";
import Mycontext from "../context/Mycontext";
import ToggleBtn from "./ToggleBtn";





const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.647 4.646a.75.75 0 11-1.06 1.06l-4.647-4.646A8.25 8.25 0 012.25 10.5z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Main Topbar ---
export default function Topbar() {
  const { mode, setSearchTerm: setGlobalSearchTerm } = useContext(Mycontext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Set the global search term
    setGlobalSearchTerm(searchTerm.trim());
  };

  const handleKeyDown = (e) => {
    // Allow searching by pressing Enter key
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header
        className={`flex items-center justify-between px-4 py-2 border-b ${mode === "dark" ? "border-gray-800" : "border-gray-300"}`}
        style={{ background: mode === "dark" ? "#2c2c2c" : "white" }}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <span
            className={`text-xl ${
              mode === "dark"
                ? "border-gray-100 text-white"
                : "border-gray-600 text-black"
            }`}
          >
            <a href="/">FINCRM</a>
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-4 mr-2">
          <div className="relative flex">
            <div className="flex justify-end px-8">
              <ToggleBtn />
            </div>

            <div className="flex items-center space-x-2 mx-auto">
              {/* Search Input Field */}
              <input
                type="text"
                placeholder="Enter search term..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setGlobalSearchTerm(e.target.value.trim());
                }}
                onKeyDown={handleKeyDown}
                className={`flex-grow p-0.5 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ${
                  mode === "dark"
                    ? "border-gray-600 bg-[#3c3c3c] text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-black placeholder-gray-500"
                }`}
              />
        
              {/* Search Button */}
              <button
                onClick={handleSearch}
                className={`flex items-center justify-center p-1 px-2 text-xs text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 disabled:bg-blue-400 ${
                  mode === "dark"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={!searchTerm.trim()}
              >
                <SearchIcon className="h-5 w-5 mr-1" />
                Search
              </button>

              {/* Clear Button */}
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setGlobalSearchTerm('');
                  }}
                  className={`flex items-center justify-center p-1.5 px-2 text-xs text-white shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ${
                    mode === "dark"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  Clear
                </button>
              )}
            </div>


          </div>
        </div>
      </header>
    </>
  );
}
