import React, { useState } from "react";
import CommissionAddEditModal from "./CommissionAddEditModal";

// Mock data for the Symbols tab table (from previous request)
const initialSymbolsData = [
    { symbol: 'FFX Prime\\FX-Major*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX Prime\\FX-Minor*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX Prime\\FX-Exotic*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX Prime\\Gold\\*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX Prime\\Silver\\*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX\\Oil*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX\\Crypto\\*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX\\Crypto II*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX\\Spot Index*', initialMargin: 'Default', maintenanceMargin: 'Default' },
    { symbol: 'FFX\\Commodities\\*', initialMargin: 'Default', maintenanceMargin: 'Default' },
];

// Mock data for the Commissions tab table (from your new image)
const initialCommissionsData = [
    { 
        name: 'crypto', 
        symbol: 'FFX\\Crypto\\*', 
        type: 'standard...', 
        range: 'volume', 
        charge: 'instant', 
        details: '0-1 000 - 20.00 - depo...' 
    },
    { 
        name: 'com...', 
        symbol: 'FFX\\Commoditi...', 
        type: 'standard...', 
        range: 'volume', 
        charge: 'instant', 
        details: '0-1 000 - 20.00 - depo...' 
    },
    { 
        name: 'Index', 
        symbol: 'FFX\\Spot Index...', 
        type: 'standard...', 
        range: 'volume', 
        charge: 'instant', 
        details: '0-1 000 - 2.00 - depo...' 
    },
    { 
        name: 'crypt...', 
        symbol: 'FFX\\Crypto II\\*', 
        type: 'standard...', 
        range: 'volume', 
        charge: 'instant', 
        details: '0-1 000 - 2.00 - depo...' 
    },
    { 
        name: 'oil', 
        symbol: 'FFX\\Oil\\*', 
        type: 'standard...', 
        range: 'volume', 
        charge: 'instant', 
        details: '0-1 000 - 2.00 - depo...' 
    },
];

