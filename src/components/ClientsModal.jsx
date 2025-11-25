// ClientsModal.jsx
import React, { useState } from "react";
import { FiDownload, FiFileText, FiMessageCircle, FiClock, FiDollarSign, FiUser, FiHome, FiMapPin, FiShield } from "react-icons/fi";
import ProofOfIdentityModal from './ProofOfIdentityModal';
import NewCommentModal from './NewCommentModal';
import NewAccountModal from './NewAccountModal';
import UserModal from './UserModal';

const inputStyle =
  "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1";
const inputStyleSmall =
  "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 h-[34px]";
const labelStyle = "block text-sm text-gray-400 mb-1";
const selectStyle =
  "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1 pr-8 block w-full appearance-none";
const iconStyle = "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none";

/**
 * NewClientModal
 * Props:
 *  - open (bool)
 *  - onClose (fn)
 */
export default function NewClientModal({ open, onClose }) {
  const [activeSection, setActiveSection] = useState("Client");
  const [selected, setSelected] = useState(1);
  const [historyOpen, setHistoryOpen] = useState({ 2: true, 1: false });
  const [proofModalOpen, setProofModalOpen] = useState(false);
  const [newCommentModalOpen, setNewCommentModalOpen] = useState(false);
  const [newAccountModalOpen, setNewAccountModalOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  if (!open) return null;

  const documents = [
    {
      id: 1,
      type: "Proof of identity",
      name: "Prasad Nanekar - Person",
      date: "2025.11.02 16:32",
      status: "New",
    },
    {
      id: 2,
      type: "Proof of address",
      name: "Prasad Nanekar - Address",
      date: "2025.11.02 16:32",
      status: "New",
    },
  ];

  const sections = [
    "Client",
    "Personal",
    "Address",
    "Regulation",
    "Documents",
    "Comments",
    "History",
    "Real Trading Accounts",
    "7120045698 Prashad Nanekar",
  ];

  // small helpers
  const renderSelect = (id, label, defaultValue, options) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <div className="relative">
        <select id={id} className={selectStyle} defaultValue={defaultValue}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className={iconStyle}>&#9662;</div>
      </div>
    </div>
  );

  const renderSelectSmall = (id, label, defaultValue, options) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <div className="relative">
        <select id={id} className={selectStyle} defaultValue={defaultValue}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className={iconStyle}>&#9662;</div>
      </div>
    </div>
  );

  const renderInput = (id, label, defaultValue = "", type = "text") => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input type={type} id={id} className={inputStyle} defaultValue={defaultValue} />
    </div>
  );

  const renderInputWithPlaceholder = (id, label, placeholder) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input type="text" id={id} className={inputStyle} placeholder={placeholder} />
    </div>
  );

  const renderDateInput = (id, label) => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <div className="flex items-center space-x-1">
        <input type="text" id={id} className={`${inputStyle} flex-grow`} defaultValue="" />
        <button
          className="bg-[#3c3c3c] border border-gray-600 text-red-500 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700"
          aria-label="clear"
        >
          &times;
        </button>
        <button
          className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700"
          aria-label="open-calendar"
        >
          &#9662;
        </button>
      </div>
    </div>
  );

  const renderCurrencyInput = (id, label, defaultValue = "0") => (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input type="number" id={id} className={inputStyleSmall} defaultValue={defaultValue} />
    </div>
  );

  // Section content
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={labelStyle}>Approval date</label>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
                  <input type="text" className={`${inputStyle} w-full`} defaultValue="" />
                  <div className="relative">
                    <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
                      &#9662;
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelStyle}>Close date</label>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
                  <input type="text" className={`${inputStyle} w-full`} defaultValue="" />
                  <div className="relative">
                    <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
                      &#9662;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className={labelStyle}>Last contact date</label>
              <div className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
                <input type="text" className={`${inputStyle} w-full`} defaultValue="" />
                <div className="relative">
                  <button className="bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 w-8 flex items-center justify-center hover:bg-gray-700">
                    &#9662;
                  </button>
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gender" className={labelStyle}>
                    Gender
                  </label>
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

                <div>
                  <label htmlFor="birthdate" className={labelStyle}>
                    Birthdate
                  </label>
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

            <div>
              <label htmlFor="mobile" className={labelStyle}>
                Mobile
              </label>
              <div className="flex space-x-2">
                <div className="relative w-1/3">
                  <select id="mobilePrefix" className={selectStyle} defaultValue="">
                    <option value="">+91 (India)</option>
                    <option value="">+1 (USA)</option>
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
          <div className="space-y-4 ">
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
            </div>

            {renderInput("addressLine", "Address", "-")}
          </div>
        );

      case "Regulation":
        return (
          <div className="space-y-4">
            {renderSelect("nationality", "Nationality", "", ["", "India", "USA", "UK"])}
            {renderInput("taxID", "Tax ID")}

            {renderSelect("employmentStatus", "Employment status", "Unemployed", [
              "Unemployed",
              "Employed",
              "Self-Employed",
              "Retired",
            ])}
            {renderSelect("employmentIndustry", "Employment industry", "None", ["None", "Finance", "Technology", "Healthcare"])}
            {renderSelect("educationLevel", "Education level", "None", ["None", "High School", "Bachelor's", "Master's", "PhD"])}
            {renderSelect("sourceOfWealth", "Source of wealth", "Employment or Business proceeds", [
              "Employment or Business proceeds",
              "Savings",
              "Inheritance",
              "Investments",
            ])}

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

      case "Documents":
        return (
          <div className="w-full h-[500px] bg-[#2c2c2c] text-gray-200 flex flex-col border border-gray-700">
            {/* Header */}
            <div className="grid grid-cols-[40px_150px_250px_150px_150px] text-xs bg-[#2c2c2c] border-b border-gray-700 text-gray-300">
              <div className="py-2 px-3">ID</div>
              <div className="py-2 px-3">Type</div>
              <div className="py-2 px-3">Name</div>
              <div className="py-2 px-3">Creation date</div>
              <div className="py-2 px-3">Status</div>
            </div>

            {/* Rows container (scrollable) */}
            <div className="flex flex-col flex-grow overflow-auto">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelected(doc.id)}
                  onDoubleClick={doc.type === "Proof of identity" ? () => setProofModalOpen(true) : undefined}
                  className={`grid grid-cols-[40px_150px_250px_150px_150px] text-sm cursor-pointer border-b border-gray-800
                    ${selected === doc.id ? "bg-[#1e4f7a]" : "bg-[#2c2c2c] hover:bg-[#3a3a3a]"}
                  `}
                >
                  <div className="py-2 px-3">{doc.id}</div>
                  <div className="py-2 px-3">{doc.type}</div>
                  <div className="py-2 px-3">{doc.name}</div>
                  <div className="py-2 px-3">{doc.date}</div>

                  <div className="py-2 px-3 flex items-center gap-2">
                    <span className="text-blue-400">{doc.status}</span>
                    <FiDownload className="text-blue-400 cursor-pointer" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "Comments":
        return (
          <div className="space-y-4">
            {/* Comments area - placeholder for a comment editor */}
            <label className={labelStyle}>Add comment</label>
            <textarea className="w-full h-[65vh] bg-[#3c3c3c] border border-gray-600 text-gray-100 p-2 rounded-sm min-h-[120px]" />
          </div>
        );

      case "History": {
  // History accordion entries (matches screenshot layout)
  const historyEntries = [
    {
      id: 2,
      headerDate: "2025.11.17 10:28",
      headerNote: "created automatically",
      shortNote: "Internal data: updated",
      details: null, // only short line shown in screenshot for this entry
    },
    {
      id: 1,
      headerDate: "2025.11.02 16:32",
      headerNote: "created automatically",
      shortNote: null,
      details: [
        "Type: Individual",
        "Status: Incompleted",
        "Comment: Android 15, OPPO OP56EDL1 (CPH2505_15.0.0.1350(EX01))",
        "Name: Prasad",
        "Second name: Nanekar",
        "Birth Date: 1996.06.23",
        "Gender: Male",
        "Contact Language: English",
        "Email: prasadnanekar358@gmail.com",
        "Phone: +918605476262",
        "Country: India",
        "Street: Chinchwad",
        "City: Pune",
        "Client Created: From a preliminary account",
        "Client Created from Account:",
        "Preferred Trading Group: preliminary",
      ],
    },
  ];

  return (
    <div className="space-y-2 w-full">
      {/* Container styled like screenshot (dark, bordered) */}
      <div className="bg-[#1f1f1f] border border-gray-600 rounded-sm overflow-hidden">
        {historyEntries.map((entry) => {
          const isOpen = !!historyOpen[entry.id];
          // header classes: blue when open (like screenshot top row), dark gray when closed
          const headerClass = isOpen
            ? "bg-[#0b66b0] text-white"
            : "bg-[#2b2b2b] text-gray-200 hover:bg-[#3a3a3a]";

          return (
            <div key={entry.id} className="border-b border-gray-700">
              {/* Header */}
              <div
                className={`flex items-center justify-between px-3 py-2 cursor-pointer ${headerClass}`}
                onClick={() => setHistoryOpen((s) => ({ ...s, [entry.id]: !s[entry.id] }))}
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold w-6 text-center">{entry.id}</div>
                  <div className="text-sm">
                    <div className="text-xs opacity-80">{entry.headerDate}</div>
                    <div className="text-sm">{entry.headerNote}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* optional short note shown on the header line */}
                  {entry.shortNote && <div className="text-sm text-gray-100 mr-2">{entry.shortNote}</div>}
                  {/* chevron button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setHistoryOpen((s) => ({ ...s, [entry.id]: !s[entry.id] }));
                    }}
                    className="w-7 h-7 flex items-center justify-center bg-transparent rounded hover:bg-white/5"
                    aria-label={isOpen ? "collapse" : "expand"}
                  >
                    {/* simple chevron using markup for consistent sizing */}
                    <span
                      className={`inline-block transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                      style={{ fontSize: 14 }}
                    >
                      ▲
                    </span>
                  </button>
                </div>
              </div>

              {/* Content area (expanded body) */}
              {isOpen && (
                <div className="px-4 py-3 bg-[#222] text-sm text-gray-200">
                  {entry.details ? (
                    <ul className="space-y-1 list-none">
                      {entry.details.map((line, idx) => (
                        <li key={idx} className="leading-6">
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-sm text-gray-200">{entry.shortNote}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


      case "Real Trading Accounts": {
     const realAccounts = [
   {
     login: "7100020542",
     name: "Prasad Nanekar",
     group: "OXO_B\\Pro",
     balance: "6.25",
   },
 ]
 return (
   <div className="flex flex-col w-full h-full border border-gray-700">

     {/* Table */}
     <div className="flex-grow overflow-auto">
       {/* Table Header */}
       <div className="grid grid-cols-4 text-xs bg-[#3c3c3c] border-b border-gray-700 text-gray-300">
         <div className="py-2 px-3 flex items-center gap-1">
           Login <span className="text-[10px]">▲</span>
         </div>
         <div className="py-2 px-3">Name</div>
         <div className="py-2 px-3">Group</div>
         <div className="py-2 px-3">Balance</div>
       </div>

       {/* Table Rows */}
       {realAccounts.map((acc, index) => (
         <div
           key={index}
           onDoubleClick={() => { setSelectedAccount(acc); setUserModalOpen(true); }}
           className="grid grid-cols-4 text-sm border-b border-gray-800 hover:bg-[#2a2a2a] cursor-pointer"
         >
           {/* Login with user icon */}
           <div className="py-2 px-3 flex items-center gap-2">
             <span className="text-gray-400">👤</span>
             {acc.login}
           </div>

           <div className="py-2 px-3">{acc.name}</div>
           <div className="py-2 px-3">{acc.group}</div>
           <div className="py-2 px-3">{acc.balance}</div>
         </div>
       ))}
     </div>
   </div>
 );
}

      case "7120045698 Prashad Nanekar":
        return (
          <div className="space-y-4">
            <div className="w-full h-[65vh] bg-[#3c3c3c] border border-gray-600 text-gray-100 p-2 rounded-sm min-h-[120px]">
              <UserModal open={true} onClose={() => setActiveSection("Client")} client={{login: "7120045698", name: "Prashad Nanekar"}} hideNewClient={true} hideHelp={true} />
            </div>
          </div>
        );


      default:
        return null;
    }
  };

  const iconFor = (name) => {
    if (name === "Client") return <FiUser className="inline-block mr-3" />;
    if (name === "Personal") return <FiHome className="inline-block mr-3" />;
    if (name === "Address") return <FiMapPin className="inline-block mr-3" />;
    if (name === "Regulation") return <FiShield className="inline-block mr-3" />;
    if (name === "Documents") return <FiFileText className="inline-block mr-3" />;
    if (name === "Comments") return <FiMessageCircle className="inline-block mr-3" />;
    if (name === "History") return <FiClock className="inline-block mr-3" />;
    if (name === "Real Trading Accounts") return <FiDollarSign className="inline-block mr-3" />;
    if (name === "7120045698 Prashad Nanekar") return <FiUser className="inline-block mr-3" />;
    return <span className="mr-3">👤</span>; // default for any other tabs
  };

  return (
    <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-[#2c2c2c] rounded-sm border border-gray-700 shadow-2xl max-w-5xl w-full h-[95%] mx-4 flex flex-col">
        {/* Title Bar */}
        <div className="flex items-center justify-between p-1 bg-[#2f2f2f] border-b border-gray-700">
          <h3 className="text-sm font-semibold text-gray-100 ml-2">Client: New</h3>
          <div className="flex items-center">
            <button className="text-gray-400 hover:bg-[#3e3e3e] w-8 h-6 text-xl leading-none">?</button>
            <button onClick={onClose} className="text-gray-400 hover:bg-red-600 hover:text-white w-8 h-6 text-xl leading-none">
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-grow overflow-hidden">
          {/* Sidebar */}
          <div className="w-60 bg-[#2c2c2c] border-r border-gray-700 p-2 space-y-2 overflow-auto">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`flex items-center w-full px-3 py-2 text-sm text-left rounded-sm transition-colors duration-100 ${
                  activeSection === section ? "bg-gray-500 text-white" : "text-gray-300 hover:bg-gray-600"
                }`}
              >
                {iconFor(section)}
                <span className="truncate">{section}</span>
              </button>
            ))}
          </div>

          {/* Main */}
          <div className="flex-grow p-4 overflow-auto custom-scrollbar">
            <h2 className="text-xl font-bold text-gray-100 mb-4">{activeSection}</h2>
            {renderContent()}
          </div>
        </div>

        {/* Footer */}
        <div className={`flex p-2 border-t border-gray-700 bg-[#2f2f2f] ${activeSection === "Real Trading Accounts" ? "justify-between" : "justify-end"}`}>
          {activeSection === "Client" && (
            <button className="px-4 py-1.5 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500">Export...</button>
          )}

          {activeSection === "Documents" ? (
            <div className="space-x-2">
              <button className="px-4 py-1.5 text-sm bg-[#3c3c3c] border border-gray-600 hover:bg-[#4a4a4a] rounded-sm">
                New Document...
              </button>
              <button className="px-4 py-1.5 text-sm bg-[#3c3c3c] border border-gray-600 hover:bg-[#4a4a4a] rounded-sm">
                Cancel
              </button>
              <button className="px-4 py-1.5 text-sm bg-[#007acc] hover:bg-[#006bb3] text-white rounded-sm">
                Update
              </button>
            </div>
          ) : activeSection === "Real Trading Accounts" ? (
            <>
              <div className="flex items-center gap-3 ml-0  lg:ml-[25%]">
                <button onClick={() => setNewAccountModalOpen(true)} className="px-4 py-1.5 text-sm bg-[#2d2d2d] border border-gray-600 text-gray-200 hover:bg-[#3a3a3a] rounded-sm">
                  New Account
                </button>
                <button className="px-4 py-1.5 text-sm bg-[#2d2d2d] border border-gray-600 text-gray-200 hover:bg-[#3a3a3a] rounded-sm flex items-center gap-2">
                  Link Account
                  <span className="text-xs">&#9662;</span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-1.5 text-sm bg-[#2d2d2d] border border-gray-600 text-gray-200 hover:bg-[#3a3a3a] rounded-sm">
                  Cancel
                </button>
                <button className="px-4 py-1.5 text-sm bg-[#007acc] hover:bg-[#006bb3] text-white rounded-sm">
                  Update
                </button>
              </div>
            </>
          ) : activeSection === "Comments" ? (
            <div className="space-x-2">
              <button onClick={() => setNewCommentModalOpen(true)} className="px-4 py-1.5 mr-2 lg:mr-[460px]  text-sm bg-[#3c3c3c] border border-gray-600 hover:bg-[#4a4a4a] rounded-sm">
                New Comment...
              </button>
              <button className="px-4 py-1.5 text-sm bg-[#3c3c3c] border border-gray-600 hover:bg-[#4a4a4a] rounded-sm">
                Cancel
              </button>
              <button className="px-4 py-1.5 text-sm bg-[#007acc] hover:bg-[#006bb3] text-white rounded-sm">
                Update
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <button onClick={onClose} className="px-4 py-1.5 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500">
                Cancel
              </button>
              <button className="px-4 py-1.5 text-sm border border-gray-500 text-white rounded hover:bg-blue-600">OK</button>
            </div>
          )}
        </div>
      </div>
      <ProofOfIdentityModal open={proofModalOpen} onClose={() => setProofModalOpen(false)} />
      <NewCommentModal open={newCommentModalOpen} onClose={() => setNewCommentModalOpen(false)} onSave={() => setNewCommentModalOpen(false)} />
      <NewAccountModal open={newAccountModalOpen} onClose={() => setNewAccountModalOpen(false)} onCreate={() => setNewAccountModalOpen(false)} />
      <UserModal open={userModalOpen} onClose={() => setUserModalOpen(false)} client={selectedAccount} hideNewClient={true} hideHelp={true} />
    </div>
  );
}
