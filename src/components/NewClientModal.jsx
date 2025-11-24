// NewClientModal.jsx
import React, { useState } from "react";

const inputStyle =
  "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1";
const inputStyleSmall = 
  "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 h-[34px]"; // Consistent height for grid
const labelStyle = "block text-sm text-gray-400 mb-1";
const selectStyle = "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1 pr-8 block w-full appearance-none";
const iconStyle = "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none";

/**
 * Renders the modal for creating a new client.
 * It features a sidebar navigation for different sections (Client, Personal, Address, Regulation).
 */
export default function NewClientModal({ open, onClose }) {
  // State for the active sidebar tab, defaulting to "Client"
  const [activeSection, setActiveSection] = useState("Client");

  if (!open) return null;

  const sections = ["Client", "Personal", "Address", "Regulation"];

  // Helper function to render dropdowns with a chevron icon
  const renderSelect = (id, label, defaultValue, options) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <div className="relative">
        <select id={id} className={selectStyle} defaultValue={defaultValue}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className={iconStyle}>&#9662;</div>
      </div>
    </div>
  );
  
  // Helper function to render dropdowns for small, specific contexts (like Trading experience)
  const renderSelectSmall = (id, label, defaultValue, options) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <div className="relative">
        <select id={id} className={selectStyle} defaultValue={defaultValue}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className={iconStyle}>&#9662;</div>
      </div>
    </div>
  );

  // Helper function to render simple text inputs
  const renderInput = (id, label, defaultValue = "", type = "text") => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input type={type} id={id} className={inputStyle} defaultValue={defaultValue} />
    </div>
  );
    
  // Helper function to render a labeled text input with a small placeholder
  const renderInputWithPlaceholder = (id, label, placeholder) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input type="text" id={id} className={inputStyle} placeholder={placeholder} />
    </div>
  );

  // Helper function to render date inputs with clear and calendar buttons
  const renderDateInput = (id, label) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <div className="flex items-center space-x-1">
        <input type="text" id={id} className={`${inputStyle} flex-grow`} defaultValue="" />
        <button className="bg-[3c3c3c] border border-gray-600 text-red-500 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
            &times;
        </button>
        <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
            &#9662;
        </button>
      </div>
    </div>
  );
  
  // Helper function for the small currency input fields
  const renderCurrencyInput = (id, label, defaultValue = "0") => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input type="number" id={id} className={inputStyleSmall} defaultValue={defaultValue} />
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
                    <label className={labelStyle}>Approval date</label>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
                        <input type="text" className={`${inputStyle} w-full`} defaultValue="" />
                        <div className="relative">
                            <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">&#9662;</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className={labelStyle}>Close date</label>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
                        <input type="text" className={`${inputStyle} w-full`} defaultValue="" />
                        <div className="relative">
                            <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">&#9662;</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Last Contact Date */}
            <div className="space-y-2">
                <label className={labelStyle}>Last contact date</label>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
                    <input type="text" className={`${inputStyle} w-full`} defaultValue="" />
                    <div className="relative">
                        <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">&#9662;</button>
                    </div>
                </div>
            </div>

            <hr className="border-gray-700 my-4" />

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
                            <label htmlFor="gender" className={labelStyle}>Gender</label>
                            <div className="flex items-center space-x-1">
                                <div className="relative flex-grow">
                                    <select id="gender" className={selectStyle} defaultValue="Not specified">
                                        <option>Not specified</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <div className={iconStyle}>&#9662;</div>
                                </div>
                                <button className="bg-[#1e1e1e] border border-gray-600 text-red-500 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
                                    &times;
                                </button>
                            </div>
                        </div>
                        
                        {/* Birthdate */}
                        <div>
                            <label htmlFor="birthdate" className={labelStyle}>Birthdate</label>
                            <div className="flex items-center space-x-1">
                                <input type="text" id="birthdate" className={`${inputStyle} flex-grow`} defaultValue="" />
                                <button className="bg-[#1e1e1e] border border-gray-600 text-red-500 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
                                    &times;
                                </button>
                                <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
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
                    <label htmlFor="mobile" className={labelStyle}>Mobile</label>
                    <div className="flex space-x-2">
                        <div className="relative w-1/3">
                            <select id="mobilePrefix" className={selectStyle} defaultValue="">
                                <option value="">+91 (India)</option>
                                <option value="">+1 (USA)</option>
                                {/* Country codes */}
                            </select>
                            <div className={iconStyle}>&#9662;</div>
                        </div>
                        <input type="text" id="mobile" className={`${inputStyle} w-2/3 border-red-500`} defaultValue="0000000000" />
                    </div>
                </div>

                {renderInput("messengers", "Messengers (skype:username, icq:userid, etc.)")}
                {renderInput("socialNetworks", "Social Networks (fb:username, twitter:username, etc.)")}
                {renderInput("externalId", "External ID")}
            </div>
        );
      case "Address":
        return (
            <div className="space-y-4 max-w-lg">
                {renderSelect("documentType", "Document type", "", ["", "Passport", "Driver's License", "Utility Bill"])}
                
                {renderInputWithPlaceholder("documentNumber", "Document number", "min 2 chars")}
                
                {renderDateInput("issueDate", "Issue date")}
                {renderDateInput("expirationDate", "Expiration date")}
                
                {renderInput("commentAddress", "Comment")}

                <hr className="border-gray-700 my-4" />
                
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
            <div className="space-y-4 max-w-lg">
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
                    <h3 className="text-md font-semibold text-gray-400 mb-2">Trading experience</h3>
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
      <div className="bg-[#2c2c2c] rounded-sm border border-gray-700 shadow-2xl max-w-5xl w-full h-[95%] mx-4 flex flex-col">
        
        {/* Title Bar */}
        <div className="flex items-center justify-between p-1 bg-[#2f2f2f] border-b border-gray-700">
          <h3 className="text-sm font-semibold text-gray-100 ml-2">
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
          <div className="w-60 bg-[#2c2c2c] border-r border-gray-700 p-2 space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`flex items-center w-full px-3 py-2 text-sm text-left rounded-sm transition-colors duration-100 ${
                  activeSection === section
                    ? "bg-gray-500 text-white"
                    : "text-gray-300 hover:bg-gray-600"
                }`}
              >
                {/* Dummy Icons based on image_c4c7a1.png */}
                <i className="mr-3">
                  {section === "Client" && "👤"}
                  {section === "Personal" && "🏠"}
                  {section === "Address" && "📍"}
                  {section === "Regulation" && "⚖️"}
                </i>
                {section} 
              </button>
            ))}
          </div>

          {/* Main Form Content */}
          <div className="flex-grow p-4 overflow-auto custom-scrollbar">
            <h2 className="text-xl font-bold text-gray-100 mb-4">{activeSection}</h2>
            {renderContent()}
          </div>
        </div>
        
        {/* Footer/Action Buttons */}
        <div className="flex justify-end p-2 border-t border-gray-700 bg-[#2f2f2f]">
          <div className="space-x-2">
            {/* Conditional rendering for Copy and Export... buttons */}
            {activeSection === "Client" && (
                <>
                    <button className="px-4 py-1.5 text-sm  text-gray-200 rounded hover:bg-gray-500 border border-gray-500">
                      Export...
                    </button>
                </>
            )}
            
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-sm  text-gray-200 rounded hover:bg-gray-500 border border-gray-500"
            >
              Cancel
            </button>
            <button className="px-4 py-1.5 text-sm border border-gray-500  text-white rounded hover:bg-blue-600">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}