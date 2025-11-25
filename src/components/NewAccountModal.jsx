import React, { useState } from "react";

export default function NewAccountModal({ open = true, onClose = () => {}, onCreate = (data) => {} }) {
  const [preferredLogin, setPreferredLogin] = useState("");
  const [group, setGroup] = useState("OXO_A\\Classic");
  const [existingClient, setExistingClient] = useState("8440 - Prasad Nanekar");

  const [firstName, setFirstName] = useState("Prasad");
  const [lastName, setLastName] = useState("Nanekar");
  const [middleName, setMiddleName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("prasadnanekar358@gmail.com");
  const [phone, setPhone] = useState("+918605476262");
  const [country, setCountry] = useState("India");
  const [zip, setZip] = useState("");
  const [stateField, setStateField] = useState("");
  const [city, setCity] = useState("Pune");
  const [address, setAddress] = useState("Chinchwad");

  const [masterPassword, setMasterPassword] = useState("OcZ*S7Gr");
  const [investorPassword, setInvestorPassword] = useState("Gh*iWmY5");
  const [passwordPhone, setPasswordPhone] = useState("");

  if (!open) return null;

  function handleCreate() {
    const payload = {
      preferredLogin,
      group,
      existingClient,
      firstName,
      lastName,
      middleName,
      company,
      email,
      phone,
      country,
      zip,
      state: stateField,
      city,
      address,
      masterPassword,
      investorPassword,
      passwordPhone,
    };
    onCreate(payload);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
      <div className="w-[920px] max-w-[98%] bg-[#2b2b2b] rounded shadow-lg overflow-hidden text-gray-200">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700 bg-[#262626]">
          <div className="text-sm font-medium">New Account</div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded hover:bg-[#333333]">?</button>
            <button onClick={onClose} className="p-1 rounded hover:bg-[#333333]">×</button>
          </div>
        </div>

        {/* Form body */}
        <div className="py-6">
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* left column (10/12) */}
            <div className="col-span-9">
              <div className="grid grid-cols-12 gap-2 items-center">
                <label className="col-span-3 text-sm ml-12 text-gray-300">Preferred Login:</label>
                <input
                  className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm"
                  value={preferredLogin}
                  onChange={(e) => setPreferredLogin(e.target.value)}
                />

                <label className="col-span-2 text-sm ml-6 text-gray-300">Group:</label>
                <select
                  className="col-span-4 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <option>OXO_A\Classic</option>
                  <option>OXO_B\Pro</option>
                </select>

                <label className="col-span-3 text-sm ml-12 text-gray-300">Existing Client:</label>
                <select className="col-span-9 bg-[#2b2b2b] border border-gray-700 px-2 py-1 rounded text-sm" value={existingClient} disabled>
                  <option>8440 - Prasad Nanekar</option>
                </select>

                {/* Name fields */}
                <label className="col-span-3 text-sm ml-12 text-gray-300">First name:</label>
                <input className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <label className="col-span-2 text-sm m-4 text-gray-300">Last name:</label>
                <input className="col-span-4 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <label className="col-span-3 text-sm ml-12 text-gray-300">Middle name:</label>
                <input className="col-span-9 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />

                <label className="col-span-3 text-sm ml-12 text-gray-300">Company:</label>
                <input className="col-span-9 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={company} onChange={(e) => setCompany(e.target.value)} />

                <label className="col-span-3 text-sm ml-12 text-gray-300">Email:</label>
                <input className="col-span-9 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className="col-span-3 text-sm ml-12 text-gray-300">Phone:</label>
                <input className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <label className="col-span-3 text-sm ml-16 text-gray-300">Country:</label>
                <select className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>

                <label className="col-span-3 text-sm ml-12 text-gray-300">Zip code:</label>
                <input className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={zip} onChange={(e) => setZip(e.target.value)} />

                <label className="col-span-3 text-sm ml-16 text-gray-300">State:</label>
                <input className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={stateField} onChange={(e) => setStateField(e.target.value)} />

                <label className="col-span-3 text-sm ml-12 text-gray-300">City:</label>
                <input className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={city} onChange={(e) => setCity(e.target.value)} />

                <label className="col-span-3 text-sm ml-16 text-gray-300">Address:</label>
                <input className="col-span-3 bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>

            {/* right column for passwords (3/12) */}
            <div className="col-span-3 pr-4">
              <div className="bg-[#262626] border border-gray-700 rounded p-3">
                <div className="text-sm text-gray-300 mb-2">Passwords</div>
                <label className="text-xs text-gray-300">Master:</label>
                <input className="w-full bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm mb-2" value={masterPassword} onChange={(e) => setMasterPassword(e.target.value)} />
                <label className="text-xs text-gray-300">Investor:</label>
                <input className="w-full bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm mb-2" value={investorPassword} onChange={(e) => setInvestorPassword(e.target.value)} />
                <label className="text-xs text-gray-300">Phone:</label>
                <input className="w-full bg-[#282828] border border-gray-600 px-2 py-1 rounded text-sm" value={passwordPhone} onChange={(e) => setPasswordPhone(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 flex items-center justify-center gap-4">
          <button onClick={() => { handleCreate(); onClose(); }} className="px-6 py-1 bg-[#1f6feb] rounded text-white">OK</button>
          <button onClick={onClose} className="px-6 py-1 border border-gray-600 rounded text-gray-200">Cancel</button>
        </div>

        {/* Reference image for preview (local path provided) */}
        <img src="/mnt/data/0af09682-2e27-48e8-8fe2-c45cfe4edbc0.png" alt="new-account-ref" className="hidden" />
      </div>
    </div>
  );
}
