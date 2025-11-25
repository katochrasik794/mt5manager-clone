import React, { useState } from "react";

export default function ProofOfIdentityModal({
  open = true,
  onClose = () => {},
}) {
  const [activeTab, setActiveTab] = useState("Document");
  const [status, setStatus] = useState("New");
  const [docType, setDocType] = useState("Proof of identity");
  const [docSubType, setDocSubType] = useState("Driver license");
  const [issueDate, setIssueDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [name, setName] = useState("Prasad Nanekar - Person");
  const [comment, setComment] = useState("by Prasad Nanekar");

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
    // add more items if needed
  ]);

  function toggleHistory(id) {
    setHistory((prev) =>
      prev.map((h) => (h.id === id ? { ...h, expanded: !h.expanded } : h))
    );
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
      <div className="w-[1200px] max-w-5xl bg-[#2b2b2b] rounded shadow-lg overflow-hidden text-gray-200 h-[95%]">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-[#232323] h-screen border-r border-gray-700 p-6">
            <div className="mb-8 text-gray-300 font-semibold">Document</div>

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
                        ? "bg-[#343434] text-white"
                        : "text-gray-300 hover:bg-[#2b2b2b]"
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
                <div className="max-w-2xl mx-auto space-y-1">
                  <header className="mb-4 text-center">
                    <h2 className="text-2xl font-semibold">
                      Proof of identity - Prasad Nanekar - Person
                    </h2>
                  </header>
                  <div className="text-center">
                    <div className="mt-6 text-xs text-gray-300">
                      Created by: 7100020542 on 2025.11.02 16:32
                    </div>
                    <div className="mt-2 text-xs text-gray-300">
                      Last changed by: 7100020542 on 2025.11.02 16:32
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <label className="text-sm text-gray-300">Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="bg-[#333333] border border-gray-600 rounded px-3 py-1 text-sm"
                    >
                      <option>New</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                    </select>

                    <label className="text-sm text-gray-300 mt-2">
                      Document type
                    </label>
                    <select
                      value={docType}
                      onChange={(e) => setDocType(e.target.value)}
                      className="bg-[#333333] border border-gray-600 rounded px-3 py-1 text-sm"
                    >
                      <option>Proof of identity</option>
                      <option>Proof of address</option>
                    </select>

                    <label className="text-sm text-gray-300 mt-2">
                      Document subtype
                    </label>
                    <select
                      value={docSubType}
                      onChange={(e) => setDocSubType(e.target.value)}
                      className="bg-[#333333] border border-gray-600 rounded px-3 py-1 text-sm"
                    >
                      <option>Driver license</option>
                      <option>Passport</option>
                      <option>National ID</option>
                    </select>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-300">
                          Issue date
                        </label>
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="date"
                            value={issueDate}
                            onChange={(e) => setIssueDate(e.target.value)}
                            className="bg-[#333333] border border-gray-600 rounded px-3 py-1 text-sm w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-gray-300">
                          Expiration date
                        </label>
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="date"
                            value={expDate}
                            onChange={(e) => setExpDate(e.target.value)}
                            className="bg-[#333333] border border-gray-600 rounded px-3 py-1 text-sm w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <label className="text-sm text-gray-300">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#333333] border border-gray-600 rounded px-3 py-1 text-sm w-full"
                    />

                    <label className="text-sm text-gray-300">Comment</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={5}
                      className="bg-[#333333] border border-gray-600 rounded px-3 py-1 text-sm w-full"
                    />
                  </div>

                  <div className="flex justify-end mt-5 gap-3">
                    <button
                      onClick={onClose}
                      className="px-4 py-1 border border-gray-600 rounded text-gray-200 hover:bg-[#2d2d2d]"
                    >
                      Cancel
                    </button>
                    <button className="px-5 py-1 bg-[#1f6feb] rounded text-white">
                      Update
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "Files" && (
                <div className="flex-1 flex flex-col ">
                  <div className="overflow-auto rounded p-2 border border-gray-600 h-[80vh]  bg-[#2b2b2b]">
                    <table className="min-w-full border-collapse table-fixed text-sm">
                      <thead className="sticky top-0 bg-[#2b2b2b]">
                        <tr className="text-left text-gray-300">
                          <th className="w-8 py-2 border-b border-gray-600">
                            #
                          </th>
                          <th className="w-48 py-2 border-b border-gray-600">
                            Date
                          </th>
                          <th className="w-36 py-2 border-b border-gray-600">
                            Author
                          </th>
                          <th className="py-2 border-b border-gray-600">
                            Name
                          </th>
                          <th className="w-24 py-2 border-b border-gray-600">
                            Size
                          </th>
                          <th className="w-10 py-2 border-b border-gray-600">
                            {" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {files.map((f) => (
                          <tr key={f.id} className="hover:bg-[#313131]">
                            <td className="py-2 border-b border-gray-700">
                              {f.id}
                            </td>
                            <td className="py-2 border-b border-gray-700 text-gray-300">
                              {f.date}
                            </td>
                            <td className="py-2 border-b border-gray-700 text-gray-300">
                              {f.author}
                            </td>
                            <td className="py-2 border-b border-gray-700 text-gray-300 underline cursor-pointer">
                              {f.name}
                            </td>
                            <td className="py-2 border-b border-gray-700 text-gray-300">
                              {f.size}
                            </td>
                            <td className="py-2 border-b border-gray-700 text-right">
                              <button
                                title="Download"
                                className="px-2 py-1 rounded border border-gray-600"
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
                        <button className="px-4 py-2 border border-gray-600 rounded text-gray-200 hover:bg-[#2d2d2d]">
                          Add Files...
                        </button>
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-600 rounded text-gray-200 hover:bg-[#2d2d2d]"
                      >
                        Cancel
                      </button>
                      <button className="px-5 py-2 bg-[#1f6feb] rounded text-white">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "History" && (
                <>
                  <div className="h-[80vh] overflow-auto border border-gray-600 rounded p-2 bg-[#2b2b2b]">
                    <div className="divide-y divide-gray-700">
                      {history.map((h) => (
                        <div key={h.id}>
                          {/* row header */}
                          <div
                            className="flex items-center gap-4 p-2 cursor-pointer hover:bg-[#313131]"
                            onClick={() => toggleHistory(h.id)}
                          >
                            <div className="w-6 text-gray-300">{h.id}</div>
                            <div className="flex-1 text-gray-300">{h.date}</div>
                            <div className="w-40 text-gray-300 flex items-center justify-between">
                              <span>{h.author}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleHistory(h.id);
                                }}
                                className="ml-2 p-1 rounded border border-gray-600"
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
                            <div className="p-4 bg-[#2b2b2b] text-sm text-gray-300">
                              <div className="mb-2">
                                <span className="text-gray-200">
                                  Related client:
                                </span>{" "}
                                {h.relatedClient}
                              </div>
                              <div className="mb-2">
                                <span className="text-gray-200">Type:</span>{" "}
                                {h.type}
                              </div>
                              <div className="mb-2">
                                <span className="text-gray-200">Name:</span>{" "}
                                {h.name}
                              </div>
                              <div className="mb-2">
                                <span className="text-gray-200">Comment:</span>{" "}
                                {h.comment}
                              </div>
                              <div className="mb-2">
                                <span className="text-gray-200">Subtype:</span>{" "}
                                {h.subtype}
                              </div>
                              <div className="mb-2">
                                <span className="text-gray-200">
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
                      className="px-4 py-2 border border-gray-600 rounded text-gray-200 hover:bg-[#2d2d2d]"
                    >
                      Cancel
                    </button>
                    <button className="px-5 py-2 bg-[#1f6feb] rounded text-white">
                      Update
                    </button>
                  </div>
                </>
              )}

              {activeTab === "Comments" && (
                <>
                  <div className="max-w-3xl mx-auto text-gray-300">
                    <h3 className="text-lg font-medium mb-3">Comments</h3>
                    <div className="p-4 h-[75vh] bg-[#2b2b2b] border border-gray-700 rounded">
                      No comments yet.
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <label className="inline-flex items-center gap-2">
                        <input type="file" className="hidden" id="add-files" />
                        <button className="px-4 py-2 border border-gray-600 rounded text-gray-200 hover:bg-[#2d2d2d]">
                          New Comment...
                        </button>
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-600 rounded text-gray-200 hover:bg-[#2d2d2d]"
                      >
                        Cancel
                      </button>
                      <button className="px-5 py-2 bg-[#1f6feb] rounded text-white">
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
