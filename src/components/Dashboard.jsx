

// // Dashboard.jsx
// // Single-file React component using TailwindCSS to reproduce the dark, dense table layout
// // from the screenshot. Requires TailwindCSS in the project (e.g. via `npm install -D tailwindcss`
// // and configured). This component uses CSS variables to keep theme tweaks easy.

// const rows = Array.from({ length: 40 }).map((_, i) => ({
//   login: 369010 + i,
//   name: [
//     'Naveed Naveed',
//     'Rohit Kamble',
//     'Akash Jadhav',
//     'Trader',
//     'Deepak Patil',
//     'Finstep India',
//     'Suyog Datrange',
//     'Muhamad Jaenuri',
//     'Sagar Shinde',
//     'Anil Gaikwad'
//   ][i % 10],
//   group: ['OXO_B\\Standard', 'OXO_B\\Plus', 'OXO_B\\Pro'][i % 3],
//   country: 'India',
//   client: (i % 7 === 0) ? `${(Math.random() * 3_000).toFixed(2)}` : '0.00',
//   balance: (i % 5 === 0) ? `${(Math.random() * 2_500).toFixed(2)}` : '0.00',
//   balanceChecked: (i % 5 === 0) ? `${(Math.random() * 3_000).toFixed(2)}` : '0.00',
//   equity: (i % 6 === 0) ? `${(Math.random() * 3_500).toFixed(2)}` : '0.00',
//   profit: (i % 8 === 0) ? `-${(Math.random() * 200).toFixed(2)}` : '0.00',
//   curr: 'USD'
// }))


// export default function Dashboard() {
//   return (
//     <div className="min-h-screen p-2 sm:p-4 lg:p-6 bg-gray-900 text-white" style={{ '--panel': 'rgb(24,24,26)', '--muted': 'rgb(130,130,140)' }}>

//       {/* Top bar (filter at right) */}
//       <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//         <div className="text-sm text-[var(--muted)]">Accounts overview</div>
//         <div>
//           <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[rgba(255,255,255,0.03)] border border-gray-800 text-sm">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M8 12h8M10 20h4"/></svg>
//             Filter
//           </button>
//         </div>
//       </div>

//       {/* Summary strip */}
//       <div className="mb-4 rounded border border-gray-800 bg-[var(--panel)] p-3 text-sm text-[var(--muted)] flex flex-col sm:flex-row sm:justify-between gap-2">
//         <div>Clients: <span className="text-white">1</span> | Online: <span className="text-white">4</span> | Accounts: <span className="text-white">153</span></div>
//         <div>Positions: <span className="text-white">76</span> | Orders: <span className="text-white">11</span></div>
//       </div>

//       <div className="rounded border border-gray-800 bg-[var(--panel)]">

//       {/* TOP SCROLLBAR + TABLE */}
//       <div
//         id="scrollTop"
//         className="w-full overflow-x-scroll overflow-y-auto 
//                    max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh]"
//       >
//         {/* Force horizontal scroll */}
//         <div className="min-w-[1500px]">
//           <table className="w-full table-fixed border-separate border-spacing-0">

//             {/* TABLE HEAD */}
//             <thead className="sticky top-0 bg-[var(--panel)]">
//               <tr className="text-[13px] text-[var(--muted)]">
//                 <th className="px-3 py-2 text-left">Login</th>
//                 <th className="px-3 py-2 text-left">Name</th>
//                 <th className="px-3 py-2 text-left">Group</th>
//                 <th className="px-3 py-2 text-left">Country</th>
//                 <th className="px-3 py-2 text-left">Client</th>
//                 <th className="px-3 py-2 text-left">Balance</th>
//                 <th className="px-3 py-2 text-left">Balance / Checked</th>
//                 <th className="px-3 py-2 text-left">Equity</th>
//                 <th className="px-3 py-2 text-left">Profit</th>
//                 <th className="px-3 py-2 text-left w-16">Curr.</th>
//               </tr>
//             </thead>

//             {/* TABLE BODY */}
//             <tbody className="text-sm">
//               {rows.map((r, idx) => (
//                 <tr
//                   key={r.login}
//                   className={`${
//                     idx % 2 === 0
//                       ? "bg-[rgba(255,255,255,0.02)]"
//                       : "bg-transparent"
//                   } hover:bg-[rgba(255,255,255,0.03)]`}
//                 >
//                   <td className="px-3 py-2 text-[13px] whitespace-nowrap">
//                     {r.login}
//                   </td>

//                   <td className="px-3 py-2 flex items-center gap-2 text-[13px]">
//                     <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[rgba(255,255,255,0.03)] text-[10px] text-[var(--muted)]">
//                       👤
//                     </span>
//                     <span className="truncate max-w-[200px] sm:max-w-[260px] lg:max-w-[350px]">
//                       {r.name}
//                     </span>
//                   </td>

//                   <td className="px-3 py-2 text-[13px] text-[var(--muted)]">
//                     {r.group}
//                   </td>
//                   <td className="px-3 py-2 text-[13px]">{r.country}</td>
//                   <td className="px-3 py-2 text-[13px]">{r.client}</td>
//                   <td className="px-3 py-2 text-[13px]">{r.balance}</td>
//                   <td className="px-3 py-2 text-[13px]">{r.balanceChecked}</td>
//                   <td className="px-3 py-2 text-[13px]">{r.equity}</td>
//                   <td
//                     className={`px-3 py-2 text-[13px] ${
//                       parseFloat(r.profit) < 0
//                         ? "text-red-400"
//                         : "text-[var(--muted)]"
//                     }`}
//                   >
//                     {r.profit}
//                   </td>
//                   <td className="px-3 py-2 text-[13px]">{r.curr}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* BOTTOM SCROLLBAR */}
//       <div
//         id="scrollBottom"
//         className="w-full overflow-x-scroll overflow-y-hidden h-4 bg-transparent"
//       >
//         {/* Fake width for scrollbar */}
//         <div className="min-w-[1500px] h-1"></div>
//       </div>
//     </div>


//       {/* Responsive notes: the table is horizontally scrollable on small screens because min-w is set */}
//     </div>
//   )
// }



import React from "react";

/**
 * Dashboard.jsx
 *
 * - Dark table style matching your screenshots (dark background, muted borders, light text)
 * - Sticky header
 * - Scrollable tbody with fixed height so roughly 20 rows are visible at once;
 *   remaining rows are reachable by scrolling inside the table container.
 *
 * Usage:
 * - Replace this file contents or paste into your existing Dashboard.jsx.
 * - If you already have real data, replace `sampleData()` with your data array.
 */

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

export default function Dashboard() {
  // If you have a prop or real data, replace this with your real array.
  const rows = sampleData(120); // many rows to demonstrate scrolling

  return (
    <div className="">
      {/* <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-100">Dashboard</h2>
        <div className="text-sm text-gray-400">Showing table — scroll to see more</div>
      </div> */}

      <div className="bg-[#2c2c2c] rounded-md border border-gray-700 shadow-sm overflow-hidden">
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
        <div className="max-h-[520px] overflow-y-auto">
          <table className="min-w-full table-fixed border-collapse">
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.login + "-" + idx}
                  className={`border-b border-gray-800 hover:bg-gray-800/40 ${idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"}`}
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
    </div>
  );
}
