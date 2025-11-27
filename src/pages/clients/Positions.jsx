import React, { useContext } from "react";
import { FaUser } from 'react-icons/fa';
import UserModal from "../../components/UserModal";
import Mycontext from "../../context/Mycontext";

const sampleData = () => {
  // Rows taken from the screenshot (order preserved)
  return [
    { login: "369008", position: "7377617", symbol: "xauusd.e", type: "buy", volume: "0.02", priceOpen: "4132.63", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7377637", symbol: "xauusd.e", type: "buy", volume: "0.02", priceOpen: "4127.71", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7377674", symbol: "xauusd.e", type: "buy", volume: "0.02", priceOpen: "4125.40", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7377687", symbol: "xauusd.e", type: "buy", volume: "0.02", priceOpen: "4123.12", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7377691", symbol: "xauusd.e", type: "buy", volume: "0.02", priceOpen: "4120.89", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7377754", symbol: "xauusd.e", type: "buy", volume: "0.05", priceOpen: "4113.88", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7386364", symbol: "xauusd.e", type: "buy", volume: "0.10", priceOpen: "4105.57", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7387944", symbol: "xauusd.e", type: "buy", volume: "0.05", priceOpen: "4110.00", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7387973", symbol: "xauusd.e", type: "buy", volume: "0.05", priceOpen: "4108.35", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7395089", symbol: "xauusd.e", type: "sell", volume: "1",    priceOpen: "4057.17", priceClose: "4129.15", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7395103", symbol: "xauusd.e", type: "sell", volume: "0.4",  priceOpen: "4049.65", priceClose: "4129.15", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7395248", symbol: "xauusd.e", type: "sell", volume: "0.1",  priceOpen: "4032.94", priceClose: "4129.15", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7395676", symbol: "xauusd.e", type: "buy", volume: "0.5",   priceOpen: "4100.84", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
    { login: "369008", position: "7395681", symbol: "xauusd.e", type: "buy", volume: "1",     priceOpen: "4101.45", priceClose: "4128.82", reason: "Mobile", swap: "0.00" },
  ];
};

export default function Positions() {
  const { mode } = useContext(Mycontext);
  // Use the specific rows that match the screenshot
  const rows = sampleData();
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onRowDoubleClick = (row) => {
    setSelectedClient(row);
    setModalOpen(true);
  };

  return (
    <div className="">
      <div className={`border-t overflow-hidden ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-white border-gray-300"}`}>
        {/* Table header - allow horizontal scroll for small screens */}
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto border-collapse min-w-0">
            <thead>
              <tr>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b min-w-[88px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Login</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b min-w-[120px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Position</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b min-w-[120px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Symbol</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b min-w-[80px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Type</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b min-w-[80px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Volume</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b min-w-[100px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Price</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b min-w-[100px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Price</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b min-w-[120px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Reason</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b min-w-[72px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-700 border-gray-300"}`}>Swap</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Scrollable body - allow horizontal + vertical scroll (responsive) */}
        <div className="max-h-[520px] overflow-auto overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto border-collapse min-w-0">
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.position + "-" + idx}
                  onDoubleClick={() => onRowDoubleClick(r)}
                  className={`border-b cursor-pointer ${mode === "dark" ? `border-gray-800 hover:bg-gray-800/40 ${idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"}` : `border-gray-300 hover:bg-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}`}
                  title="Double-click to open client details"
                >
                  <td className={`px-3 py-2 text-xs min-w-[88px] flex gap-2 items-center truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}><FaUser /> <span className="truncate">{r.login}</span></td>
                  <td className={`px-3 py-2 text-xs min-w-[120px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.position}</td>
                  <td className={`px-3 py-2 text-xs min-w-[120px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.symbol}</td>
                  <td className={`px-3 py-2 text-xs min-w-[80px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.type}</td>
                  <td className={`px-3 py-2 text-xs text-right min-w-[80px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.volume}</td>
                  <td className={`px-3 py-2 text-xs text-right min-w-[100px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.priceOpen}</td>
                  <td className={`px-3 py-2 text-xs text-right min-w-[100px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.priceClose}</td>
                  <td className={`px-3 py-2 text-xs min-w-[120px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.reason}</td>
                  <td className={`px-3 py-2 text-xs text-right min-w-[72px] truncate ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.swap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Modal */}
      <UserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        client={selectedClient || {}}
        initialTab="Trade"
      />

      {/* Reference screenshot (local file) */}
      <img src="/mnt/data/d4de65f7-5808-436e-8bf6-51337c1d25cd.png" alt="positions-ref" className="hidden" />
    </div>
  );
}
