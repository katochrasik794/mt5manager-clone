
import React from "react";
import ClientModal from "../../components/ClientModal";

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

      <div className="bg-[#2c2c2c] rounded-md border border-gray-700 shadow-sm overflow-hidden ">
        {/* Table header */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr className="">
                {/* sticky header: using position: sticky via utility classes */}
                <th className="sticky top-0  text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Login</th>
                <th className="sticky top-0  text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Name</th>
                <th className="sticky top-0  text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Group</th>
                <th className="sticky top-0  text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Country</th>
                <th className="sticky top-0  text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Client</th>
                <th className="sticky top-0  text-right px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Balance</th>
                <th className="sticky top-0  text-right px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Balance / Checked</th>
                <th className="sticky top-0  text-right px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Equity</th>
                <th className="sticky top-0  text-right px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Profit</th>
                <th className="sticky top-0 text-right px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700">Currency</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Scrollable body: fixed height so ~20 rows are visible (adjust h-[720px] if you need exact fit) */}
        <div className="max-h-[520px] overflow-y-auto custom-scrollbar">
          <table className="min-w-full table-fixed border-collapse">
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.login + "-" + idx}
                  onDoubleClick={() => onRowDoubleClick(r)}
                  className={`border-b border-gray-800 hover:bg-gray-800/40 cursor-pointer ${idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"}`}
                  title="Double-click to open client details"
                >
                  <td className="px-3 py-2 text-sm text-gray-200 w-[88px]">{r.login}</td>
                  <td className="px-3 py-2 text-sm text-gray-200">{r.name}</td>
                  <td className="px-3 py-2 text-sm text-gray-200">{r.group}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 w-[96px]">{r.country}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 w-[80px]">{r.client}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 text-right w-[120px]">{r.balance}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 text-right w-[140px]">{r.balanceChecked}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 text-right w-[100px]">{r.equity}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 text-right w-[120px]">{r.profit}</td>
                  <td className="px-3 py-2 text-sm text-gray-200 text-right w-[72px]">{r.currency}</td>
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

