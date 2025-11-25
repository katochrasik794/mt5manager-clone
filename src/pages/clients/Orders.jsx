import React from "react";
import { FaUser } from "react-icons/fa";
import UserModal from "../../components/UserModal";

const sampleData = () => {
  // Updated rows from screenshot
  return [
    {
      login: "369165",
      order: "7453384",
      symbol: "usoil.ffx",
      time: "2025.11.24 19:31:54",
      type: "buy stop",
      volume: "10 / 0",
      price: "60.143",
      sl: "0.000",
      tp: "61.857",
      price2: "58.796",
    },
    {
      login: "369165",
      order: "7453385",
      symbol: "usoil.ffx",
      time: "2025.11.24 19:33:40",
      type: "sell limit",
      volume: "10 / 0",
      price: "59.831",
      sl: "0.000",
      tp: "59.531",
      price2: "58.781",
    },
    {
      login: "369165",
      order: "7453404",
      symbol: "usoil.ffx",
      time: "2025.11.24 19:37:34",
      type: "sell limit",
      volume: "20 / 0",
      price: "59.454",
      sl: "0.000",
      tp: "58.809",
      price2: "58.781",
    },
    {
      login: "369165",
      order: "7453417",
      symbol: "usoil.ffx",
      time: "2025.11.24 19:50:19",
      type: "buy stop",
      volume: "20 / 0",
      price: "60.388",
      sl: "0.000",
      tp: "61.711",
      price2: "58.796",
    },
    {
      login: "369165",
      order: "7453418",
      symbol: "usoil.ffx",
      time: "2025.11.24 19:51:21",
      type: "buy limit",
      volume: "20 / 0",
      price: "56.897",
      sl: "0.000",
      tp: "58.415",
      price2: "58.796",
    },
    {
      login: "369165",
      order: "7453419",
      symbol: "usoil.ffx",
      time: "2025.11.24 19:52:08",
      type: "sell stop",
      volume: "20 / 0",
      price: "57.582",
      sl: "0.000",
      tp: "57.048",
      price2: "58.781",
    },
    {
      login: "369026",
      order: "7455380",
      symbol: "xauusd.s",
      time: "2025.11.25 12:25:56",
      type: "buy limit",
      volume: "0.02 / 0",
      price: "4119.00",
      sl: "4109.00",
      tp: "0.00",
      price2: "4132.35",
    },
    {
      login: "369058",
      order: "7455434",
      symbol: "xauusd.s",
      time: "2025.11.25 12:52:42",
      type: "buy limit",
      volume: "0.01 / 0",
      price: "4120.89",
      sl: "4108.04",
      tp: "0.00",
      price2: "4132.35",
    },
  ];
};

export default function Positions() {
  const rows = sampleData();
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onRowDoubleClick = (row) => {
    setSelectedClient(row);
    setModalOpen(true);
  };

  return (
    <div className="">
      <div className="bg-[#2c2c2c] rounded-md border h-[75vh] border-gray-700 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto border-collapse min-w-0">
            <thead>
              <tr>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[88px] text-left">Login</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[100px] text-left">Order</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[120px] text-left">Symbol</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[160px] text-left">Time</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[100px] text-left">Type</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[90px] text-right">Volume</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[90px] text-right">Price</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[90px] text-right">S / L</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[90px] text-right">T / P</th>
                <th className="sticky top-0 px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 min-w-[90px] text-right">Price</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Body */}
        <div className="max-h-[520px] overflow-auto custom-scrollbar">
          <table className="w-full table-auto border-collapse min-w-0">
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.order + "-" + idx}
                  onDoubleClick={() => onRowDoubleClick(r)}
                  className={`border-b border-gray-800 cursor-pointer hover:bg-gray-800/40 ${
                    idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"
                  }`}
                >
                  <td className="px-3 py-2 text-sm text-gray-200 flex gap-2 items-center min-w-[88px]">
                    <FaUser /> {r.login}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[100px]">{r.order}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[120px]">{r.symbol}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[160px]">{r.time}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[100px]">{r.type}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[90px] text-right">{r.volume}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[90px] text-right">{r.price}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[90px] text-right">{r.sl}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[90px] text-right">{r.tp}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 min-w-[90px] text-right">{r.price2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <UserModal open={modalOpen} onClose={() => setModalOpen(false)} client={selectedClient || {}} initialTab="Trade" />
    </div>
  );
}
