import React, { useState } from 'react';
import {
  FunnelIcon, // For the main Filter button
  AdjustmentsHorizontalIcon, // For the Filter/Sort Adjuster icon
  MagnifyingGlassIcon, // For the Search input
  CheckIcon, // Added for the Checkbox icon
  Cog8ToothIcon, // Using Cog8ToothIcon for Customize
  Square2StackIcon, // Using Square2StackIcon for the "None" box icon
  XMarkIcon, // For closing the modal
  PlusIcon, // For adding filter criteria
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

// ----------------------------------------------------------------------
// 1. MODAL COMPONENTS (Nested content for Customize)
// ----------------------------------------------------------------------

// --- Content for the 'Filters' Tab (Simplified table view) ---
const FiltersTab = ({ onClose }) => {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex-1 overflow-auto border border-gray-400 min-h-[70vh]">
        <div className='flex items-center justify-around '>
          <span>Name</span>
          <span>Filter</span>
        </div>

      </div>
      
      <div className="flex justify-end gap-3 pt-4 mt-4">
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-sm hover:bg-blue-400">Apply</button>
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

// --- Content for the 'Edit Filter' Tab (Detailed form view) ---
const EditFilterTab = ({ onClose }) => {
  return (
    <div className="py-4 overflow-y-auto text-sm max-h-[80vh] flex flex-col items-center">
      <div className="flex items-center justify-between max-w-[300px] gap-12">
        <label className="text-sm font-medium text-gray-400">Filter name:</label>
        <input 
          type="text" 
          className="p-2 text-sm  border border-gray-600 rounded-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder=""
        />
      </div>

      <div className="flex items-center pt-2">
        <input id="hide-disabled" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
        <label htmlFor="hide-disabled" className="ml-2 text-sm text-gray-400">Hide disabled accounts</label>
      </div>

      <div className="pt-2">
        {/* Trading */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Trading:</label>
          <div className="flex items-center gap-1 w-[200px]">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <select className="flex-1 p-2 text-sm  border border-gray-600 rounded-sm">
              <option>Any</option>
              <option>Standard</option>
              <option>ECN</option>
            </select>
          </div>
        </div>

        {/* Country */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Country:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm  border border-gray-600 rounded-sm" />
          </div>
        </div>

        {/* City */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">City:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm  border border-gray-600 rounded-sm" />
          </div>
        </div>

        {/* Language */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Language:</label>
          <div className="flex items-center gap-1 w-[200px]">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <select className="flex-1 p-2 text-sm border border-gray-600 rounded-sm">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>

        {/* Agent account */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Agent account:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm  border border-gray-600 rounded-sm" />
          </div>
        </div>

        {/* Group */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Group:</label>
          <div className="flex items-center gap-1 w-[200px]">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <select className="flex-1 p-2 text-sm border border-gray-600 rounded-sm">
              <option>All Groups</option>
              <option>VIP</option>
              <option>Standard</option>
            </select>
          </div>
        </div>

        {/* Company */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Company:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm border border-gray-600 rounded-sm" />
          </div>
        </div>

        {/* MetaQuotes ID */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">MetaQuotes ID:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm  border border-gray-600 rounded-sm" />
          </div>
        </div>

        {/* Lead campaign */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Lead campaign:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm border border-gray-600 rounded-sm" />
          </div>
        </div>

        {/* Lead source */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Lead source:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm border border-gray-600 rounded-sm" />
          </div>
        </div>

        {/* Comment */}
        <div className="mb-2 max-w-[350px] flex items-center justify-between ">
          <label className="text-sm font-medium text-gray-400">Comment:</label>
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-400" />
            <input type="text" className="flex-1 p-2 text-sm border border-gray-600 rounded-sm" />
          </div>
        </div>
      </div>
      
      {/* Date and Balance Filters */}
      <div className="grid grid-cols-1 gap-4 border-t border-gray-700 pt-4 mt-4">
        {/* Last access */}
        <div className="space-y-1 flex items-center gap-4">
          <label className="text-sm font-medium text-gray-400">Last access:</label>
          <div className="flex items-center gap-2">
            <XMarkIcon className="w-4 h-4 text-red-500 cursor-pointer" />
            <input type="date" className="p-2 text-sm border border-gray-600 rounded-sm w-full" />
            <span className="text-gray-400">-</span>
            <XMarkIcon className="w-4 h-4 text-red-500 cursor-pointer" />
            <input type="date" className="p-2 text-sm border border-gray-600 rounded-sm w-full" />
          </div>
        </div>

        {/* Registration */}
        <div className="space-y-1 flex items-center gap-4">
          <label className="text-sm font-medium text-gray-400">Registration:</label>
          <div className="flex items-center gap-2">
            <XMarkIcon className="w-4 h-4 text-red-500 cursor-pointer" />
            <input type="date" className="p-2 text-sm border border-gray-600 rounded-sm w-full" />
            <span className="text-gray-400">-</span>
            <XMarkIcon className="w-4 h-4 text-red-500 cursor-pointer" />
            <input type="date" className="p-2 text-sm border border-gray-600 rounded-sm w-full" />
          </div>
        </div>

        {/* Balance */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-400">Balance:</label>
          <div className="flex items-center gap-2">
            <input type="number" className="p-2 text-sm border border-gray-600 rounded-sm w-24" placeholder="Min" />
            <span className="text-gray-400">-</span>
            <input type="number" className="p-2 text-sm border border-gray-600 rounded-sm w-24" placeholder="Max" />
            <span className="text-gray-400">any currency</span>
          </div>
        </div>
      </div>
      
      {/* Buttons at the bottom */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-700 mt-4">
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 rounded-sm hover:bg-gray-200">Save</button>
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-sm hover:bg-blue-400">Apply</button>
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


// --- The Main Modal Component (Customize Pop-up) ---
const CustomizeFilterModal = ({ isVisible, onClose }) => {
  // State to manage which tab is active: 'filters' or 'edit'
  // 'Edit Filter' is open by default
  const [activeTab, setActiveTab] = useState('edit');

  if (!isVisible) return null;

  return (
    // Backdrop overlay
    <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-100 p-4">
      {/* Modal Container */}
      <div className="bg-[#2c2c2c] rounded-sm shadow-2xl w-full max-w-xl min-h-[70%] overflow-hidden border border-gray-700 text-gray-300 flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold">Trading Accounts Filters</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Tabs and Content Wrapper */}
        <div className="flex flex-col flex-grow min-h-0">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 px-4">
            <button
                className={`py-2 px-4 text-sm font-medium transition-all ${
                activeTab === 'filters'
                    ? 'border-b-2 border-blue-500 text-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('filters')}
            >
                Filters
            </button>
            <button
                className={`py-2 px-4 text-sm font-medium transition-all ${
                activeTab === 'edit'
                    ? 'border-b-2 border-blue-500 text-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('edit')}
            >
                Edit Filter
            </button>
            </div>

            {/* Body Content (Tab-dependent) */}
            <div className="flex-grow overflow-y-auto">
            {activeTab === 'edit' ? <EditFilterTab onClose={onClose} /> : <FiltersTab onClose={onClose} />}
            </div>
        </div>
        
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 2. DROPDOWN COMPONENTS
// ----------------------------------------------------------------------

// --- AdjustmentsHorizontalIcon Dropdown Menu Component (Existing Checkbox Menu) ---
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


// --- FunnelIcon Dropdown Menu Component (Triggers Modal on Customize) ---
const FunnelDropdownMenu = ({ isVisible, setMenuOpen, setModalOpen }) => { 
  if (!isVisible) return null;

  const handleCustomizeClick = () => {
    setMenuOpen(false); // Close the dropdown
    setModalOpen(true); // Open the modal
  };

  return (
    <div className="absolute top-full left-0 mt-1 w-48 bg-[#2c2c2c] border border-gray-700 rounded-sm shadow-lg z-50">
      <div className="py-1">
        <div
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
          onClick={() => { /* handle 'None' action */ setMenuOpen(false); }}
        >
          <Square2StackIcon className="w-5 h-5 text-blue-500" /> {/* Blue outlined square */}
          <span>None</span>
        </div>
      </div>
      
      <div className="border-t border-gray-700 my-1"></div>

      <div className="py-1">
        <div 
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
          onClick={handleCustomizeClick} // Call the new handler
        >
          <Cog8ToothIcon className="w-5 h-5 text-blue-500" /> {/* Blue cog icon */}
          <span>Customize</span>
        </div>
      </div>
    </div>
  );
};


// ----------------------------------------------------------------------
// 3. MAIN TOPBAR COMPONENT
// ----------------------------------------------------------------------

export default function Topbar() {
  const [isAdjustmentsMenuOpen, setIsAdjustmentsMenuOpen] = useState(false);
  const [isFunnelMenuOpen, setIsFunnelMenuOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);

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
  
  // Base classes for the dark theme look
  const containerClasses = "flex items-center border border-gray-400 rounded-md bg-[#2c2c2c] text-gray-300";
  const buttonBaseClasses = "px-3 py-2 md:px-4 md:py-2 hover:bg-gray-700 transition-colors flex items-center gap-2 h-full";
  const iconClasses = "h-5 w-5 md:h-6 md:w-6 text-gray-400";

  // Function to toggle Funnel dropdown and close Adjustments dropdown
  const toggleFunnelMenu = () => {
    setIsFunnelMenuOpen(!isFunnelMenuOpen);
    setIsAdjustmentsMenuOpen(false); // Close other menu
  };

  // Function to toggle Adjustments dropdown and close Funnel dropdown
  const toggleAdjustmentsMenu = () => {
    setIsAdjustmentsMenuOpen(!isAdjustmentsMenuOpen);
    setIsFunnelMenuOpen(false); // Close other menu
  };

  return (
    <> {/* Use Fragment to wrap the header and the modal */}
      <header className="flex items-center justify-between bg-[#2c2c2c] px-4 sm:px-6 lg:px-8 xl:px-12 py-3 border-b border-gray-800">
        <div className="flex items-center gap-3 md:gap-4">
        </div>

        <div className="flex items-center gap-3 md:gap-4 w-[220px]">
          {/* Right-most filter button */}
          <div className="relative">
            <div className={containerClasses}>
              
              {/* 1. Funnel Icon Button (Filter Preset Dropdown Trigger) */}
              <button 
                className={`rounded-l-md ${buttonBaseClasses}`}
                aria-label="Filter preset menu"
                onClick={toggleFunnelMenu}
              >
                <FunnelIcon className={iconClasses} />
                <span className="hidden sm:inline">Filter</span>
              </button>

              {/* 2. Separator */}
              <div className="h-full border-l border-gray-700"></div>

              {/* 3. AdjustmentsHorizontalIcon Button (Checkbox Dropdown Trigger) */}
              <button 
                className={buttonBaseClasses}
                aria-label="Advanced filter settings"
                onClick={toggleAdjustmentsMenu}
              >
                <AdjustmentsHorizontalIcon className={iconClasses} />
              </button>

              {/* 4. Separator */}
              <div className="h-full border-l border-gray-700"></div>

              {/* 5. Search Input Field */}
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
            
            {/* Render the Funnel Dropdown Menu */}
            <FunnelDropdownMenu 
              isVisible={isFunnelMenuOpen} 
              setMenuOpen={setIsFunnelMenuOpen} 
              setModalOpen={setIsCustomizeModalOpen}
            />

            {/* Render the Adjustments Dropdown Menu */}
            <AdjustmentsDropdownMenu 
              isVisible={isAdjustmentsMenuOpen} 
              setMenuOpen={setIsAdjustmentsMenuOpen} 
              filterOptions={filterOptions} 
            />
          </div>
        </div>
      </header>

      {/* Render the Customize Filter Modal */}
      <CustomizeFilterModal
        isVisible={isCustomizeModalOpen}
        onClose={() => setIsCustomizeModalOpen(false)}
      />
    </>
  );
}