

// Dashboard.jsx
// Single-file React component using TailwindCSS to reproduce the dark, dense table layout
// from the screenshot. Requires TailwindCSS in the project (e.g. via `npm install -D tailwindcss`
// and configured). This component uses CSS variables to keep theme tweaks easy.

const rows = Array.from({ length: 40 }).map((_, i) => ({
  login: 369010 + i,
  name: [
    'Naveed Naveed',
    'Rohit Kamble',
    'Akash Jadhav',
    'Trader',
    'Deepak Patil',
    'Finstep India',
    'Suyog Datrange',
    'Muhamad Jaenuri',
    'Sagar Shinde',
    'Anil Gaikwad'
  ][i % 10],
  group: ['OXO_B\\Standard', 'OXO_B\\Plus', 'OXO_B\\Pro'][i % 3],
  country: 'India',
  client: (i % 7 === 0) ? `${(Math.random() * 3_000).toFixed(2)}` : '0.00',
  balance: (i % 5 === 0) ? `${(Math.random() * 2_500).toFixed(2)}` : '0.00',
  balanceChecked: (i % 5 === 0) ? `${(Math.random() * 3_000).toFixed(2)}` : '0.00',
  equity: (i % 6 === 0) ? `${(Math.random() * 3_500).toFixed(2)}` : '0.00',
  profit: (i % 8 === 0) ? `-${(Math.random() * 200).toFixed(2)}` : '0.00',
  curr: 'USD'
}))


export default function Dashboard() {
  return (
    <div className="min-h-screen p-2 sm:p-4 lg:p-6 bg-gray-900 text-white" style={{ '--panel': 'rgb(24,24,26)', '--muted': 'rgb(130,130,140)' }}>

      {/* Top bar (filter at right) */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-sm text-[var(--muted)]">Accounts overview</div>
        <div>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[rgba(255,255,255,0.03)] border border-gray-800 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M8 12h8M10 20h4"/></svg>
            Filter
          </button>
        </div>
      </div>

      {/* Summary strip */}
      <div className="mb-4 rounded border border-gray-800 bg-[var(--panel)] p-3 text-sm text-[var(--muted)] flex flex-col sm:flex-row sm:justify-between gap-2">
        <div>Clients: <span className="text-white">1</span> | Online: <span className="text-white">4</span> | Accounts: <span className="text-white">153</span></div>
        <div>Positions: <span className="text-white">76</span> | Orders: <span className="text-white">11</span></div>
      </div>

      <div className="rounded border border-gray-800 bg-[var(--panel)]">

      {/* TOP SCROLLBAR + TABLE */}
      <div
        id="scrollTop"
        className="w-full overflow-x-scroll overflow-y-auto 
                   max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh]"
      >
        {/* Force horizontal scroll */}
        <div className="min-w-[1500px]">
          <table className="w-full table-fixed border-separate border-spacing-0">

            {/* TABLE HEAD */}
            <thead className="sticky top-0 bg-[var(--panel)]">
              <tr className="text-[13px] text-[var(--muted)]">
                <th className="px-3 py-2 text-left">Login</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Group</th>
                <th className="px-3 py-2 text-left">Country</th>
                <th className="px-3 py-2 text-left">Client</th>
                <th className="px-3 py-2 text-left">Balance</th>
                <th className="px-3 py-2 text-left">Balance / Checked</th>
                <th className="px-3 py-2 text-left">Equity</th>
                <th className="px-3 py-2 text-left">Profit</th>
                <th className="px-3 py-2 text-left w-16">Curr.</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="text-sm">
              {rows.map((r, idx) => (
                <tr
                  key={r.login}
                  className={`${
                    idx % 2 === 0
                      ? "bg-[rgba(255,255,255,0.02)]"
                      : "bg-transparent"
                  } hover:bg-[rgba(255,255,255,0.03)]`}
                >
                  <td className="px-3 py-2 text-[13px] whitespace-nowrap">
                    {r.login}
                  </td>

                  <td className="px-3 py-2 flex items-center gap-2 text-[13px]">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[rgba(255,255,255,0.03)] text-[10px] text-[var(--muted)]">
                      👤
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-[260px] lg:max-w-[350px]">
                      {r.name}
                    </span>
                  </td>

                  <td className="px-3 py-2 text-[13px] text-[var(--muted)]">
                    {r.group}
                  </td>
                  <td className="px-3 py-2 text-[13px]">{r.country}</td>
                  <td className="px-3 py-2 text-[13px]">{r.client}</td>
                  <td className="px-3 py-2 text-[13px]">{r.balance}</td>
                  <td className="px-3 py-2 text-[13px]">{r.balanceChecked}</td>
                  <td className="px-3 py-2 text-[13px]">{r.equity}</td>
                  <td
                    className={`px-3 py-2 text-[13px] ${
                      parseFloat(r.profit) < 0
                        ? "text-red-400"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {r.profit}
                  </td>
                  <td className="px-3 py-2 text-[13px]">{r.curr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BOTTOM SCROLLBAR */}
      <div
        id="scrollBottom"
        className="w-full overflow-x-scroll overflow-y-hidden h-4 bg-transparent"
      >
        {/* Fake width for scrollbar */}
        <div className="min-w-[1500px] h-1"></div>
      </div>
    </div>


      {/* Responsive notes: the table is horizontally scrollable on small screens because min-w is set */}
    </div>
  )
}
