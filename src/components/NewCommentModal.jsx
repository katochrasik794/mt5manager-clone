import React, { useState, useContext } from "react";
import Mycontext from "../context/Mycontext";

export default function NewCommentModal({ open = true, onClose = () => {}, onSave = (text) => {} }) {
  const { mode } = useContext(Mycontext);
  const [commentType, setCommentType] = useState("Comment");
  const [font, setFont] = useState("Default font");
  const [size, setSize] = useState("Size");
  const [content, setContent] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
      <div className={`w-[920px] max-w-[98%] rounded shadow-lg overflow-hidden ${mode === "dark" ? "bg-[#2b2b2b] text-gray-200" : "bg-white text-black"}`}>
        {/* Title bar */}
        <div className={`flex items-center gap-3 px-4 py-2 border-b ${mode === "dark" ? "border-gray-700 bg-[#262626]" : "border-gray-300 bg-gray-100"}`}>
          <div className={`flex items-center gap-2 text-sm ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Document: 1 - Proof of identity - Prasad Nanekar - Person - New Comment</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {/* <button className={`p-1 rounded ${mode === "dark" ? "hover:bg-[#333333]" : "hover:bg-gray-200"}`} title="Help">?</button> */}
            <button onClick={onClose} className={`w-8 h-6 text-xl leading-none ${mode === "dark" ? "text-gray-400 hover:bg-red-600 hover:text-white" : "text-gray-600 hover:bg-red-600 hover:text-white"}`}>×</button>
          </div>
        </div>

        {/* Toolbar */}
        <div className={`flex items-center gap-3 px-3 py-2 border-b ${mode === "dark" ? "border-gray-700 bg-[#2b2b2b]" : "border-gray-300 bg-white"}`}>
          <select value={commentType} onChange={(e) => setCommentType(e.target.value)} className={`text-sm px-2 py-1 border rounded ${mode === "dark" ? "bg-[#333] border-gray-600 text-gray-100" : "bg-white border-gray-400 text-black"}`}>
            <option>Comment</option>
            <option>Note</option>
            <option>Reply</option>
          </select>

          <select value={font} onChange={(e) => setFont(e.target.value)} className={`text-sm px-2 py-1 border rounded ${mode === "dark" ? "bg-[#333] border-gray-600 text-gray-100" : "bg-white border-gray-400 text-black"}`}>
            <option>Default font</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>

          <select value={size} onChange={(e) => setSize(e.target.value)} className={`text-sm px-2 py-1 border rounded ${mode === "dark" ? "bg-[#333] border-gray-600 text-gray-100" : "bg-white border-gray-400 text-black"}`}>
            <option>Size</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
          </select>

          <div className="ml-2 flex items-center gap-2">
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333]" : "hover:bg-gray-200"}`} title="Undo">⤺</button>
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333]" : "hover:bg-gray-200"}`} title="Redo">⤼</button>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333]" : "hover:bg-gray-200"}`} title="Insert image">🖼</button>
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333]" : "hover:bg-gray-200"}`} title="Attach file">📎</button>
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333]" : "hover:bg-gray-200"}`} title="Insert link">🔗</button>
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333]" : "hover:bg-gray-200"}`} title="Table">▦</button>
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333] font-bold" : "hover:bg-gray-200 font-bold"}`} title="Bold">B</button>
            <button className={`p-2 rounded ${mode === "dark" ? "hover:bg-[#333] italic" : "hover:bg-gray-200 italic"}`} title="Italic">I</button>
          </div>
        </div>

        {/* Editor area */}
        <div className={`p-4 h-[380px] ${mode === "dark" ? "bg-[#2b2b2b]" : "bg-white"}`}>
          <div className={`h-full rounded border p-3 overflow-auto ${mode === "dark" ? 'custom-scrollbar' : 'custom-scrollbar-light'} ${mode === "dark" ? "bg-[#282828] border-gray-700 text-gray-200" : "bg-gray-50 border-gray-300 text-black"}`}>
            {/* Using a textarea for simplicity; replace with a rich text editor if needed */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your comment..."
              className="w-full h-full bg-transparent outline-none resize-none text-sm leading-relaxed"
            />
          </div>
        </div>

        {/* Footer */}
        <div className={`px-4 py-3 border-t flex items-center justify-end ${mode === "dark" ? "border-gray-700 bg-[#262626]" : "border-gray-300 bg-gray-100"}`}>
          <button onClick={() => { setContent(""); onClose(); }} className={`px-4 py-2 mr-3 border rounded ${mode === "dark" ? "border-gray-600 text-gray-200 hover:bg-[#2d2d2d]" : "border-gray-400 text-black hover:bg-gray-200"}`}>Cancel</button>
          <button onClick={() => { onSave(content); }} className={`px-5 py-2 rounded text-white ${mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"}`}>Save</button>
        </div>

        {/* Reference image for preview (local file) */}
        <img src="/mnt/data/c1e8c8e8-e276-41c7-8ea5-a76e3e426dcc.png" alt="new-comment-ref" className="hidden" />
      </div>
    </div>
  );
}
