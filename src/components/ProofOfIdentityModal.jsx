import React, { useState, useContext } from "react";
import NewCommentModal from "./NewCommentModal";
import Mycontext from "../context/Mycontext";

export default function ProofOfIdentityModal({
  open = true,
  onClose = () => {},
}) {
  const { mode } = useContext(Mycontext);
  const [activeTab, setActiveTab] = useState("Document");
  const [status, setStatus] = useState("New");
  const [docType, setDocType] = useState("Proof of identity");
  const [docSubType, setDocSubType] = useState("Driver license");
  const [issueDate, setIssueDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [name, setName] = useState("Prasad Nanekar - Person");
  const [comment, setComment] = useState("by Prasad Nanekar");
  const [showNewCommentModal, setShowNewCommentModal] = useState(false);

  const files = [
    {
      id: 1,
      date: "2025.11.02 16:32",
      author: "7100020542",
      name: "document.pdf",
      size: "1.2 MB",
    },
  ];

  const [history, setHistory] = useState([
    {
      id: 1,
      date: "2025.11.02 16:32",
      author: "7100020542",
      relatedClient: "8440",
      type: "Proof of identity",
      name: "Prasad Nanekar - Person",
      comment: "by Prasad Nanekar",
      subtype: "Driver license",
      filesAdded: [
        { name: "Identity.Front.jpg", size: "6.07 MB" },
        { name: "Identity.Back.jpg", size: "6.07 MB" },
      ],
      expanded: false,
    },
  ]);

  function toggleHistory(id) {
    setHistory((prev) =>
      prev.map((h) => (h.id === id ? { ...h, expanded: !h.expanded } : h))
    );
  }

  function handleSaveComment(commentText) {
    console.log("New comment saved:", commentText);
    setShowNewCommentModal(false);
  }

  if (!open) return null;

  const tabs = [
    { key: "Document", icon: DocumentIcon },
    { key: "Files", icon: FolderIcon },
    { key: "History", icon: ClockIcon },
    { key: "Comments", icon: ChatIcon },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
      <div
        className={`w-[1200px] max-w-5xl rounded shadow-lg overflow-hidden h-[680px] ${
          mode === "dark"
            ? "bg-[#2b2b2b] text-gray-200"
            : "bg-white text-black"
        }`}
      >
        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`w-64 h-screen border-r p-6 ${
              mode === "dark"
                ? "bg-[#232323] border-gray-700"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div
              className={`mb-8 font-semibold ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Document
            </div>

            <nav className="space-y-2">
              {tabs.map((t) => {
                const Icon = t.icon;
                const active = activeTab === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left ${
                      active
                        ? `${
                            mode === "dark"
                              ? "bg-[#343434] text-white"
                              : "bg-blue-500 text-white"
                          }`
                        : `${
                            mode === "dark"
                              ? "text-gray-300 hover:bg-[#2b2b2b]"
                              : "text-gray-700 hover:bg-gray-200"
                          }`
                    }`}
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="flex-1">{t.key}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8">
            <div>
              {activeTab === "Document" && (
                <div className="max-w-2xl mx-auto space-y-2">
                  <header className="mb-4 text-center">
                    <h2
                      className={`text-2xl font-semibold ${
                        mode === "dark" ? "text-gray-200" : "text-black"
                      }`}
                    >
                      Proof of identity - Prasad Nanekar - Person
                    </h2>
                  </header>
                  <div className="text-center">
                    <div
                      className={`mt-6 text-xs ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Created by: 7100020542 on 2025.11.02 16:32
                    </div>
                    <div
                      className={`mt-2 text-xs ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Last changed by: 7100020542 on 2025.11.02 16:32
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <label
                      className={`text-sm ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className={`rounded px-3 py-1 text-sm ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-500 text-black"
                      }`}
                    >
                      <option>New</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                    </select>

                    <label
                      className={`text-sm ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      } mt-2`}
                    >
                      Document type
                    </label>
                    <select
                      value={docType}
                      onChange={(e) => setDocType(e.target.value)}
                      className={`rounded px-3 py-1 text-sm ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    >
                      <option>Proof of identity</option>
                      <option>Proof of address</option>
                    </select>

                    <label
                      className={`text-sm ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      } mt-2`}
                    >
                      Document subtype
                    </label>
                    <select
                      value={docSubType}
                      onChange={(e) => setDocSubType(e.target.value)}
                      className={`rounded px-3 py-1 text-sm ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    >
                      <option>Driver license</option>
                      <option>Passport</option>
                      <option>National ID</option>
                    </select>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          className={`text-sm ${
                            mode === "dark"
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          Issue date
                        </label>
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="date"
                            value={issueDate}
                            onChange={(e) => setIssueDate(e.target.value)}
                            className={`rounded px-3 py-1 text-sm w-full ${
                              mode === "dark"
                                ? "bg-[#333333] border border-gray-600 text-gray-100"
                                : "bg-white border border-gray-400 text-black"
                            }`}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className={`text-sm ${
                            mode === "dark"
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          Expiration date
                        </label>
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="date"
                            value={expDate}
                            onChange={(e) => setExpDate(e.target.value)}
                            className={`rounded px-3 py-1 text-sm w-full ${
                              mode === "dark"
                                ? "bg-[#333333] border border-gray-600 text-gray-100"
                                : "bg-white border border-gray-400 text-black"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    <label
                      className={`text-sm ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`rounded px-3 py-1 text-sm w-full ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    />

                    <label
                      className={`text-sm ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Comment
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={5}
                      className={`rounded px-3 py-1 text-sm w-full ${
                        mode === "dark"
                          ? "bg-[#333333] border border-gray-600 text-gray-100"
                          : "bg-white border border-gray-400 text-black"
                      }`}
                    />
                  </div>

                  <div className="flex justify-end mt-5 gap-3">
                    <button
                      onClick={onClose}
                      className={`px-4 py-1 border rounded ${
                        mode === "dark"
                          ? "border-gray-600 text-gray-200 hover:bg-[#2d2d2d]"
                          : "border-gray-400 text-black hover:bg-gray-200"
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      className={`px-5 py-1 rounded text-white ${
                        mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"
                      }`}
                    >
                      Update
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "Files" && (
                <div className="flex-1 flex flex-col ">
                  <div
                    className={`overflow-auto rounded p-2 border h-[80vh] ${
                      mode === "dark"
                        ? "border-gray-600 bg-[#2b2b2b]"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <table
                      className={`min-w-full border-collapse table-fixed text-sm ${
                        mode === "dark" ? "text-gray-200" : "text-black"
                      }`}
                    >
                      <thead
                        className={`sticky top-0 ${
                          mode === "dark" ? "bg-[#2b2b2b]" : "bg-gray-100"
                        }`}
                      >
                        <tr
                          className={`text-left ${
                            mode === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          <th
                            className={`w-8 py-2 border-b ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            #
                          </th>
                          <th
                            className={`w-48 py-2 border-b ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Date
                          </th>
                          <th
                            className={`w-36 py-2 border-b ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Author
                          </th>
                          <th
                            className={`py-2 border-b ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Name
                          </th>
                          <th
                            className={`w-24 py-2 border-b ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            Size
                          </th>
                          <th
                            className={`w-10 py-2 border-b ${
                              mode === "dark"
                                ? "border-gray-600"
                                : "border-gray-300"
                            }`}
                          >
                            {" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {files.map((f) => (
                          <tr
                            key={f.id}
                            className={
                              mode === "dark"
                                ? "hover:bg-[#313131]"
                                : "hover:bg-gray-200"
                            }
                          >
                            <td
                              className={`py-2 border-b ${
                                mode === "dark"
                                  ? "border-gray-700 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {f.id}
                            </td>
                            <td
                              className={`py-2 border-b ${
                                mode === "dark"
                                  ? "border-gray-700 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {f.date}
                            </td>
                            <td
                              className={`py-2 border-b ${
                                mode === "dark"
                                  ? "border-gray-700 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {f.author}
                            </td>
                            <td
                              className={`py-2 border-b underline cursor-pointer ${
                                mode === "dark"
                                  ? "border-gray-700 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {f.name}
                            </td>
                            <td
                              className={`py-2 border-b ${
                                mode === "dark"
                                  ? "border-gray-700 text-gray-300"
                                  : "border-gray-300 text-gray-700"
                              }`}
                            >
                              {f.size}
                            </td>
                            <td
                              className={`py-2 border-b text-right ${
                                mode === "dark"
                                  ? "border-gray-700"
                                  : "border-gray-300"
                              }`}
                            >
                              <button
                                title="Download"
                                className={`px-2 py-1 rounded border ${
                                  mode === "dark"
                                    ? "border-gray-600"
                                    : "border-gray-400"
                                }`}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7 10l5 5 5-5"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12 15V3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <label className="inline-flex items-center gap-2">
                        <input type="file" className="hidden" id="add-files" />
                        <button
                          className={`px-4 py-2 border rounded ${
                            mode === "dark"
                              ? "border-gray-600 text-gray-200 hover:bg-[#2d2d2d]"
                              : "border-gray-400 text-black hover:bg-gray-200"
                          }`}
                        >
                          Add Files...
                        </button>
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={onClose}
                        className={`px-4 py-2 border rounded ${
                          mode === "dark"
                            ? "border-gray-600 text-gray-200 hover:bg-[#2d2d2d]"
                            : "border-gray-400 text-black hover:bg-gray-200"
                        }`}
                      >
                        Cancel
                      </button>
                      <button
                        className={`px-5 py-2 rounded text-white ${
                          mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"
                        }`}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "History" && (
                <>
                  <div
                    className={`h-[570px] overflow-auto border rounded p-2 ${
                      mode === "dark"
                        ? "border-gray-600 bg-[#2b2b2b] divide-gray-700"
                        : "border-gray-300 bg-white divide-gray-300"
                    }`}
                  >
                    <div
                      className={`divide-y ${
                        mode === "dark"
                          ? "divide-gray-700"
                          : "divide-gray-300"
                      }`}
                    >
                      {history.map((h) => (
                        <div key={h.id}>
                          {/* row header */}
                          <div
                            className={`flex items-center gap-4 p-2 cursor-pointer ${
                              mode === "dark"
                                ? "hover:bg-[#313131] text-gray-300"
                                : "hover:bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => toggleHistory(h.id)}
                          >
                            <div className="w-6">{h.id}</div>
                            <div className="flex-1">{h.date}</div>
                            <div className="w-40 flex items-center justify-between">
                              <span>{h.author}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleHistory(h.id);
                                }}
                                className={`ml-2 p-1 rounded border ${
                                  mode === "dark"
                                    ? "border-gray-600"
                                    : "border-gray-400"
                                }`}
                                aria-label={h.expanded ? "collapse" : "expand"}
                              >
                                {h.expanded ? (
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                  >
                                    <path
                                      d="M6 15l6-6 6 6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                  >
                                    <path
                                      d="M6 9l6 6 6-6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>

                          {/* expanded details */}
                          {h.expanded && (
                            <div
                              className={`p-4 text-sm ${
                                mode === "dark"
                                  ? "bg-[#2b2b2b] text-gray-300"
                                  : "bg-white text-gray-700"
                              }`}
                            >
                              <div className="mb-2">
                                <span
                                  className={
                                    mode === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }
                                >
                                  Related client:
                                </span>{" "}
                                {h.relatedClient}
                              </div>
                              <div className="mb-2">
                                <span
                                  className={
                                    mode === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }
                                >
                                  Type:
                                </span>{" "}
                                {h.type}
                              </div>
                              <div className="mb-2">
                                <span
                                  className={
                                    mode === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }
                                >
                                  Name:
                                </span>{" "}
                                {h.name}
                              </div>
                              <div className="mb-2">
                                <span
                                  className={
                                    mode === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }
                                >
                                  Comment:
                                </span>{" "}
                                {h.comment}
                              </div>
                              <div className="mb-2">
                                <span
                                  className={
                                    mode === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }
                                >
                                  Subtype:
                                </span>{" "}
                                {h.subtype}
                              </div>
                              <div className="mb-2">
                                <span
                                  className={
                                    mode === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }
                                >
                                  Files added:
                                </span>{" "}
                                {h.filesAdded.map(
                                  (f, i) =>
                                    `${f.name} (${f.size})${
                                      i < h.filesAdded.length - 1 ? ", " : ""
                                    }`
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-3">
                    <button
                      onClick={onClose}
                      className={`px-4 py-2 border rounded ${
                        mode === "dark"
                          ? "border-gray-600 text-gray-200 hover:bg-[#2d2d2d]"
                          : "border-gray-400 text-black hover:bg-gray-200"
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      className={`px-5 py-2 rounded text-white ${
                        mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"
                      }`}
                    >
                      Update
                    </button>
                  </div>
                </>
              )}

              {activeTab === "Comments" && (
                <>
                  <div
                    className={`max-w-3xl mx-auto ${
                      mode === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <h3 className="text-lg font-medium mb-3">Comments</h3>
                    <div
                      className={`p-4 h-[540px] border rounded ${
                        mode === "dark"
                          ? "bg-[#2b2b2b] border-gray-700 text-gray-300"
                          : "bg-white border-gray-300 text-black"
                      }`}
                    >
                      No comments yet.
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <label className="inline-flex items-center gap-2">
                        <input type="file" className="hidden" id="add-files" />
                        <button
                          onClick={() => setShowNewCommentModal(true)}
                          className={`px-4 py-2 border rounded ${
                            mode === "dark"
                              ? "border-gray-600 text-gray-200 hover:bg-[#2d2d2d]"
                              : "border-gray-400 text-black hover:bg-gray-200"
                          }`}
                        >
                          New Comment...
                        </button>
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={onClose}
                        className={`px-4 py-2 border rounded ${
                          mode === "dark"
                            ? "border-gray-600 text-gray-200 hover:bg-[#2d2d2d]"
                            : "border-gray-400 text-black hover:bg-gray-200"
                        }`}
                      >
                        Cancel
                      </button>
                      <button
                        className={`px-5 py-2 rounded text-white ${
                          mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"
                        }`}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* New Comment Modal */}
      <NewCommentModal
        open={showNewCommentModal}
        onClose={() => setShowNewCommentModal(false)}
        onSave={handleSaveComment}
      />
    </div>
  );
}

/*
  Simple inline icons to avoid extra dependencies.
*/
function DocumentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function FolderIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M3 7a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7v6l4 2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
