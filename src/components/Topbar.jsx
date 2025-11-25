import React, { useState } from 'react';
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
const FiltersTab = ({ onClose }) => {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex-1 overflow-auto border border-gray-300 rounded-sm min-h-[60vh] p-3 bg-[#262626]">
        <div className='flex items-center justify-between text-sm text-gray-300 pb-2 border-b border-gray-700 mb-2'>
          <span className="pl-2">Name</span>
          <span className="pr-2">Filter</span>
        </div>
        {/* simplified list placeholder */}
        <div className="text-sm text-gray-400">No saved filters</div>
      </div>

      <div className="flex justify-end gap-3 pt-4 mt-4">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-sm hover:bg-blue-400">Apply</button>
        <button
          className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-600 rounded-sm hover:bg-gray-500"
          onClick={onClose}
        > 
          Cancel
        </button>
      </div>
    </div>
  );
};

// --- Updated EditFilterTab with aligned labels & controls ---
const EditFilterTab = ({ onClose }) => {
  // helper: label width controlled via this class
  const LABEL_CLASS = "w-[140px] text-right pr-4 text-sm font-medium text-gray-400";

  return (
    <div className="py-4 overflow-y-auto text-sm max-h-[86vh] flex flex-col px-6 custom-scrollbar">
      {/* container with two-column layout: label column & control column */}
      <div className="border border-gray-300 rounded-sm p-2">
        <div className="grid grid-cols-[140px_1fr] gap-y-3 gap-x-4 items-center">

          {/* Filter Name */}
          <label className={LABEL_CLASS}>Filter name:</label>
          <input
            type="text"
            className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent text-gray-200 w-full"
            placeholder=""
          />

          {/* Hide disabled */}
          <div /> {/* empty cell for spacing */}
          <div className="flex items-center gap-2">
            <input id="hide-disabled" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
            <label htmlFor="hide-disabled" className="text-sm text-gray-400">Hide disabled accounts</label>
          </div>

          {/* Trading */}
          <label className={LABEL_CLASS}>Trading:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <select className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-44">
              <option>Any</option>
              <option>Standard</option>
              <option>ECN</option>
            </select>
          </div>

          {/* Country */}
          <label className={LABEL_CLASS}>Country:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <select className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-full">
              <option>Iran</option>
              <option>India</option>
            </select>
          </div>

          {/* City */}
          <label className={LABEL_CLASS}>City:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <input type="text" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-full" />
          </div>

          {/* Language */}
          <label className={LABEL_CLASS}>Language:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <select className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-48">
              <option>Any</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>

          {/* Agent account */}
          <label className={LABEL_CLASS}>Agent account:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <input type="text" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-full" />
          </div>

          {/* Group */}
          <label className={LABEL_CLASS}>Group:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <select className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-48">
              <option>All Groups</option>
              <option>VIP</option>
            </select>
          </div>

          {/* Company */}
          <label className={LABEL_CLASS}>Company:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <input type="text" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-full" />
          </div>

          {/* MetaQuotes ID */}
          <label className={LABEL_CLASS}>MetaQuotes ID:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <input type="text" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-44" />
          </div>

          {/* Lead campaign */}
          <label className={LABEL_CLASS}>Lead campaign:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <input type="text" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-full" />
          </div>

          {/* Lead source */}
          <label className={LABEL_CLASS}>Lead source:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <input type="text" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-full" />
          </div>

          {/* Comment */}
          <label className={LABEL_CLASS}>Comment:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><PlusIcon className="w-4 h-4 text-green-400" /></button>
            <input type="text" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-full" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-4 pt-4"></div>

        {/* Date and Balance grid */}
        <div className="grid grid-cols-[160px_1fr] gap-y-3 gap-x-4 items-center mt-3">
          {/* Last access */}
          <label className={LABEL_CLASS}>Last access:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><XMarkIcon className="w-4 h-4 text-red-500" /></button>
            <input type="date" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-48" />
            <span className="text-gray-400">-</span>
            <button className="rounded-sm p-1 hover:bg-gray-700"><XMarkIcon className="w-4 h-4 text-red-500" /></button>
            <input type="date" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-48" />
            {/* <div className="ml-2 text-gray-400 text-xs">any</div> */}
          </div>

          {/* Registration */}
          <label className={LABEL_CLASS}>Registration:</label>
          <div className="flex items-center gap-2">
            <button className="rounded-sm p-1 hover:bg-gray-700"><XMarkIcon className="w-4 h-4 text-red-500" /></button>
            <input type="date" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-48" />
            <span className="text-gray-400">-</span>
            <button className="rounded-sm p-1 hover:bg-gray-700"><XMarkIcon className="w-4 h-4 text-red-500" /></button>
            <input type="date" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-48" />
          </div>

          {/* Balance */}
          <label className={LABEL_CLASS}>Balance:</label>
          <div className="flex items-center gap-2">
            <input type="number" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-28" placeholder="Min" />
            <span className="text-gray-400">-</span>
            <input type="number" className="text-sm border border-gray-600 rounded-sm px-2 py-1 bg-transparent w-28" placeholder="Max" />
            <span className="ml-2 text-gray-400">any currency</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4 mt-4">
        <button className="px-4 py-1 text-sm font-medium text-gray-900 bg-gray-300 rounded-sm hover:bg-gray-200">Save</button>
        <button className="px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded-sm hover:bg-blue-400">Apply</button>
        <button
          className="px-4 py-1 text-sm font-medium text-gray-300 bg-gray-600 rounded-sm hover:bg-gray-500"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// --- Modal & Dropdown components (unchanged behavior, styling tweaked for overall look) ---
const CustomizeFilterModal = ({ isVisible, onClose }) => {
  const [activeTab, setActiveTab] = useState('edit');

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2c2c2c] rounded-sm shadow-2xl w-full max-w-3xl min-h-[65vh] overflow-hidden border border-gray-700 text-gray-300 flex flex-col">
        <div className="flex justify-between items-center py-2 px-4 border-b border-gray-700">
          <h2 className="font-semibold text-gray-200">Trading Accounts Filters</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="flex">
          <div className="flex px-4">
            <button
              className={`py-2 px-4 text-sm font-medium transition-all ${activeTab === 'filters' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('filters')}
            >
              Filters
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium transition-all ${activeTab === 'edit' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('edit')}
            >
              Edit Filter
            </button>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto">
          {activeTab === 'edit' ? <EditFilterTab onClose={onClose} /> : <FiltersTab onClose={onClose} />}
        </div>
      </div>
    </div>
  );
};

const AdjustmentsDropdownMenu = ({ isVisible, setMenuOpen, filterOptions }) => {
  const [checkedOptions, setCheckedOptions] = useState(
    filterOptions.reduce((acc, option) => {
      acc[option] = true;
      return acc;
    }, {})
  );

  const toggleOption = (option) => {
    setCheckedOptions(prev => ({
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
    <div className="absolute top-full right-0 mt-1 w-48 bg-[#2c2c2c] border border-gray-700 rounded-sm shadow-lg z-50">
      <div className="py-1">
        {filterOptions.map((option) => (
          <div
            key={option}
            className="flex items-center justify-between px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
            onClick={() => toggleOption(option)}
          >
            <span>{option}</span>
            <div className={`w-4 h-4 rounded border ${checkedOptions[option] ? 'bg-green-600 border-green-600' : 'border-gray-500'}`}>
              {checkedOptions[option] && <CheckIcon className="w-4 h-4 text-white" />}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 my-1"></div>

      <div className="py-1">
        <div
          className="px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
          onClick={selectAll}
        >
          Select All
        </div>
        <div
          className="px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
          onClick={selectNone}
        >
          Select None
        </div>
      </div>
    </div>
  );
};

const FunnelDropdownMenu = ({ isVisible, setMenuOpen, setModalOpen }) => {
  if (!isVisible) return null;

  const handleCustomizeClick = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <div className="absolute top-full left-0 mt-1 w-48 bg-[#2c2c2c] border border-gray-700 rounded-sm shadow-lg z-50">
      <div className="py-1">
        <div
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
          onClick={() => { setMenuOpen(false); }}
        >
          <Square2StackIcon className="w-5 h-5 text-blue-500" />
          <span>None</span>
        </div>
      </div>

      <div className="border-t border-gray-700 my-1"></div>

      <div className="py-1">
        <div
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
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

  const containerClasses = "flex items-center border border-gray-400 rounded-md bg-[#2c2c2c] text-gray-300";
  const buttonBaseClasses = "px-3 py-2 md:px-4 md:py-2 hover:bg-gray-700 transition-colors flex items-center gap-2 h-full";
  const iconClasses = "h-5 w-5 md:h-6 md:w-6 text-gray-400";

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
      <header className="flex items-center justify-between bg-[#2c2c2c] px-4 py-2 border-b border-gray-800">
        <div className="flex items-center gap-3 md:gap-4">
          <span className='text-xl'><a href="/">FINCRM</a></span>
        </div>

        <div className="flex items-center gap-3 md:gap-4 w-[220px]">
          <div className="relative">
            <div className={containerClasses}>
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
                  className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
                  aria-label="Search input"
                />
                <MagnifyingGlassIcon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>

            <FunnelDropdownMenu
              isVisible={isFunnelMenuOpen}
              setMenuOpen={setIsFunnelMenuOpen}
              setModalOpen={setIsCustomizeModalOpen}
            />

            <AdjustmentsDropdownMenu
              isVisible={isAdjustmentsMenuOpen}
              setMenuOpen={setIsAdjustmentsMenuOpen}
              filterOptions={filterOptions}
            />
          </div>
        </div>
      </header>

      <CustomizeFilterModal
        isVisible={isCustomizeModalOpen}
        onClose={() => setIsCustomizeModalOpen(false)}
      />
    </>
  );
}