// Group configuration modal for setting margin, symbols, etc., for a specific group.
export default function GroupConfigModal({ open, onClose, groupName = "OXO_B\\Standard" }) {
    // State to manage the active tab (Margin, Symbols, Commissions). Initializing to 'Margin' to show the margin tab by default.
    const [activeTab, setActiveTab] = useState("Margin");
    
    // --- Margin Tab States ---
    const [marginCallLevel, setMarginCallLevel] = useState("100");
    const [stopOutLevel, setStopOutLevel] = useState("50");
    const [compensateNegative, setCompensateNegative] = useState(false);
    const [withdrawCredit, setWithdrawCredit] = useState(false);
    const [floatingLeverage, setFloatingLeverage] = useState("None");

    // --- Symbols Tab States ---
    const [symbols, setSymbols] = useState(initialSymbolsData);
    const [selectedSymbolIndex, setSelectedSymbolIndex] = useState(0);

    // --- Commissions Tab States ---
    const [commissions, setCommissions] = useState(initialCommissionsData);
    const [selectedCommissionIndex, setSelectedCommissionIndex] = useState(0);
    const [isCommissionModalOpen, setIsCommissionModalOpen] = useState(false);

    if (!open) return null;

    // Generic styling for this modal
    const inputStyle =
        "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-xs p-[2px] rounded-sm focus:ring-blue-500 focus:border-blue-500 block";
    const labelStyle = "block text-xs font-medium text-gray-400 mb-1";
    const checkboxStyle = "w-4 h-3 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500";
    const tabButtonStyle = (tab) => 
        `px-4 py-2 text-sm font-medium ${
            activeTab === tab
                ? "bg-[#1e1e1e] text-white border-b-2 border-blue-500"
                : "text-gray-400 hover:bg-[#3e3e3e]"
        } transition-colors duration-150 rounded-t-sm`;
    
    // Styling for the sidebar buttons in the Symbols/Commissions tab
    const sidebarButtonStyle = "px-4 py-1 text-sm border border-gray-600 text-gray-200 rounded hover:bg-[#4c4c4c] w-full text-center";
    const activeRowStyle = "bg-blue-700/50 hover:bg-blue-700/60";
    const defaultRowStyle = "hover:bg-[#2e2e2e]";

    // Simple placeholder logic for symbol/commission management (Up/Down/Add/Edit/Delete)
    const handleAction = (tab, action) => {
        if (tab === 'Commissions' && action === 'Add') {
            setIsCommissionModalOpen(true);
        } else {
            console.log(`${tab} - ${action} clicked`);
        }
    };

    const commissionHeaders = [
        "Name", "Symbol", "Type", "Range", "Charge", "Details"
    ];


    // --- Render Logic ---
    return (
        <>
            <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-[60]">
                {/* Modal Content Area (Dark theme, smaller size) */}
                <div className="bg-[#1e1e1e] rounded-sm border border-gray-700 shadow-2xl max-w-xl w-full">
                {/* Title Bar */}
                <div className="flex items-center justify-between p-1 bg-[#2c2c2c] border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-100 ml-2">
                        Group: **{groupName}**
                    </h3>
                    <div className="flex items-center">
                        {/* Min/Max/Close Buttons (Dummy) */}
                        <button className="text-gray-400 hover:bg-[#3e3e3e] w-8 mb-1  h-6 text-3xl leading-none">-</button>
                        <button className="text-gray-400 hover:bg-[#3e3e3e] w-8 h-6 text-xl leading-none">☐</button>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:bg-red-600 hover:text-white w-8 h-6 text-2xl leading-none"
                        >
                            ×
                        </button>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex bg-[#2c2c2c] border-b border-[#1e1e1e] p-0">
                    <button onClick={() => setActiveTab("Margin")} className={tabButtonStyle("Margin")}>Margin</button>
                    <button onClick={() => setActiveTab("Symbols")} className={tabButtonStyle("Symbols")}>Symbols</button>
                    <button onClick={() => setActiveTab("Commissions")} className={tabButtonStyle("Commissions")}>Commissions</button>
                </div>

                {/* Main Content Area */}
                <div className="p-4 bg-[#2c2c2c]">
                    
                    {/* ------------------- Margin Tab Content ------------------- */}
                    {activeTab === "Margin" && (
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <div className="p-2 bg-green-700/50 rounded-full">
                                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM2 20a1 1 0 011-1h14a1 1 0 011 1H2zM13 11a5 5 0 00-1.859-3.831A5.969 5.969 0 0110 8a5.969 5.969 0 01-1.141-.169A5 5 0 007 11v1h6v-1z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-200 text-sm">Please set up margin requirements.</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <label htmlFor="riskManagement" className={labelStyle + " w-32 flex-shrink-0 mb-0"}>Risk management:</label>
                                    <input type="text" id="riskManagement" className={inputStyle + " flex-grow"} value="for Retail Forex, CFD, Futures with hedged positions" readOnly />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <label htmlFor="marginCall" className={labelStyle + " flex-shrink-0 mb-0"}>Margin call level:</label>
                                    <input type="text" id="marginCall" className={inputStyle + " w-20"} value={marginCallLevel} onChange={(e) => setMarginCallLevel(e.target.value)} />
                                    <label htmlFor="stopOut" className={labelStyle + " w-24 flex-shrink-0 mb-0 text-right"}>Stop out level:</label>
                                    <input type="text" id="stopOut" className={inputStyle + " w-20"} value={stopOutLevel} onChange={(e) => setStopOutLevel(e.target.value)} />
                                    <div className="relative">
                                        <select className={inputStyle} defaultValue="percent">
                                            <option value="percent">in %, percent</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">&#9662;</div>
                                    </div>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <div className="flex items-center">
                                        <input id="compensateNegative" type="checkbox" checked={compensateNegative} onChange={(e) => setCompensateNegative(e.target.checked)} className={checkboxStyle} />
                                        <label htmlFor="compensateNegative" className="ml-2 text-xs font-medium text-gray-200 cursor-pointer">Compensate negative balance after stop out</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="withdrawCredit" type="checkbox" checked={withdrawCredit} onChange={(e) => setWithdrawCredit(e.target.checked)} className={checkboxStyle} />
                                        <label htmlFor="withdrawCredit" className="ml-2 text-xs font-medium text-gray-200 cursor-pointer">Withdraw credit after negative balance compensation</label>
                                    </div>
                                </div>
                                <div className="flex items-center pt-4">
                                    <label htmlFor="floatingLeverage" className={labelStyle + " w-44 flex-shrink-0 mb-0"}>Floating leverage profile:</label>
                                    <div className="relative flex-grow">
                                        <select id="floatingLeverage" className={inputStyle + " w-full"} value={floatingLeverage} onChange={(e) => setFloatingLeverage(e.target.value)}>
                                            <option value="None">None</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">&#9662;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ------------------- Symbols Tab Content ------------------- */}
                    {activeTab === "Symbols" && (
                        <div className=" space-x-4">
                            <div className="flex items-center space-x-2">
                                    <div className="p-2 bg-green-700/50 rounded-full">
                                        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM2 20a1 1 0 011-1h14a1 1 0 011 1H2zM13 11a5 5 0 00-1.859-3.831A5.969 5.969 0 0110 8a5.969 5.969 0 01-1.141-.169A5 5 0 007 11v1h6v-1z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-200 text-sm">Please set up individual parameters of symbols trade for the group.</p>
                                </div>
                            
                            <div className="flex gap-6 mt-4">
                                <div className="flex flex-col space-y-2 w-20">
                                <button onClick={() => handleAction('Symbols', 'Up')} className={sidebarButtonStyle}>Up</button>
                                <button onClick={() => handleAction('Symbols', 'Down')} className={sidebarButtonStyle}>Down</button>
                                <div className="h-48"></div>
                                <button onClick={() => handleAction('Symbols', 'Add')} className={sidebarButtonStyle}>Add</button>
                                <button onClick={() => handleAction('Symbols', 'Edit')} className={sidebarButtonStyle}>Edit</button>
                                <button onClick={() => handleAction('Symbols', 'Delete')} className={sidebarButtonStyle}>Delete</button>
                            </div>
                                <div className="overflow-x-auto border border-gray-600 rounded-sm">
                                    <table className="min-w-full divide-y divide-gray-600">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider bg-[#2c2c2c] w-20">Symbol</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider bg-[#2c2c2c]">Initial Margin</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider bg-[#2c2c2c] ">Maintenance Margin</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-[#3c3c3c] divide-y divide-gray-700 text-sm text-gray-300">
                                            {symbols.map((item, index) => (
                                                <tr 
                                                    key={index}
                                                    className={index === selectedSymbolIndex ? activeRowStyle : defaultRowStyle}
                                                    onClick={() => setSelectedSymbolIndex(index)}
                                                    onDoubleClick={() => handleAction('Symbols', 'Edit')}
                                                >
                                                    <td className="px-4 py-1.5 whitespace-nowrap flex items-center">
                                                        <span className="text-yellow-500 mr-2">$</span>
                                                        {item.symbol}
                                                    </td>
                                                    <td className="px-4 py-1.5 whitespace-nowrap">{item.initialMargin}</td>
                                                    <td className="px-4 py-1.5 whitespace-nowrap">{item.maintenanceMargin}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* ------------------- Commissions Tab Content ------------------- */}
                    {activeTab === "Commissions" && (
                         <div className="space-x-4">
                            {/* Left Sidebar Buttons */}
                            <div className="flex items-center space-x-2">
                                    <div className="p-2 bg-green-700/50 rounded-full">
                                        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM2 20a1 1 0 011-1h14a1 1 0 011 1H2zM13 11a5 5 0 00-1.859-3.831A5.969 5.969 0 0110 8a5.969 5.969 0 01-1.141-.169A5 5 0 007 11v1h6v-1z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-200">Please set up **commissions** for accounts in the group.</p>
                                </div>
                            

                            {/* Right Content Area (Title and Table) */}
                            <div className="flex gap-4  space-y-4">
                                <div className="flex flex-col space-y-2 w-20 mt-2">
                                <button onClick={() => handleAction('Commissions', 'Up')} className={sidebarButtonStyle}>Up</button>
                                <button onClick={() => handleAction('Commissions', 'Down')} className={sidebarButtonStyle}>Down</button>
                                <div className="h-4"></div> {/* Separator Space */}
                                <button onClick={() => handleAction('Commissions', 'Add')} className={sidebarButtonStyle}>Add</button>
                                <button onClick={() => handleAction('Commissions', 'Edit')} className={sidebarButtonStyle}>Edit</button>
                                <button onClick={() => handleAction('Commissions', 'Delete')} className={sidebarButtonStyle}>Delete</button>
                            </div>

                                {/* Commissions Table */}
                                <div className="overflow-x-auto overflow-y-auto custom-scrollbar border border-gray-600 rounded-sm">
                                    <table className="min-w-full divide-y divide-gray-600">
                                        <thead>
                                            <tr>
                                                {commissionHeaders.map((header) => (
                                                    <th key={header} className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider bg-[#2c2c2c] whitespace-nowrap">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-[#3c3c3c] divide-y divide-gray-700 text-sm text-gray-300">
                                            {commissions.map((item, index) => (
                                                <tr 
                                                    key={index}
                                                    className={index === selectedCommissionIndex ? activeRowStyle : defaultRowStyle}
                                                    onClick={() => setSelectedCommissionIndex(index)}
                                                    onDoubleClick={() => handleAction('Commissions', 'Edit')}
                                                >
                                                    <td className="px-4 py-1.5 whitespace-nowrap flex items-center">
                                                        {/* Percentage Icon */}
                                                        <span className="text-green-500 mr-2">%</span>
                                                        {item.name}
                                                    </td>
                                                    <td className="px-4 py-1.5 whitespace-nowrap">{item.symbol}</td>
                                                    <td className="px-4 py-1.5 whitespace-nowrap">{item.type}</td>
                                                    <td className="px-4 py-1.5 whitespace-nowrap">{item.range}</td>
                                                    <td className="px-4 py-1.5 whitespace-nowrap">{item.charge}</td>
                                                    <td className="px-4 py-1.5 whitespace-nowrap">{item.details}</td>
                                                </tr>
                                            ))}
                                            {/* 'Click to add...' row */}
                                            <tr className="hover:bg-[#2e2e2e] cursor-pointer" onClick={() => handleAction('Commissions', 'Add')}>
                                                <td colSpan={commissionHeaders.length} className="px-4 py-1.5 whitespace-nowrap text-green-400 bg-[#2c2c2c]">
                                                    + click to add...
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end p-2 bg-[#2c2c2c] border-t border-gray-700 space-x-2">
                    <button className="px-4 py-1 text-sm border border-gray-600 text-white rounded hover:bg-blue-700">
                        OK
                    </button>
                    <button onClick={onClose} className="px-4 py-1 text-sm  text-gray-200 rounded hover:bg-gray-600 border border-gray-600">
                        Cancel
                    </button>
                    <button className="px-4 py-1 text-sm  text-gray-200 rounded hover:bg-gray-600 border border-gray-600">
                        Help
                    </button>
                </div>
            </div>
        </div>

        {/* Commission Add/Edit Modal */}
        <CommissionAddEditModal
            open={isCommissionModalOpen}
            onClose={() => setIsCommissionModalOpen(false)}
            isEditing={false}
            initialData={{}}
        />
        </>
    );
}