import React from "react";
// import ClientModal from "../../components/ClientModal";
import ClientsModal from "../../components/ClientsModal";

export default function Clients() {
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
      <div className="bg-[#2c2c2c] rounded-md border border-gray-700 shadow-sm overflow-hidden">
        {/* RESPONSIVE TABLE WRAPPER */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse">
            <thead>
              <tr>
                {/* ID - always visible */}
                <th className="sticky top-0 text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[70px] whitespace-nowrap">
                  ID
                </th>

                {/* Name - always visible */}
                <th className="sticky top-0 text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[220px] whitespace-nowrap">
                  Name
                </th>

                {/* City - visible from sm (>=640px) */}
                <th className="sticky top-0 hidden sm:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[120px] whitespace-nowrap">
                  City
                </th>

                {/* Type - visible from md (>=768px) */}
                <th className="sticky top-0 hidden md:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[120px] whitespace-nowrap">
                  Type
                </th>

                {/* Status - visible from md */}
                <th className="sticky top-0 hidden lg:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[140px] whitespace-nowrap">
                  Status
                </th>

                {/* KYC Status - visible from lg */}
                <th className="sticky top-0 hidden xl:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[140px] whitespace-nowrap">
                  KYC Status
                </th>

                {/* Assigned Manager - visible from xl */}
                <th className="sticky top-0 hidden 2xl:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[140px] whitespace-nowrap">
                  Assigned Mana...
                </th>

                {/* Company - visible from lg */}
                <th className="sticky top-0 hidden lg:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[140px] whitespace-nowrap">
                  Company
                </th>

                {/* Email - visible from sm (so mobile shows email too) */}
                <th className="sticky top-0 text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[260px] whitespace-nowrap hidden xs:table-cell sm:table-cell">
                  Email
                </th>

                {/* Phone - visible from sm */}
                <th className="sticky top-0 text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[160px] whitespace-nowrap hidden sm:table-cell">
                  Phone
                </th>

                {/* Country - visible from md */}
                <th className="sticky top-0 hidden md:table-cell text-left px-3 py-2 text-xs font-medium text-gray-300 border-b border-gray-700 w-[120px] whitespace-nowrap">
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
                  className={`border-b border-gray-800 hover:bg-gray-800/40 cursor-pointer ${
                    idx % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#343434]"
                  }`}
                  title="Double-click to open client details"
                >
                  {/* ID */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[70px] align-top whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">🔒</span>
                      <span>{r.id}</span>
                    </div>
                  </td>

                  {/* Name */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[220px] align-top">
                    {r.name}
                  </td>

                  {/* City (hidden on xs) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[120px] hidden sm:table-cell align-top">
                    {r.city}
                  </td>

                  {/* Type (hidden on sm, shown on md+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[120px] hidden md:table-cell align-top">
                    {r.type}
                  </td>

                  {/* Status (visible on lg+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[140px] hidden lg:table-cell align-top">
                    {r.status}
                  </td>

                  {/* KYC Status (visible on xl+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[140px] hidden xl:table-cell align-top">
                    {r.kycStatus}
                  </td>

                  {/* Assigned Manager (visible on 2xl+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[140px] hidden 2xl:table-cell align-top">
                    {r.assignedManager}
                  </td>

                  {/* Company (visible on lg+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[140px] hidden lg:table-cell align-top">
                    {r.company}
                  </td>

                  {/* Email (visible on sm+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[260px] hidden sm:table-cell align-top">
                    {r.email}
                  </td>

                  {/* Phone (visible on sm+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[160px] hidden sm:table-cell align-top">
                    {r.phone}
                  </td>

                  {/* Country (visible on md+) */}
                  <td className="px-3 py-2 text-sm text-gray-200 w-[120px] hidden md:table-cell align-top">
                    {r.country}
                  </td>

                  {/* For very small screens, show a compact stacked fallback under the row (using a full-row td) */}
                  <td className="px-3 py-2 text-sm text-gray-400 w-full sm:hidden">
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
