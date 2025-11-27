import React, { useContext } from "react";
// import ClientModal from "../../components/ClientModal";
import ClientsModal from "../../components/ClientsModal";
import Mycontext from "../../context/Mycontext";

export default function Clients() {
  const { mode } = useContext(Mycontext);
  // Replaced dynamic generator with the exact (2) entries to match screenshot.
  const rows = [
    {
      id: "8440",
      name: "Prasad Nanekar",
      city: "Pune",
      type: "Individual",
      status: "Incompleted",
      kycStatus: "Undefined",
      assignedManager: "-",
      company: "-",
      email: "prasadnanekar358@gmail.com",
      phone: "+918605476262",
      country: "India",
      client: "Windows",
      version: "5430",
      ip: "39.51.208.183",
      equity: "0.00",
      currency: "USD",
    },
    {
      id: "8441",
      name: "Asha Sharma",
      city: "Mumbai",
      type: "Individual",
      status: "Active",
      kycStatus: "Completed",
      assignedManager: "Raghav",
      company: " — ",
      email: "asha@example.com",
      phone: "+919876543210",
      country: "India",
      client: "Android",
      version: "5430",
      ip: "223.227.93.146",
      equity: "0.00",
      currency: "USD",
    },
    // If you want only 2 entries, remove the second object above.
  ];

  const [modalOpen, setModalOpen] = React.useState(false);

  const onRowDoubleClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="">
      <div className={`border-t overflow-hidden ${mode === "dark" ? "bg-[#2c2c2c] border-gray-700" : "bg-white border-gray-300"}`}>
        {/* RESPONSIVE TABLE WRAPPER */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr>
                {/* ID - always visible */}
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[70px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  ID
                </th>

                {/* Name - always visible */}
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[120px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  Name
                </th>

                {/* City - visible from sm (>=640px) */}
                <th className={`sticky top-0 hidden sm:table-cell px-3 py-2 text-xs font-medium border-b w-[80px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  City
                </th>

                {/* Type - visible from md (>=768px) */}
                <th className={`sticky top-0 hidden md:table-cell px-3 py-2 text-xs font-medium border-b w-[120px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  Type
                </th>

                {/* Status - visible from md */}
                <th className={`sticky top-0 hidden lg:table-cell text-left px-3 py-2 text-xs font-medium border-b w-[130px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  Status
                </th>

                {/* KYC Status - visible from lg */}
                <th className={`sticky top-0 hidden xl:table-cell text-left px-3 py-2 text-xs font-medium border-b w-[110px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  KYC Status
                </th>

                {/* Assigned Manager - visible from xl */}
                {/* <th className="sticky top-0 hidden 2xl:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[100px] whitespace-nowrap">
                  Assigned Mana...
                </th> */}

                {/* Company - visible from lg */}
                <th className={`sticky top-0 hidden lg:table-cell text-left px-3 py-2 text-xs font-medium border-b w-[60px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  Company
                </th>

                {/* Email - visible from sm (so mobile shows email too) */}
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[200px] whitespace-nowrap hidden xs:table-cell sm:table-cell ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  Email
                </th>

                {/* Phone - visible from sm */}
                <th className={`sticky top-0 text-left px-3 py-2 text-xs font-medium border-b w-[100px] whitespace-nowrap hidden sm:table-cell ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  Phone
                </th>

                {/* Country - visible from md */}
                <th className={`sticky top-0 hidden md:table-cell text-left px-3 py-2 text-xs font-medium border-b w-[60px] whitespace-nowrap ${mode === "dark" ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-300"}`}>
                  Country
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* BODY */}
        <div className="max-h-[520px] overflow-y-auto custom-scrollbar">
          <table className="min-w-full table-fixed border-collapse">
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.id + "-" + idx}
                  onDoubleClick={() => onRowDoubleClick(r)}
                  className={`border-b cursor-pointer ${
                    mode === "dark"
                      ? `border-gray-800 hover:bg-gray-800/40 ${idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"}`
                      : `border-gray-300 hover:bg-gray-200/40 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`
                  }`}
                  title="Double-click to open client details"
                >
                  {/* ID */}
                  <td className={`px-3 py-2 text-xs w-[70px] align-top whitespace-nowrap ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">🔒</span>
                      <span>{r.id}</span>
                    </div>
                  </td>

                  {/* Name */}
                  <td className={`px-3 py-2 text-xs w-[120px] align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.name}
                  </td>

                  {/* City (hidden on xs) */}
                  <td className={`px-3 py-2 text-xs w-[80px] hidden sm:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.city}
                  </td>

                  {/* Type (hidden on sm, shown on md+) */}
                  <td className={`px-3 py-2 text-xs w-[120px] hidden md:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.type}
                  </td>

                  {/* Status (visible on lg+) */}
                  <td className={`px-3 py-2 text-xs w-[130px] hidden lg:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.status}
                  </td>

                  {/* KYC Status (visible on xl+) */}
                  <td className={`px-3 py-2 text-xs w-[110px] hidden xl:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.kycStatus}
                  </td>

                  {/* Assigned Manager (visible on 2xl+) */}
                  <td className={`px-3 py-2 text-xs w-[90px] hidden 2xl:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.assignedManager}
                  </td>

                  {/* Company (visible on lg+) */}
                  <td className={`px-3 py-2 text-xs w-[60px] hidden lg:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.company}
                  </td>

                  {/* Email (visible on sm+) */}
                  <td className={`px-3 py-2 text-xs w-[200px] hidden sm:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.email}
                  </td>

                  {/* Phone (visible on sm+) */}
                  <td className={`px-3 py-2 text-xs w-[100px] hidden sm:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.phone}
                  </td>

                  {/* Country (visible on md+) */}
                  <td className={`px-3 py-2 text-xs w-[60px] hidden md:table-cell align-top ${mode === "dark" ? "text-gray-200" : "text-black"}`}>
                    {r.country}
                  </td>

                  {/* For very small screens, show a compact stacked fallback under the row (using a full-row td) */}
                  <td className={`px-3 py-2 text-xs w-full sm:hidden ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    {/* compact details visible only on xs */}
                    <div className="flex flex-col gap-1 text-xs">
                      <span>Email: {r.email}</span>
                      <span>Phone: {r.phone}</span>
                      <span>City: {r.city}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clients Modal */}
      <ClientsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
