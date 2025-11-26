import React, { useState, useContext } from "react";
import Mycontext from "../context/Mycontext";

// Modal for adding or editing a specific symbol's commission parameters.
export default function CommissionAddEditModal({ open, onClose, isEditing = false, initialData = {} }) {
    const { mode } = useContext(Mycontext);

    // States for input fields based on the image
    const [name, setName] = useState(initialData.name || "");
    const [description, setDescription] = useState(initialData.description || "");
    const [symbol, setSymbol] = useState(initialData.symbol || "*");
    const [range, setRange] = useState(initialData.range || "Volume");
    const [charge, setCharge] = useState(initialData.charge || "Daily");
    const [turnoverCurrency, setTurnoverCurrency] = useState(initialData.turnoverCurrency || "");
    const [commissionType, setCommissionType] = useState(initialData.commissionType || "Standard commission");

    if (!open) return null;

    // Generic styling
    const inputStyle = mode === "dark"
        ? "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-xs rounded-sm focus:ring-blue-500 focus:border-blue-500 block"
        : "bg-white border border-gray-400 text-black text-xs rounded-sm focus:ring-blue-500 focus:border-blue-500 block";
    const labelStyle = `block text-xs font-medium mb-1 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`;
    const radioStyle = mode === "dark"
        ? "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500"
        : "w-4 h-4 text-blue-600 bg-white border-gray-400 focus:ring-blue-500";
    const buttonStyle = mode === "dark"
        ? "px-4 py-1 text-sm bg-gray-600 text-gray-200 rounded hover:bg-gray-500"
        : "px-4 py-1 text-sm bg-gray-300 text-black rounded hover:bg-gray-400";
    const smallButtonStyle = `px-4 py-1 text-sm border rounded ${mode === "dark" ? "border-gray-600 text-gray-200 hover:bg-[#4c4c4c]" : "border-gray-400 text-black hover:bg-gray-300"}`;


    // Placeholder for save logic
    const handleSave = () => {
        // Here you would gather all state data and pass it back to the parent component
        const data = { name, description, symbol, range, charge, turnoverCurrency, commissionType };
        console.log("Saving Commission Data:", data);
        onClose();
    };

    const title = isEditing ? "Edit Commission" : "New Commission";

    return (
        <div className="fixed inset-0 backdrop-blur  flex items-center justify-center z-[70]">
            <div className={`rounded-sm border shadow-2xl max-w-xl w-full ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-white border-gray-300"}`}>

                {/* Title Bar */}
                <div className={`flex items-center justify-between p-1 border-b ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-gray-100 border-gray-300"}`}>
                    <h3 className={`text-sm font-semibold ml-2 ${mode === "dark" ? "text-gray-100" : "text-black"}`}>
                        {title}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:bg-red-600 hover:text-white w-8 h-6 text-xl leading-none">
                        ×
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="p-4 space-y-4">
                    
                    {/* Header Info */}
                    <div className="flex items-start space-x-3">
                        {/* Golden Dollar Icon */}
                        <div className="px-4 py-2 bg-yellow-700/50 rounded-lg">
                            <span className="text-3xl text-yellow-400 font-bold">$</span>
                        </div>
                        <p className={`text-xs pt-3.5 ${mode === "dark" ? "text-gray-200" : "text-black"}`}>Adjustment of commissions parameters of the symbol.</p>
                    </div>

                    {/* Input Fields and Radio Buttons */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 items-end">
                        

                            <div className="">
                                <div className="flex items-center gap-2">
                                <label htmlFor="name" className={labelStyle}>Name:</label>
                            <input type="text" id="name" className={inputStyle + ""} value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            </div>
                            <div className="flex items-center gap-2">
                            <label htmlFor="description" className={labelStyle}>Description:</label>
                            <input type="text" id="description" className={inputStyle + " w-full"} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        

                        {/* Column 1: Symbol & Range */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <label htmlFor="symbol" className={labelStyle}>Symbol:</label>
                                <div className="relative">
                                    <select id="symbol" className={inputStyle + " w-40"} value={symbol} onChange={(e) => setSymbol(e.target.value)}>
                                        <option value="*">*</option>
                                        <option value="EURUSD">EURUSD</option>
                                        <option value="GOLD">GOLD</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">&#9662;</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <label htmlFor="range" className={labelStyle}>Range:</label>
                                <div className="relative">
                                    <select id="range" className={inputStyle + " w-40"} value={range} onChange={(e) => setRange(e.target.value)}>
                                        <option value="Volume">Volume</option>
                                        <option value="Lots">Lots</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">&#9662;</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="charge" className={labelStyle}>Charge:</label>
                                <div className="relative">
                                    <select id="charge" className={inputStyle + " w-40"} value={charge} onChange={(e) => setCharge(e.target.value)}>
                                        <option value="Daily">Daily</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">&#9662;</div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Charge & Turnover Currency */}
                        <div className="space-y-2">

                        <fieldset className={`p-2 space-y-2 border rounded-sm self-start ${mode === "dark" ? "border-gray-300" : "border-gray-400"}`}>
                            <legend className="sr-only">Commission Type</legend>
                            <div className="flex items-center">
                                <input id="standardCommission" type="radio" value="Standard commission" checked={commissionType === "Standard commission"} onChange={(e) => setCommissionType(e.target.value)} className={radioStyle} />
                                <label htmlFor="standardCommission" className={`ml-2 text-xs font-medium cursor-pointer ${mode === "dark" ? "text-gray-200" : "text-black"}`}>Standard commission</label>
                            </div>
                            <div className="flex items-center">
                                <input id="agentCommission" type="radio" value="Agent commission" checked={commissionType === "Agent commission"} onChange={(e) => setCommissionType(e.target.value)} className={radioStyle} />
                                <label htmlFor="agentCommission" className={`ml-2 text-xs font-medium cursor-pointer ${mode === "dark" ? "text-gray-200" : "text-black"}`}>Agent commission</label>
                            </div>
                            <div className="flex items-center">
                                <input id="fee" type="radio" value="Fee" checked={commissionType === "Fee"} onChange={(e) => setCommissionType(e.target.value)} className={radioStyle} />
                                <label htmlFor="fee" className={`ml-2 text-xs font-medium cursor-pointer ${mode === "dark" ? "text-gray-200" : "text-black"}`}>Fee</label>
                            </div>
                        </fieldset>
                            
                           
                        </div>
                        <div className="flex items-center justify-between">
                                <label htmlFor="turnoverCurrency" className={labelStyle + " w-44"} >Turnover currency:</label>
                                <input type="text" id="turnoverCurrency" className={inputStyle + " w-full"} value={turnoverCurrency} onChange={(e) => setTurnoverCurrency(e.target.value)} />
                            </div>
                        
                    </div>

                    {/* Commissions Table (Empty Placeholder) */}
                    <div className="flex space-x-4 pt-4">
                        <div className={`flex-grow border h-40 overflow-auto ${mode === "dark" ? "custom-scrollbar" : "custom-scrollbar-light"} ${mode === "dark" ? "border-gray-600" : "border-gray-400"}`}>
                            <table className={`min-w-full divide-y ${mode === "dark" ? "divide-gray-600" : "divide-gray-400"}`}>
                                <thead>
                                    <tr>
                                        {['From', 'To', 'Commission', 'Minimal', 'Maximal', 'Mode', 'Currency', 'Type'].map((header) => (
                                            <th key={header} className={`px-3 py-1.5 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap ${mode === "dark" ? "text-gray-400 bg-[#2c2c2c]" : "text-gray-600 bg-gray-100"}`}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                {/* Empty Tbody as seen in the image */}
                                <tbody className={`divide-y text-sm ${mode === "dark" ? "divide-gray-700 text-gray-300" : "divide-gray-400 text-black"}`}>
                                    <tr>
                                        <td colSpan={8} className={`text-center p-4 italic ${mode === "dark" ? "text-gray-500 bg-[#1e1e1e]" : "text-gray-600 bg-gray-50"}`}>No commission tiers defined.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Add/Edit/Delete Buttons for the INNER table */}
                        <div className="flex flex-col space-y-2 w-20">
                            <button className={smallButtonStyle}>Add</button>
                            <button className={smallButtonStyle}>Edit</button>
                            <button className={smallButtonStyle}>Delete</button>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className={`flex justify-end p-2 border-t space-x-2 ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-gray-100 border-gray-300"}`}>
                    <button onClick={handleSave} className={`px-4 py-1 text-sm border rounded ${mode === "dark" ? "border-gray-600 hover:bg-gray-600 text-white" : "border-gray-400 hover:bg-gray-400 text-black"}`}>
                        OK
                    </button>
                    <button onClick={onClose} className={buttonStyle}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}