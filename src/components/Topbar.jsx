import React, { useState, useContext } from "react";
import {
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  Cog8ToothIcon,
  Square2StackIcon,
  XMarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Mycontext from "../context/Mycontext";
import ToggleBtn from "./ToggleBtn";

// --- Data for the Filter Dropdown Menu ---
const filterOptions = [
  "Symbols",
  "Clients",
  "Accounts",
  "Positions",
  "Orders",
  "Subscriptions",
  "Payments",
  "Mails",
  "News",
];

// --- Filters Tab (left tab in modal) ---
const FiltersTab = ({ onClose, mode }) => {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className={`flex-1 overflow-auto border rounded-sm min-h-[60vh] p-3 ${mode === "dark" ? "border-gray-300 bg-[#262626]" : "border-gray-400 bg-gray-50"}`}>
        <div className={`flex items-center justify-between text-sm pb-2 border-b mb-2 ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
          <span className="pl-2">Name</span>
          <span className="pr-2">Filter</span>
        </div>
        {/* simplified list placeholder */}
        <div className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>No saved filters</div>
      </div>

      <div className="flex justify-end gap-3 pt-4 mt-4">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-sm hover:bg-blue-400">
          Apply
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-sm ${mode === "dark" ? "text-gray-300 bg-gray-600 hover:bg-gray-500" : "text-black bg-gray-300 hover:bg-gray-400"}`}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// --- Updated EditFilterTab with aligned labels & controls ---
const EditFilterTab = ({ onClose, mode }) => {
  // helper: label width controlled via this class
  const LABEL_CLASS =
    `w-[140px] text-right pr-4 text-sm font-medium ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`;

  return (
    <div className="py-4 overflow-y-auto text-sm max-h-[86vh] flex flex-col px-6 custom-scrollbar">
      {/* container with two-column layout: label column & control column */}
      <div className={`border rounded-sm p-2 ${mode === "dark" ? "border-gray-300" : "border-gray-400"}`}>
        <div className="grid grid-cols-[140px_1fr] gap-y-3 gap-x-4 items-center">
          {/* Filter Name */}
          <label className={LABEL_CLASS}>Filter name:</label>
          <input
            type="text"
            className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            placeholder=""
          />
          {/* Hide disabled */}
          <div /> {/* empty cell for spacing */}
          <div className="flex items-center gap-2">
            <input
              id="hide-disabled"
              type="checkbox"
              className={`w-4 h-4 text-blue-600 rounded ${mode === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-400"}`}
            />
            <label htmlFor="hide-disabled" className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Hide disabled accounts
            </label>
          </div>
          {/* Trading */}
          <label className={LABEL_CLASS}>Trading:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <select className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-44 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}>
              <option>Any</option>
              <option>Standard</option>
              <option>ECN</option>
            </select>
          </div>
          {/* Country */}
          <label className={LABEL_CLASS}>Country:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <select className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}>
              <option>Iran</option>
              <option>India</option>
            </select>
          </div>
          {/* City */}
          <label className={LABEL_CLASS}>City:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <input
              type="text"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>
          {/* Language */}
          <label className={LABEL_CLASS}>Language:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <select className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-48 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}>
              <option>Any</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          {/* Agent account */}
          <label className={LABEL_CLASS}>Agent account:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <input
              type="text"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>
          {/* Group */}
          <label className={LABEL_CLASS}>Group:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <select className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-48 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}>
              <option>All Groups</option>
              <option>VIP</option>
            </select>
          </div>
          {/* Company */}
          <label className={LABEL_CLASS}>Company:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <input
              type="text"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>
          {/* MetaQuotes ID */}
          <label className={LABEL_CLASS}>MetaQuotes ID:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <input
              type="text"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-44 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>
          {/* Lead campaign */}
          <label className={LABEL_CLASS}>Lead campaign:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <input
              type="text"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>
          {/* Lead source */}
          <label className={LABEL_CLASS}>Lead source:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <input
              type="text"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>
          {/* Comment */}
          <label className={LABEL_CLASS}>Comment:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <PlusIcon className="w-4 h-4 text-green-400" />
            </button>
            <input
              type="text"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-full ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mt-4 pt-4 ${mode === "dark" ? "border-gray-700" : "border-gray-300"}`}></div>

        {/* Date and Balance grid */}
        <div className="grid grid-cols-[160px_1fr] gap-y-3 gap-x-4 items-center mt-3">
          {/* Last access */}
          <label className={LABEL_CLASS}>Last access:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <XMarkIcon className="w-4 h-4 text-red-500" />
            </button>
            <input
              type="date"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-48 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
            <span className={`text-gray-400 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>-</span>
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <XMarkIcon className="w-4 h-4 text-red-500" />
            </button>
            <input
              type="date"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-48 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
            {/* <div className="ml-2 text-gray-400 text-xs">any</div> */}
          </div>

          {/* Registration */}
          <label className={LABEL_CLASS}>Registration:</label>
          <div className="flex items-center gap-2">
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <XMarkIcon className="w-4 h-4 text-red-500" />
            </button>
            <input
              type="date"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-48 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
            <span className={`text-gray-400 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>-</span>
            <button className={`rounded-sm p-1 ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <XMarkIcon className="w-4 h-4 text-red-500" />
            </button>
            <input
              type="date"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-48 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
            />
          </div>

          {/* Balance */}
          <label className={LABEL_CLASS}>Balance:</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-28 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
              placeholder="Min"
            />
            <span className={`text-gray-400 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>-</span>
            <input
              type="number"
              className={`text-sm border rounded-sm px-2 py-1 bg-transparent w-28 ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}
              placeholder="Max"
            />
            <span className={`ml-2 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>any currency</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4 mt-4">
        <button className={`px-4 py-1 text-sm font-medium rounded-sm ${mode === "dark" ? "text-gray-900 bg-gray-300 hover:bg-gray-200" : "text-white bg-gray-600 hover:bg-gray-700"}`}>
          Save
        </button>
        <button className="px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded-sm hover:bg-blue-400">
          Apply
        </button>
        <button
          className={`px-4 py-1 text-sm font-medium rounded-sm ${mode === "dark" ? "text-gray-300 bg-gray-600 hover:bg-gray-500" : "text-black bg-gray-300 hover:bg-gray-400"}`}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// --- Modal & Dropdown components (unchanged behavior, styling tweaked for overall look) ---
const CustomizeFilterModal = ({ isVisible, onClose, mode }) => {
  const [activeTab, setActiveTab] = useState("edit");

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className={`rounded-sm shadow-2xl w-full max-w-3xl min-h-[65vh] overflow-hidden border flex flex-col ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700 text-gray-300" : "bg-white border-gray-300 text-black"}`}>
        <div className={`flex justify-between items-center py-2 px-4 border-b ${mode === "dark" ? "border-gray-700" : "border-gray-300"}`}>
          <h2 className={`font-semibold ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
            Trading Accounts Filters
          </h2>
          <button
            onClick={onClose}
            className={`p-1 rounded-full transition-colors ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
            aria-label="Close modal"
          >
            <XMarkIcon className={`w-6 h-6 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`} />
          </button>
        </div>

        <div className="flex">
          <div className="flex px-4">
            <button
              className={`py-2 px-4 text-sm font-medium transition-all ${
                activeTab === "filters"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : mode === "dark" ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("filters")}
            >
              Filters
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium transition-all ${
                activeTab === "edit"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : mode === "dark" ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("edit")}
            >
              Edit Filter
            </button>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto">
          {activeTab === "edit" ? (
            <EditFilterTab onClose={onClose} mode={mode} />
          ) : (
            <FiltersTab onClose={onClose} mode={mode} />
          )}
        </div>
      </div>
    </div>
  );
};

const AdjustmentsDropdownMenu = ({ isVisible, setMenuOpen, filterOptions, mode }) => {
  const [checkedOptions, setCheckedOptions] = useState(
    filterOptions.reduce((acc, option) => {
      acc[option] = true;
      return acc;
    }, {})
  );

  const toggleOption = (option) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const selectAll = () => {
    const allSelected = filterOptions.reduce((acc, option) => {
      acc[option] = true;
      return acc;
    }, {});
    setCheckedOptions(allSelected);
  };

  const selectNone = () => {
    const noneSelected = filterOptions.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {});
    setCheckedOptions(noneSelected);
  };

  if (!isVisible) return null;

  return (
    <div className={`absolute top-full right-0 mt-1 w-48 border rounded-sm shadow-lg z-50 ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-white border-gray-300"}`}>
      <div className="py-1">
        {filterOptions.map((option) => (
          <div
            key={option}
            className={`flex items-center justify-between px-3 py-1.5 text-sm cursor-pointer ${mode === "dark" ? "text-gray-300 hover:bg-gray-700" : "text-black hover:bg-gray-200"}`}
            onClick={() => toggleOption(option)}
          >
            <span>{option}</span>
            <div
              className={`w-4 h-4 rounded border ${
                checkedOptions[option]
                  ? "bg-green-600 border-green-600"
                  : mode === "dark" ? "border-gray-500" : "border-gray-400"
              }`}
            >
              {checkedOptions[option] && (
                <CheckIcon className="w-4 h-4 text-white" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={`border-t my-1 ${mode === "dark" ? "border-gray-700" : "border-gray-300"}`}></div>

      <div className="py-1">
        <div
          className={`px-3 py-1.5 text-sm cursor-pointer ${mode === "dark" ? "text-gray-300 hover:bg-gray-700" : "text-black hover:bg-gray-200"}`}
          onClick={selectAll}
        >
          Select All
        </div>
        <div
          className={`px-3 py-1.5 text-sm cursor-pointer ${mode === "dark" ? "text-gray-300 hover:bg-gray-700" : "text-black hover:bg-gray-200"}`}
          onClick={selectNone}
        >
          Select None
        </div>
      </div>
    </div>
  );
};

const FunnelDropdownMenu = ({ isVisible, setMenuOpen, setModalOpen, mode }) => {
  if (!isVisible) return null;

  const handleCustomizeClick = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <div className={`absolute top-full left-0 mt-1 w-48 border rounded-sm shadow-lg z-50 ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-white border-gray-300"}`}>
      <div className="py-1">
        <div
          className={`flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer ${mode === "dark" ? "text-gray-300 hover:bg-gray-700" : "text-black hover:bg-gray-200"}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <Square2StackIcon className="w-5 h-5 text-blue-500" />
          <span>None</span>
        </div>
      </div>

      <div className={`border-t my-1 ${mode === "dark" ? "border-gray-700" : "border-gray-300"}`}></div>

      <div className="py-1">
        <div
          className={`flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer ${mode === "dark" ? "text-gray-300 hover:bg-gray-700" : "text-black hover:bg-gray-200"}`}
          onClick={handleCustomizeClick}
        >
          <Cog8ToothIcon className="w-5 h-5 text-blue-500" />
          <span>Customize</span>
        </div>
      </div>
    </div>
  );
};

// --- Main Topbar ---
export default function Topbar() {
  const [isAdjustmentsMenuOpen, setIsAdjustmentsMenuOpen] = useState(false);
  const [isFunnelMenuOpen, setIsFunnelMenuOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const { mode } = useContext(Mycontext);

  const containerClasses =
    "flex items-center border border-gray-400 rounded-md";
  const buttonBaseClasses = `px-3 py-2 md:px-4 md:py-2 transition-colors flex items-center gap-2 h-full ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`;
  const iconClasses = "h-5 w-5 md:h-6 md:w-6 ";

  const toggleFunnelMenu = () => {
    setIsFunnelMenuOpen(!isFunnelMenuOpen);
    setIsAdjustmentsMenuOpen(false);
  };

  const toggleAdjustmentsMenu = () => {
    setIsAdjustmentsMenuOpen(!isAdjustmentsMenuOpen);
    setIsFunnelMenuOpen(false);
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

        <div className="flex items-center gap-3 md:gap-4 w-[350px]">
          <div className="relative flex">
            <div className="flex justify-end px-10">
              <ToggleBtn />
            </div>
            <div
              className={
                containerClasses +
                ` ${
                  mode === "dark"
                    ? "border-gray-100 text-white"
                    : "border-gray-600 text-black"
                }`
              }
              style={{ background: mode === "dark" ? "#2c2c2c" : "white" }}
            >
              <button
                className={`rounded-l-md ${buttonBaseClasses}`}
                aria-label="Filter preset menu"
                onClick={toggleFunnelMenu}
              >
                <FunnelIcon className={iconClasses} />
                <span className="hidden sm:inline">Filter</span>
              </button>

              <div className="h-full border-l border-gray-700"></div>

              <button
                className={buttonBaseClasses}
                aria-label="Advanced filter settings"
                onClick={toggleAdjustmentsMenu}
              >
                <AdjustmentsHorizontalIcon className={iconClasses} />
              </button>

              <div className="h-full border-l border-gray-700"></div>

              <div className="flex-1 flex items-center px-3 py-1 md:py-2">
                <input
                  type="text"
                  placeholder=""
                  className={`w-full bg-transparent text-sm focus:outline-none ${mode === "dark" ? "text-gray-300 placeholder-gray-500" : "text-black placeholder-gray-400"}`}
                  aria-label="Search input"
                />
                <MagnifyingGlassIcon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>

            <FunnelDropdownMenu
              isVisible={isFunnelMenuOpen}
              setMenuOpen={setIsFunnelMenuOpen}
              setModalOpen={setIsCustomizeModalOpen}
              mode={mode}
            />

            <AdjustmentsDropdownMenu
              isVisible={isAdjustmentsMenuOpen}
              setMenuOpen={setIsAdjustmentsMenuOpen}
              filterOptions={filterOptions}
              mode={mode}
            />
          </div>
        </div>
      </header>

      <CustomizeFilterModal
        isVisible={isCustomizeModalOpen}
        onClose={() => setIsCustomizeModalOpen(false)}
        mode={mode}
      />
    </>
  );
}
