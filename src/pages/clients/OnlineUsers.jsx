import React, { useContext } from "react";
import ClientModal from "../../components/ClientModal";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";
import UserModal from "../../components/UserModal";
import Mycontext from "../../context/Mycontext";

const sampleData = (count = 80) => {
  const rows = [];
  const clientTypes = [
    "Windows",
    "Android",
    "iOS",
    "Gateway",
    "Web",
    "Windows",
    "Android",
  ];

  for (let i = 0; i < count; i++) {
    const login = 369000 + i;

    rows.push({
      login: login.toString(),
      name: [
        "Aakanksha Pawar",
        "PRASHANT S KAKADE",
        "Ajay Thengil",
        "Rajendra Dudhe",
        "Naveed Naveed",
      ][i % 5],
      group: i % 7 === 4 ? "OXO_B\\ECN+$10Comm" : "OXO_B\\Standard",
      country: "India",

      // ✅ FILLED CLIENT COLUMN PROPERLY
      client: clientTypes[i % clientTypes.length],

      // Optional — keeping static version & sample IP
      version: i % 2 === 0 ? "5430" : "5400",
      ip: ["39.51.208.183", "223.227.93.146", "185.65.207.122"][i % 3],

      balance: i % 12 === 5 ? (Math.random() * 20000).toFixed(2) : "0.00",
      balanceChecked: i % 10 === 6 ? (Math.random() * 3200).toFixed(2) : "0.00",
      equity: i % 11 === 2 ? (Math.random() * 1000).toFixed(2) : "0.00",
      profit:
        i % 13 === 7 ? ((Math.random() - 0.5) * 20000).toFixed(2) : "0.00",
      currency: "USD",
    });
  }

  return rows;
};

const renderLoginIcon = (clientType) => {
  switch (clientType) {
    case "Windows":
      return <ComputerDesktopIcon className="w-5 h-5 text-blue-400" />;
    case "Android":
      return <DevicePhoneMobileIcon className="w-5 h-5 text-green-400" />;
    case "Gateway":
      return <CloudIcon className="w-5 h-5 text-yellow-300" />;
    default:
      return <ComputerDesktopIcon className="w-5 h-5 text-gray-400" />;
  }
};

export default function OnlineUsers() {
  const { mode } = useContext(Mycontext);
  // If you have a prop or real data, replace this with your real array.
  const rows = sampleData(120); // many rows to demonstrate scrolling
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onRowDoubleClick = (row) => {
    setSelectedClient(row);
    setModalOpen(true);
  };

  return (
    <div className="">
      {/* <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-100">Dashboard</h2>
        <div className="text-sm text-gray-400">Showing table — scroll to see more</div>
      </div> */}

      <div className={`overflow-hidden ${mode === "dark" ? "bg-[#2c2c2c] border border-gray-700" : "bg-white border border-gray-300"}`}>
        {/* HEADER */}
        <div className="w-full h-full overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[90px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  Login
                </th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[180px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  Group
                </th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[200px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  Name
                </th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[110px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  Client
                </th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[90px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  Version
                </th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[160px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  IP
                </th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b w-[100px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  Equity
                </th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b w-[80px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>
                  Currency
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* BODY */}
        <div className={`max-h-[520px] overflow-y-auto ${mode === "dark" ? "custom-scrollbar" : "custom-scrollbar-light"}`}>
          <table className="min-w-full table-fixed border-collapse">
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.login + "-" + idx}
                  onDoubleClick={() => onRowDoubleClick(r)}
                  className={`border-b cursor-pointer ${mode === "dark" ? `border-gray-800 hover:bg-gray-800/40 ${idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"}` : `border-gray-300 hover:bg-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}`}
                >
                  <td className={`px-3 py-2 text-xs w-[90px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    <div className="flex items-center gap-2">
                      {renderLoginIcon(r.client)}
                      {r.login}
                    </div>
                  </td>

                  <td className={`px-3 py-2 text-xs w-[180px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.group}
                  </td>
                  <td className={`px-3 py-2 text-xs w-[200px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.name}
                  </td>
                  <td className={`px-3 py-2 text-xs w-[110px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.client}
                  </td>
                  <td className={`px-3 py-2 text-xs w-[90px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.version || "5430"}
                  </td>
                  <td className={`px-3 py-2 text-xs w-[160px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.ip || "0.0.0.0"}
                  </td>
                  <td className={`px-3 py-2 text-xs text-right w-[100px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.equity}
                  </td>
                  <td className={`px-3 py-2 text-xs text-right w-[80px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Client Modal */}
      <UserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        client={selectedClient || {}}
      />
    </div>
  );
}
