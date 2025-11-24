// DealDetailsModal.jsx
import React, { useState } from "react";

export default function DealDetailsModal({ open, onClose, dealData }) {
  if (!open) return null;

  // Tab state: 'details' (default) or 'journal'
  const [activeTab, setActiveTab] = useState("details");

  // Initial state derived from props or default structure
  const [formData, setFormData] = useState({
    deal: dealData?.deal ?? "7349073",
    type: dealData?.type ?? "BALANCE",
    volume: dealData?.volume ?? "729.00",
    createTime: dealData?.createTime ?? "2025.11.14 16:00:55.918",
    reason: dealData?.reason ?? "Dealer",
    dealerId: dealData?.dealerId ?? "0",
    expertId: dealData?.expertId ?? "",
    externalId: dealData?.externalId ?? "",
    comment: dealData?.comment ?? "Admin Approved Deposit",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    console.log("Updating deal with data:", formData);
    // Add logic for API call or state update here
    onClose();
  };

  const commonInputClasses =
    "bg-[#3c3c3c] border border-[#5a5a5a] text-gray-100 text-xs h-6 px-2 rounded-sm focus:outline-none focus:border-blue-500";
  const labelClasses = "text-xs text-gray-400 min-w-[100px] text-right pr-3";
  const rowClasses = "flex items-center space-x-2";
  // const sectionHeaderClasses = "text-xs font-semibold px-2 py-1";
  const buttonClasses = "px-4 py-1 text-sm rounded-sm";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur" 
      onClick={onClose}
    >
      <div
        className="relative bg-[#3c3c3c] text-gray-100 w-4xl h-[680px] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
      >
        {/* Title Bar */}
        <div className="bg-[#2c2c2c] px-4 text-sm font-semibold py-1.5 flex justify-between items-center border-b border-[#5a5a5a]">
          <span>
            Deal #{formData.deal} <span className="font-normal">**{formData.type}**</span>{" "}
            {formData.volume} [Admin Approved Deposit]
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white leading-none px-2"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <span className="flex items-center gap-2 px-4 py-2 text-xs text-blue-600 hover:text-red-600 hover:underline">
  {/* Person Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4 text-yellow-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>

  <a href="">name, 2546321, oxo_B\Standard, 1: 400</a>
</span>


        {/* Top: simulated grid row */}
        <div className="flex flex-col py-2 mx-4 my-2 text-xs border border-gray-300/50 bg-[#2c2c2c] h-56">
          {/* Header Row */}
          <div className="flex w-full text-gray-400 font-semibold text-center">
            <span className="w-[8%]">Ticket</span>
            <span className="w-[20%]">Time</span>
            <span className="w-[6%]">ID</span>
            <span className="w-[24%]">Liquidity provider</span>
            <span className="w-[8%]">Type</span>
            <span className="w-[8%]">Volume</span>
            <span className="w-[8%]">Price</span>
            <span className="w-[12%]">Reason</span>
            <span className="w-[8%]">Profit</span>
          </div>

          {/* Blue selected data row (approx) */}
          <div className="mt-2 flex text-white bg-[#007acc] border-t border-[#5a5a5a] text-xs text-center">
            <span className="w-[8%] p-2">{formData.deal}</span>
            <span className="w-[20%] p-2">{formData.createTime}</span>
            <span className="w-[6%] p-2"></span>
            <span className="w-[24%] p-2">balance</span>
            <span className="w-[8%] p-2">{formData.type}</span>
            <span className="w-[8%] p-2"></span>
            <span className="w-[8%] p-2"></span>
            <span className="w-[12%] p-2">{formData.reason}</span>
            <span className="w-[8%] p-2">729.00</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#2c2c2c] px-4">
          <button
            onClick={() => setActiveTab("details")}
            className={
              "text-xs px-4 py-2 focus:outline-none " +
              (activeTab === "details"
                ? "text-white bg-[#3c3c3c] border-r border-t border-[#5a5a5a] translate-y-[1px]"
                : "text-gray-400")
            }
          >
            Details
          </button>

          <button
            onClick={() => setActiveTab("journal")}
            className={
              "text-xs px-4 py-2 focus:outline-none " +
              (activeTab === "journal" ? "text-white bg-[#3c3c3c] border-r border-t border-[#5a5a5a] translate-y-[1px]" : "text-gray-400")
            }
          >
            Journal
          </button>
        </div>

        {/* Content area (switches by tab) */}
        <div className="flex flex-col flex-grow overflow-hidden mx-4 mt-2 mb-2 bg-[#2c2c2c]">
          {activeTab === "details" ? (
            <div className="py-2 bg-[#2c2c2c] space-y-3 px-10 mb-2 ">
              <div className="space-y-2">
                {/* Deal */}
                <div className={rowClasses}>
                  <label className={labelClasses}>Deal:</label>
                  <input
                    type="text"
                    name="deal"
                    value={formData.deal}
                    readOnly
                    className={commonInputClasses + " w-[120px]"}
                  />
                </div>

                {/* Type & Amount */}
                <div className={rowClasses}>
                  <label className={labelClasses}>Type:</label>
                  <div className="flex items-center space-x-2 w-full">
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className={commonInputClasses + " w-[140px]"}
                    >
                      <option value="BALANCE">BALANCE</option>
                      <option value="CREDIT">CREDIT</option>
                    </select>
                    <input
                      type="number"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className={commonInputClasses}
                      step="0.01"
                    />
                    <button className="bg-[#3c3c3c] border border-[#5a5a5a] text-gray-400 h-6 w-7 text-xs flex items-center justify-center">
                      ...
                    </button>
                  </div>
                </div>

                {/* Create time */}
                <div className={rowClasses}>
                  <label className={labelClasses}>Create time:</label>
                  <div className="flex items-center space-x-2 w-full">
                    <input
                      type="text"
                      name="createTime"
                      value={formData.createTime}
                      onChange={handleChange}
                      className={commonInputClasses}
                    />
                    <button className="bg-[#3c3c3c] border border-[#5a5a5a] text-gray-400 h-6 w-7 text-xs flex items-center justify-center">
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className={rowClasses}>
                <label className={labelClasses}>Reason:</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={commonInputClasses + " max-w-[280px]"}
                >
                  <option value="Dealer">Dealer</option>
                  <option value="Correction">Correction</option>
                </select>
              </div>

              {/* Dealer ID */}
              <div className={rowClasses}>
                <label className={labelClasses}>Dealer ID:</label>
                <input
                  type="text"
                  name="dealerId"
                  value={formData.dealerId}
                  onChange={handleChange}
                  className={commonInputClasses + " max-w-[200px]"}
                />
              </div>

              {/* Expert ID */}
              <div className={rowClasses}>
                <label className={labelClasses}>Expert ID:</label>
                <input
                  type="text"
                  name="expertId"
                  value={formData.expertId}
                  onChange={handleChange}
                  className={commonInputClasses}
                />
              </div>

              {/* External ID */}
              <div className={rowClasses}>
                <label className={labelClasses}>External ID:</label>
                <input
                  type="text"
                  name="externalId"
                  value={formData.externalId}
                  onChange={handleChange}
                  className={commonInputClasses}
                />
              </div>

              {/* Comment */}
              <div className={rowClasses}>
                <label className={labelClasses}>Comment:</label>
                <input
                  type="text"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className={commonInputClasses}
                />
              </div>

              <div className=" pl-4 pt-4 text-xs text-gray-500">Modifications:</div>
              <div className="h-24 border border-transparent" />
            </div>
          ) : (
            /* Journal tab content */
            <div className="flex flex-col flex-grow overflow-hidden">
              {/* Large dark area with bordered inner box */}
              <div className="m-4 flex-grow border border-[#5a5a5a] rounded-sm bg-[#2e2e2e]">
                {/* Journal header row (column titles) */}
                <div className="sticky top-0 bg-[#2b2b2b] border-b border-[#5a5a5a]">
                  <div className="flex text-gray-300 text-xs font-semibold px-3 py-2">
                    <div className="w-[16%]">Time</div>
                    <div className="w-[16%]">IP</div>
                    <div className="flex-1">Message</div>
                  </div>
                </div>

                {/* Empty / error placeholder centered like screenshot */}
                <div className="h-full flex items-center justify-center text-gray-500 italic text-sm p-6">
                  Journal request error.
                </div>
              </div>

              {/* Bottom filter bar (like screenshot) */}
              <div className="flex items-center gap-3 p-2 border-t border-[#5a5a5a] bg-[#2b2b2b]">
                {/* Search dropdown / input */}
                <div className="flex items-center space-x-2 w-[200px]">
                  <select className={commonInputClasses + " w-20"}>
                    <option>#7349073</option>
                    {/* other options */}
                  </select>
                  <input
                    type="text"
                    placeholder="Search..."
                    className={commonInputClasses + " flex-grow"}
                  />
                </div>

                <select className={commonInputClasses + " w-40"}>
                  <option>Full</option>
                  <option>Short</option>
                </select>

                <select className={commonInputClasses + " w-40"}>
                  <option>All</option>
                </select>

                <select className={commonInputClasses + " w-40"}>
                  <option>Custom</option>
                </select>

                {/* Date inputs */}
                <input type="date" className={commonInputClasses + " w-40"} />
                <input type="date" className={commonInputClasses + " w-40"} />

                <button className="mr-1 px-4 py-1 text-sm rounded-sm bg-[#007acc] hover:bg-[#006bb3]">
                  Request
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center bg-[#2c2c2c] p-3 border-t border-[#5a5a5a]">
          <button
            className={buttonClasses + " bg-[#3c3c3c] text-gray-400 border border-[#5a5a5a] hover:bg-[#4a4a4a]"}
          >
            Report...
          </button>

          <div className="space-x-2">
            <button
              onClick={handleUpdate}
              className={buttonClasses + " bg-[#007acc] text-white hover:bg-[#006bb3]"}
            >
              Update
            </button>
            <button
              onClick={onClose}
              className={buttonClasses + " bg-[#3c3c3c] text-white border border-[#5a5a5a] hover:bg-[#4a4a4a]"}
            >
              Cancel
            </button>
            <button
              className={buttonClasses + " bg-[#3c3c3c] text-white border border-[#5a5a5a] hover:bg-[#4a4a4a]"}
            >
              Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
