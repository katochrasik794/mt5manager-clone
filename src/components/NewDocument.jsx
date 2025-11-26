import React, { useState, useContext } from "react";
import { FiFileText, FiFolder } from "react-icons/fi";
import Mycontext from "../context/Mycontext";

export default function NewOtherDocumentModal({
  open = true,
  onClose = () => {},
  onOk = () => {},
}) {
  const { mode } = useContext(Mycontext);
  const [activeTab, setActiveTab] = useState("Document");

  // simple form state
  const [status, setStatus] = useState("New");
  const [docType, setDocType] = useState("Other");
  const [docSubType, setDocSubType] = useState("Other");
  const [issueDate, setIssueDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  if (!open) return null;

  const handleOk = () => {
    onOk();
  };

  const tabs = [
    { key: "Document", label: "Document", icon: FiFileText },
    { key: "Files", label: "Files", icon: FiFolder },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
      <div
        className={`w-[900px] h-[700px] max-w-[98%] rounded shadow-lg overflow-hidden flex flex-col ${
          mode === "dark"
            ? "bg-[#2b2b2b] text-gray-200"
            : "bg-white text-black"
        }`}
      >
        {/* Title bar */}
        <div
          className={`flex items-center justify-between px-4 py-2 border-b ${
            mode === "dark"
              ? "bg-[#262626] border-gray-700"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <div
            className={`text-sm font-medium ${
              mode === "dark" ? "text-gray-200" : "text-black"
            }`}
          >
            New document
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-2 py-1 rounded ${
                mode === "dark" ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              ?
            </button>
            <button
              onClick={onClose}
              className={`px-2 py-1 rounded ${
                mode === "dark" ? "hover:bg-[#333333]" : "hover:bg-gray-200"
              }`}
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside
            className={`w-64 border-r p-4 flex flex-col ${
              mode === "dark"
                ? "bg-[#232323] border-gray-700"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <nav className="space-y-1">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-left ${
                    activeTab === t.key
                      ? `${
                          mode === "dark"
                            ? "bg-[#343434] text-white"
                            : "bg-blue-500 text-white"
                        }`
                      : `${
                          mode === "dark"
                            ? "text-gray-300 hover:bg-[#2f2f2f]"
                            : "text-gray-700 hover:bg-gray-200"
                        }`
                  }`}
                >
                  <t.icon />
                  <span>{t.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main container */}
          <main className="p-8 flex flex-col">
            {activeTab === "Document" && (
              <>
                {/* Header text */}
                <div className=" mb-6">
                  <h2
                    className={`text-2xl font-semibold ${
                      mode === "dark" ? "text-gray-200" : "text-black"
                    }`}
                  >
                    Other
                  </h2>
                  <div
                    className={`mt-4 space-y-1 text-sm ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <div>Created by:</div>
                    <div>Last changed by:</div>
                    <div>Approved by:</div>
                  </div>
                </div>

                {/* Form */}
                <div className=" w-xl     flex flex-col mx-auto space-y-3 text-sm">
                  <div>
                    <label
                      className={`block mb-1 ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className={`w-full rounded-sm px-2 py-1.5 focus:outline-none focus:border-blue-500 ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    >
                      <option>New</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block mb-1 ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Document type
                    </label>
                    <select
                      value={docType}
                      onChange={(e) => setDocType(e.target.value)}
                      className={`w-full rounded-sm px-2 py-1.5 focus:outline-none focus:border-blue-500 ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    >
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block mb-1 ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Document subtype
                    </label>
                    <select
                      value={docSubType}
                      onChange={(e) => setDocSubType(e.target.value)}
                      className={`w-full rounded-sm px-2 py-1.5 focus:outline-none focus:border-blue-500 ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    >
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block mb-1 ${
                          mode === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Issue date
                      </label>
                      <div className="flex items-center gap-1">
                        <button
                          className={`w-6 h-8 text-xs border ${
                            mode === "dark"
                              ? "border-gray-600 bg-[#3a3a3a]"
                              : "border-gray-400 bg-gray-200"
                          }`}
                        >
                          ✕
                        </button>
                        <input
                          type="date"
                          value={issueDate}
                          onChange={(e) => setIssueDate(e.target.value)}
                          className={`flex-1 rounded-sm px-2 py-1.5 focus:outline-none focus:border-blue-500 ${
                            mode === "dark"
                              ? "bg-[#333333] border border-gray-600 text-gray-100"
                              : "bg-white border border-gray-400 text-black"
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className={`block mb-1 ${
                          mode === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Expiration date
                      </label>
                      <div className="flex items-center gap-1">
                        <button
                          className={`w-6 h-8 text-xs border ${
                            mode === "dark"
                              ? "border-gray-600 bg-[#3a3a3a]"
                              : "border-gray-400 bg-gray-200"
                          }`}
                        >
                          ✕
                        </button>
                        <input
                          type="date"
                          value={expDate}
                          onChange={(e) => setExpDate(e.target.value)}
                          className={`flex-1 rounded-sm px-2 py-1.5 focus:outline-none focus:border-blue-500 ${
                            mode === "dark"
                              ? "bg-[#333333] border border-gray-600 text-gray-100"
                              : "bg-white border border-gray-400 text-black"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block mb-1 ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full rounded-sm px-2 py-1.5 focus:outline-none focus:border-blue-500 ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label
                      className={`block mb-1 ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Comment
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className={`w-full flex-1 rounded-sm px-2 py-1.5 resize-none focus:outline-none focus:border-blue-500 ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    />
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="mt-3 flex justify-end gap-3 w-xl">
                  <button
                    onClick={onClose}
                    className={`px-5 py-1 border rounded ${
                      mode === "dark"
                        ? "border-gray-600 text-gray-200 hover:bg-[#2f2f2f]"
                        : "border-gray-400 text-black hover:bg-gray-200"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleOk}
                    className={`px-6 py-1 rounded text-white ${
                      mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"
                    }`}
                  >
                    OK
                  </button>
                </div>
              </>
            )}

            {activeTab === "Files" && (
              <>
                <div className="flex-1 w-xl flex flex-col">
                  <div
                    className={`flex-1 border rounded-sm overflow-auto ${
                      mode === "dark"
                        ? "border-gray-600 bg-[#2b2b2b]"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <table
                      className={`min-w-full table-auto border-collapse text-sm ${
                        mode === "dark" ? "text-gray-200" : "text-black"
                      }`}
                    >
                      <thead>
                        <tr
                          className={
                            mode === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }
                        >
                          <th
                            className={`border-b px-3 py-2 w-10 text-left ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            #
                          </th>
                          <th
                            className={`border-b px-3 py-2 text-left ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Date
                          </th>
                          <th
                            className={`border-b px-3 py-2 text-left ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Author
                          </th>
                          <th
                            className={`border-b px-3 py-2 text-left ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Name
                          </th>
                          <th
                            className={`border-b px-3 py-2 text-left ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Size
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Empty state as in screenshot */}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      className={`px-4 py-2 border rounded ${
                        mode === "dark"
                          ? "border-gray-600 text-gray-200 hover:bg-[#2f2f2f]"
                          : "border-gray-400 text-black hover:bg-gray-200"
                      }`}
                    >
                      Add Files...
                    </button>
                    <div className="flex gap-3">
                      <button
                        onClick={onClose}
                        className={`px-5 py-2 border rounded ${
                          mode === "dark"
                            ? "border-gray-600 text-gray-200 hover:bg-[#2f2f2f]"
                            : "border-gray-400 text-black hover:bg-gray-200"
                        }`}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleOk}
                        className={`px-6 py-2 rounded text-white ${
                          mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"
                        }`}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
