
import React, { useContext } from "react";
import ClientModal from "../../components/ClientModal";
import Mycontext from "../../context/Mycontext";

const sampleData = (count = 80) => {
  const rows = [];
  for (let i = 0; i < count; i++) {
    const login = 369000 + i;
    rows.push({
      login: login.toString(),
      name: ["Aakanksha Pawar", "PRASHANT S KAKADE", "Ajay Thengil", "Rajendra Dudhe", "Naveed Naveed"][i % 5],
      group: i % 7 === 4 ? "OXO_B\\ECN+$10Comm" : "OXO_B\\Standard",
      country: "India",
      client: (i % 8 === 3) ? "" : "—",
      balance: (i % 12 === 5) ? (Math.round(Math.random() * 20000) / 100).toLocaleString() : "0.00",
      balanceChecked: (i % 10 === 6) ? (Math.round(Math.random() * 3200) / 100).toLocaleString() : "0.00",
      equity: (i % 11 === 2) ? (Math.round(Math.random() * 1000) / 100).toLocaleString() : "0.00",
      profit: (i % 13 === 7) ? (Math.round((Math.random() - 0.5) * 20000) / 100).toLocaleString() : "0.00",
      currency: "USD",
    });
  }
  return rows;
};

export default function ClientPage() {
  const { mode, searchTerm } = useContext(Mycontext);
  // If you have a prop or real data, replace this with your real array.
  const allRows = sampleData(120); // many rows to demonstrate scrolling

  // Filter rows based on search term
  const rows = searchTerm ? allRows.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.login.includes(searchTerm) ||
    row.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.country.toLowerCase().includes(searchTerm.toLowerCase())
  ) : allRows;
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onRowDoubleClick = (row) => {
    setSelectedClient(row);
    setModalOpen(true);
  };

  return (
    <div className="">
      <div className={`overflow-hidden ${mode === "dark" ? "bg-[#2c2c2c] border border-gray-600" : "bg-white border border-gray-300"}`}>
        {/* Table header */}
        <div className={`w-full overflow-x-auto ${mode === "dark" ? "custom-scrollbar" : "custom-scrollbar-light"}`}>
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr className="">
                {/* sticky header: using position: sticky via utility classes */}
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[88px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Login</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[180px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Name</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[160px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Group</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[96px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Country</th>
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[80px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Client</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b w-[120px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Balance</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b w-[140px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Balance / Checked</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b w-[100px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Equity</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b w-[120px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Profit</th>
                <th className={`sticky top-0 text-right px-3 py-2 text-xs font-medium border-b w-[72px] ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-black border-gray-300"}`}>Currency</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Scrollable body: fixed height so ~20 rows are visible (adjust h-[720px] if you need exact fit) */}
        <div className={`overflow-y-auto ${mode === "dark" ? "custom-scrollbar" : "custom-scrollbar-light"}`}>
          <table className="min-w-full table-fixed border-collapse">
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.login + "-" + idx}
                  onDoubleClick={() => onRowDoubleClick(r)}
                  className={`border-b cursor-pointer ${mode === "dark" ? `border-gray-800 hover:bg-gray-800/40 ${idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"}` : `border-gray-300 hover:bg-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}`}
                  title="Double-click to open client details"
                >
                  <td className={`px-3 py-2 text-xs w-[88px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.login}</td>
                  <td className={`px-3 py-2 text-xs w-[180px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.name}</td>
                  <td className={`px-3 py-2 text-xs w-[160px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.group}</td>
                  <td className={`px-3 py-2 text-xs w-[96px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.country}</td>
                  <td className={`px-3 py-2 text-xs w-[80px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.client}</td>
                  <td className={`px-3 py-2 text-xs text-right w-[120px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.balance}</td>
                  <td className={`px-3 py-2 text-xs text-right w-[140px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.balanceChecked}</td>
                  <td className={`px-3 py-2 text-xs text-right w-[100px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.equity}</td>
                  <td className={`px-3 py-2 text-xs text-right w-[120px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.profit}</td>
                  <td className={`px-3 py-2 text-xs text-right w-[72px] ${mode === "dark" ? "text-gray-200" : "text-black"}`}>{r.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Client Modal */}
      <ClientModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        client={selectedClient || {}}
      />
    </div>
  );
}

