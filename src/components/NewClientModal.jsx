// NewClientModal.jsx
import React, { useState, useContext } from "react";
import { FaUser, FaHome, FaMapMarkerAlt, FaBalanceScale } from 'react-icons/fa';
import Mycontext from "../context/Mycontext";

const getInputStyle = (mode) =>
  mode === "dark"
    ? "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
    : "bg-white border border-gray-400 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1";
const getInputStyleSmall = (mode) =>
  mode === "dark"
    ? "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 h-[34px]"
    : "bg-white border border-gray-400 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 h-[34px]";
const getLabelStyle = (mode) => `block text-sm mb-1 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`;
const getSelectStyle = (mode) =>
  mode === "dark"
    ? "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1 pr-8 block w-full appearance-none"
    : "bg-white border border-gray-400 text-black text-sm rounded-sm p-1 pr-8 block w-full appearance-none";
const getIconStyle = (mode) => `absolute right-2 top-1/2 transform -translate-y-1/2 text-xs pointer-events-none ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`;

/**
 * Renders the modal for creating a new client.
 * It features a sidebar navigation for different sections (Client, Personal, Address, Regulation).
 */
export default function NewClientModal({ open, onClose }) {
  const { mode } = useContext(Mycontext);
  // State for the active sidebar tab, defaulting to "Client"
  const [activeSection, setActiveSection] = useState("Client");

  if (!open) return null;

  const sections = ["Client", "Personal", "Address", "Regulation"];

  // Helper function to render dropdowns with a chevron icon
  const renderSelect = (id, label, defaultValue, options) => (
    <div>
      <label htmlFor={id} className={getLabelStyle(mode)}>
        {label}
      </label>
      <div className="relative">
        <select id={id} className={getSelectStyle(mode)} defaultValue={defaultValue}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className={getIconStyle(mode)}>&#9662;</div>
      </div>
    </div>
  );
  
  // Helper function to render dropdowns for small, specific contexts (like Trading experience)
  const renderSelectSmall = (id, label, defaultValue, options) => (
    <div>
      <label htmlFor={id} className={getLabelStyle(mode)}>
        {label}
      </label>
      <div className="relative">
        <select id={id} className={getSelectStyle(mode)} defaultValue={defaultValue}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className={getIconStyle(mode)}>&#9662;</div>
      </div>
    </div>
  );

  // Helper function to render simple text inputs
  const renderInput = (id, label, defaultValue = "", type = "text") => (
    <div>
      <label htmlFor={id} className={getLabelStyle(mode)}>
        {label}
      </label>
      <input type={type} id={id} className={getInputStyle(mode)} defaultValue={defaultValue} />
    </div>
  );
    
  // Helper function to render a labeled text input with a small placeholder
  const renderInputWithPlaceholder = (id, label, placeholder) => (
    <div>
      <label htmlFor={id} className={getLabelStyle(mode)}>
        {label}
      </label>
      <input type="text" id={id} className={getInputStyle(mode)} placeholder={placeholder} />
    </div>
  );

  // Helper function to render date inputs with clear and calendar buttons
  const renderDateInput = (id, label) => (
    <div>
      <label htmlFor={id} className={getLabelStyle(mode)}>
        {label}
      </label>
      <div className="flex items-center space-x-1">
        <input type="text" id={id} className={`${getInputStyle(mode)} flex-grow`} defaultValue="" />
        <button className={`border text-red-500 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#3c3c3c] border-gray-600 hover:bg-gray-700" : "bg-white border-gray-400 hover:bg-gray-200"}`}>
            &times;
        </button>
        <button className={`border text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#1e1e1e] border-gray-600 text-gray-100 hover:bg-gray-700" : "bg-gray-100 border-gray-400 text-black hover:bg-gray-200"}`}>
            &#9662;
        </button>
      </div>
    </div>
  );
  
  // Helper function for the small currency input fields
  const renderCurrencyInput = (id, label, defaultValue = "0") => (
    <div>
      <label htmlFor={id} className={getLabelStyle(mode)}>
        {label}
      </label>
      <input type="number" id={id} className={getInputStyleSmall(mode)} defaultValue={defaultValue} />
    </div>
  );

  // --- Content for each section based on provided images ---
  const renderContent = () => {
    switch (activeSection) {
      case "Client":
        return (
          <div className="space-y-2">
            {renderSelect("clientType", "Type", "Individual", ["Individual", "Corporate"])}
            {renderSelect("clientStatus", "Status", "Approved", ["Approved", "Pending", "Denied"])}
            {renderSelect("kycStatus", "KYC status", "Undefined", ["Undefined", "Verified", "Rejected"])}
            {renderSelect("assignedManager", "Assigned manager", "None", ["None", "Manager A", "Manager B"])}
            {renderSelect("preferredGroup", "Preferred trading group", "", ["", "Group 1", "Group 2"])}
            
            <hr className="border-gray-700 my-4" />

            {renderSelect("approvedBy", "Approved by", "None", ["None", "Admin 1", "Admin 2"])}
            
            {/* Date Fields */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className={getLabelStyle(mode)}>Approval date</label>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className={`w-4 h-4 text-blue-600 rounded focus:ring-blue-500 ${mode === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-400"}`} />
                        <input type="text" className={`${getInputStyle(mode)} w-full`} defaultValue="" />
                        <div className="relative">
                            <button className={`border text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#1e1e1e] border-gray-600 text-gray-100 hover:bg-gray-700" : "bg-gray-100 border-gray-400 text-black hover:bg-gray-200"}`}>&#9662;</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className={getLabelStyle(mode)}>Close date</label>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className={`w-4 h-4 text-blue-600 rounded focus:ring-blue-500 ${mode === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-400"}`} />
                        <input type="text" className={`${getInputStyle(mode)} w-full`} defaultValue="" />
                        <div className="relative">
                            <button className={`border text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#1e1e1e] border-gray-600 text-gray-100 hover:bg-gray-700" : "bg-gray-100 border-gray-400 text-black hover:bg-gray-200"}`}>&#9662;</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Last Contact Date */}
            <div className="space-y-2">
                <label className={getLabelStyle(mode)}>Last contact date</label>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className={`w-4 h-4 text-blue-600 rounded focus:ring-blue-500 ${mode === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-400"}`} />
                    <input type="text" className={`${getInputStyle(mode)} w-full`} defaultValue="" />
                    <div className="relative">
                        <button className={`border text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#1e1e1e] border-gray-600 text-gray-100 hover:bg-gray-700" : "bg-gray-100 border-gray-400 text-black hover:bg-gray-200"}`}>&#9662;</button>
                    </div>
                </div>
            </div>

            <hr className={`my-4 ${mode === "dark" ? "border-gray-700" : "border-gray-300"}`} />

            {renderInput("leadSource", "Lead source")}
            {renderInput("leadCampaign", "Lead campaign")}
            {renderInput("introducer", "Introducer")}
          </div>
        );
      case "Personal":
        return (
            <div className="space-y-4">
                {renderSelect("title", "Title", "Not specified", ["Not specified", "Mr.", "Ms.", "Dr."])}
                
                <div className="grid grid-cols-2 gap-4">
                    {renderInput("firstName", "First name")}
                    {renderInput("secondName", "Second name")}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    {renderInput("middleName", "Middle name")}
                </div>
                
                <div className="grid grid-cols-2 gap-4 items-end">
                    {/* Gender and Birthdate */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Gender */}
                        <div>
                            <label htmlFor="gender" className={getLabelStyle(mode)}>Gender</label>
                            <div className="flex items-center space-x-1">
                                <div className="relative flex-grow">
                                    <select id="gender" className={getSelectStyle(mode)} defaultValue="Not specified">
                                        <option>Not specified</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <div className={getIconStyle(mode)}>&#9662;</div>
                                </div>
                                <button className={`border text-red-500 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#1e1e1e] border-gray-600 hover:bg-gray-700" : "bg-white border-gray-400 hover:bg-gray-200"}`}>
                                    &times;
                                </button>
                            </div>
                        </div>

                        {/* Birthdate */}
                        <div>
                            <label htmlFor="birthdate" className={getLabelStyle(mode)}>Birthdate</label>
                            <div className="flex items-center space-x-1">
                                <input type="text" id="birthdate" className={`${getInputStyle(mode)} flex-grow`} defaultValue="" />
                                <button className={`border text-red-500 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#1e1e1e] border-gray-600 hover:bg-gray-700" : "bg-white border-gray-400 hover:bg-gray-200"}`}>
                                    &times;
                                </button>
                                <button className={`border text-sm rounded-sm p-1.5 w-8 flex items-center justify-center ${mode === "dark" ? "bg-[#1e1e1e] border-gray-600 text-gray-100 hover:bg-gray-700" : "bg-gray-100 border-gray-400 text-black hover:bg-gray-200"}`}>
                                    &#9662;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    {renderSelect("language", "Language", "Not specified", ["Not specified", "English", "Spanish", "French"])}
                    {renderSelect("preferredMethod", "Preferred method", "Not specified", ["Not specified", "Email", "Phone", "Messenger"])}
                </div>
                
                {renderInput("email", "Email", "aakankshalp@gmail.com", "email")}
                
                {/* Mobile/Phone field with dropdown/input */}
                <div>
                    <label htmlFor="mobile" className={getLabelStyle(mode)}>Mobile</label>
                    <div className="flex space-x-2">
                        <div className="relative w-1/3">
                            <select id="mobilePrefix" className={getSelectStyle(mode)} defaultValue="">
                                <option value="">+91 (India)</option>
                                <option value="">+1 (USA)</option>
                                {/* Country codes */}
                            </select>
                            <div className={getIconStyle(mode)}>&#9662;</div>
                        </div>
                        <input type="text" id="mobile" className={`${getInputStyle(mode)} w-2/3 border-red-500`} defaultValue="0000000000" />
                    </div>
                </div>

                {renderInput("messengers", "Messengers (skype:username, icq:userid, etc.)")}
                {renderInput("socialNetworks", "Social Networks (fb:username, twitter:username, etc.)")}
                {renderInput("externalId", "External ID")}
            </div>
        );
      case "Address":
        return (
            <div className="space-y-4 ">
                {renderSelect("documentType", "Document type", "", ["", "Passport", "Driver's License", "Utility Bill"])}
                
                {renderInputWithPlaceholder("documentNumber", "Document number", "min 2 chars")}
                
                {renderDateInput("issueDate", "Issue date")}
                {renderDateInput("expirationDate", "Expiration date")}
                
                {renderInput("commentAddress", "Comment")}

                <hr className={`my-4 ${mode === "dark" ? "border-gray-700" : "border-gray-300"}`} />
                
                {renderSelect("countryAddress", "Country", "India", ["India", "USA", "UK"])}
                {renderInput("stateAddress", "State", "-")}
                {renderInput("cityAddress", "City", "-", "text")}
                
                <div className="grid grid-cols-2 gap-4">
                    {renderInput("zipCodeAddress", "ZIP code", "-")}
                    {/* The second column is left empty or for padding as in the image */}
                </div>
                
                {renderInput("addressLine", "Address", "-")}
            </div>
        );
      case "Regulation":
        return (
            <div className="space-y-4 ">
                {renderSelect("nationality", "Nationality", "", ["", "India", "USA", "UK"])}
                {renderInput("taxID", "Tax ID")}
                
                {renderSelect("employmentStatus", "Employment status", "Unemployed", ["Unemployed", "Employed", "Self-Employed", "Retired"])}
                {renderSelect("employmentIndustry", "Employment industry", "None", ["None", "Finance", "Technology", "Healthcare"])}
                {renderSelect("educationLevel", "Education level", "None", ["None", "High School", "Bachelor's", "Master's", "PhD"])}
                {renderSelect("sourceOfWealth", "Source of wealth", "Employment or Business proceeds", ["Employment or Business proceeds", "Savings", "Inheritance", "Investments"])}

                <div className="grid grid-cols-3 gap-4 mt-6">
                    {renderCurrencyInput("netWorth", "Net worth, USD")}
                    {renderCurrencyInput("annualIncome", "Annual income, USD")}
                    {renderCurrencyInput("annualDeposit", "Annual deposit, USD")}
                </div>

                <div className="pt-4">
                    <h3 className={`text-md font-semibold mb-2 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>Trading experience</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {renderSelectSmall("expForex", "Forex", "< 1 year", ["< 1 year", "1-3 years", "3-5 years", "> 5 years"])}
                        {renderSelectSmall("expStocks", "Stocks", "< 1 year", ["< 1 year", "1-3 years", "3-5 years", "> 5 years"])}
                        {renderSelectSmall("expFutures", "Futures", "< 1 year", ["< 1 year", "1-3 years", "3-5 years", "> 5 years"])}
                        {renderSelectSmall("expCFD", "CFD", "< 1 year", ["< 1 year", "1-3 years", "3-5 years", "> 5 years"])}
                    </div>
                </div>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
      {/* Main Content Area - mimics the window from the image */}
      <div className={`rounded-sm border shadow-2xl max-w-5xl w-full h-[95%] mx-4 flex flex-col ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-white border-gray-300"}`}>

        {/* Title Bar */}
        <div className={`flex items-center justify-between p-1 border-b ${mode === "dark" ? "bg-[#2f2f2f] border-gray-700" : "bg-gray-100 border-gray-300"}`}>
          <h3 className={`text-sm font-semibold ml-2 ${mode === "dark" ? "text-gray-100" : "text-black"}`}>
            Client: New
          </h3>
          <div className="flex items-center">
            {/* Standard Window Controls (Minimize, Maximize, Close) */}
            <button className="text-gray-400 hover:bg-[#3e3e3e] w-8 h-6 text-xl leading-none">
              ?
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:bg-red-600 hover:text-white w-8 h-6 text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content Body: Sidebar + Main Form */}
        <div className="flex flex-grow overflow-hidden">
          {/* Sidebar Navigation */}
          <div className={`w-60 border-r p-2 space-y-2 ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-gray-100 border-gray-300"}`}>
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`flex items-center w-full px-3 py-2 text-sm text-left rounded-sm transition-colors duration-100 ${
                  activeSection === section
                    ? mode === "dark" ? "bg-gray-500 text-white" : "bg-blue-500 text-white"
                    : mode === "dark" ? "text-gray-300 hover:bg-gray-600" : "text-black hover:bg-gray-200"
                }`}
              >
                {/* Icons using react-icons */}
                <i className="mr-3">
                  {section === "Client" && <FaUser />}
                  {section === "Personal" && <FaHome />}
                  {section === "Address" && <FaMapMarkerAlt />}
                  {section === "Regulation" && <FaBalanceScale />}
                </i>
                {section} 
              </button>
            ))}
          </div>

          {/* Main Form Content */}
          <div className={`flex-grow p-4 overflow-auto ${mode === "dark" ? "custom-scrollbar" : "custom-scrollbar-light"}`}>
            <h2 className={`text-xl font-bold mb-4 ${mode === "dark" ? "text-gray-100" : "text-black"}`}>{activeSection}</h2>
            {renderContent()}
          </div>
        </div>
        
        {/* Footer/Action Buttons */}
        <div className={`flex justify-end p-2 border-t ${mode === "dark" ? "border-gray-700 bg-[#2f2f2f]" : "border-gray-300 bg-gray-100"}`}>
          <div className="space-x-2">
            {/* Conditional rendering for Copy and Export... buttons */}
            {activeSection === "Client" && (
                <>
                    <button className={`px-4 py-1.5 text-sm rounded border ${mode === "dark" ? "text-gray-200 hover:bg-gray-500 border-gray-500" : "text-black hover:bg-gray-400 border-gray-400"}`}>
                      Export...
                    </button>
                </>
            )}

            <button
              onClick={onClose}
              className={`px-4 py-1.5 text-sm rounded border ${mode === "dark" ? "text-gray-200 hover:bg-gray-500 border-gray-500" : "text-black hover:bg-gray-400 border-gray-400"}`}
            >
              Cancel
            </button>
            <button className={`px-4 py-1.5 text-sm rounded border ${mode === "dark" ? "text-gray-200 hover:bg-gray-500 border-gray-500" : "text-black hover:bg-gray-400 border-gray-400"}`}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}