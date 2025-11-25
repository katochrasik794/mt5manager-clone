import React, { useState } from "react";

export default function NewCommentModal({ open = true, onClose = () => {}, onSave = (text) => {} }) {
  const [commentType, setCommentType] = useState("Comment");
  const [font, setFont] = useState("Default font");
  const [size, setSize] = useState("Size");
  const [content, setContent] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="w-[920px] max-w-[98%] bg-[#2b2b2b] rounded shadow-lg overflow-hidden text-gray-200">
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-700 bg-[#262626]">
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Document: 1 - Proof of identity - Prasad Nanekar - Person - New Comment</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="p-1 rounded hover:bg-[#333333]" title="Help">?</button>
            <button onClick={onClose} className="p-1 rounded hover:bg-[#333333]">×</button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-700 bg-[#2b2b2b]">
          <select value={commentType} onChange={(e) => setCommentType(e.target.value)} className="bg-[#333] text-sm px-2 py-1 border border-gray-600 rounded">
            <option>Comment</option>
            <option>Note</option>
            <option>Reply</option>
          </select>

          <select value={font} onChange={(e) => setFont(e.target.value)} className="bg-[#333] text-sm px-2 py-1 border border-gray-600 rounded">
            <option>Default font</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>

          <select value={size} onChange={(e) => setSize(e.target.value)} className="bg-[#333] text-sm px-2 py-1 border border-gray-600 rounded">
            <option>Size</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
          </select>

          <div className="ml-2 flex items-center gap-2">
            <button className="p-2 rounded hover:bg-[#333]" title="Undo">⤺</button>
            <button className="p-2 rounded hover:bg-[#333]" title="Redo">⤼</button>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className="p-2 rounded hover:bg-[#333]" title="Insert image">🖼</button>
            <button className="p-2 rounded hover:bg-[#333]" title="Attach file">📎</button>
            <button className="p-2 rounded hover:bg-[#333]" title="Insert link">🔗</button>
            <button className="p-2 rounded hover:bg-[#333]" title="Table">▦</button>
            <button className="p-2 rounded hover:bg-[#333] font-bold" title="Bold">B</button>
            <button className="p-2 rounded hover:bg-[#333] italic" title="Italic">I</button>
          </div>
        </div>

        {/* Editor area */}
        <div className="p-4 h-[380px] bg-[#2b2b2b]">
          <div className="h-full bg-[#282828] rounded border border-gray-700 p-3 text-gray-200 overflow-auto">
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
        <div className="px-4 py-3 border-t border-gray-700 bg-[#262626] flex items-center justify-end">
          <button onClick={() => { setContent(""); onClose(); }} className="px-4 py-2 mr-3 border border-gray-600 rounded text-gray-200 hover:bg-[#2d2d2d]">Cancel</button>
          <button onClick={() => { onSave(content); }} className="px-5 py-2 bg-[#1f6feb] rounded text-white">Save</button>
        </div>

        {/* Reference image for preview (local file) */}
        <img src="/mnt/data/c1e8c8e8-e276-41c7-8ea5-a76e3e426dcc.png" alt="new-comment-ref" className="hidden" />
      </div>
    </div>
  );
}
