import React, { useState, useContext } from "react";
import Mycontext from "../context/Mycontext";

export default function NewAccountModal({ open = true, onClose = () => {}, onCreate = (data) => {} }) {
  const { mode } = useContext(Mycontext);
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
      <div className={`w-[920px] max-w-[98%] rounded shadow-lg overflow-hidden ${mode === "dark" ? "bg-[#2b2b2b] text-gray-200" : "bg-white text-black"}`}>
        {/* Title bar */}
        <div className={`flex items-center justify-between px-4 py-2 border-b ${mode === "dark" ? "border-gray-700 bg-[#262626]" : "border-gray-300 bg-gray-100"}`}>
          <div className={`text-sm font-medium ${mode === "dark" ? "text-gray-200" : "text-black"}`}>New Account</div>
          <div className="flex items-center gap-2">
            <button className={`p-1 rounded ${mode === "dark" ? "hover:bg-[#333333]" : "hover:bg-gray-200"}`}>?</button>
            <button onClick={onClose} className={`p-1 rounded ${mode === "dark" ? "hover:bg-[#333333]" : "hover:bg-gray-200"}`}>×</button>
          </div>
        </div>

        {/* Form body */}
        <div className="py-6">
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* left column (10/12) */}
            <div className="col-span-9">
              <div className="grid grid-cols-12 gap-2 items-center">
                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Preferred Login:</label>
                <input
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={preferredLogin}
                  onChange={(e) => setPreferredLogin(e.target.value)}
                />

                <label className={`col-span-2 text-sm ml-6 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Group:</label>
                <select
                  className={`col-span-4 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <option>OXO_A\Classic</option>
                  <option>OXO_B\Pro</option>
                </select>

                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Existing Client:</label>
                <select
                  className={`col-span-9 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#2b2b2b] border border-gray-700 text-gray-100" : "bg-gray-100 border border-gray-300 text-black"}`}
                  value={existingClient}
                  disabled
                >
                  <option>8440 - Prasad Nanekar</option>
                </select>

                {/* Name fields */}
                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>First name:</label>
                <input
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <label className={`col-span-2 text-sm m-4 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Last name:</label>
                <input
                  className={`col-span-4 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Middle name:</label>
                <input
                  className={`col-span-9 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Company:</label>
                <input
                  className={`col-span-9 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Email:</label>
                <input
                  className={`col-span-9 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Phone:</label>
                <input
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-16 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Country:</label>
                <select
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>

                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Zip code:</label>
                <input
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-16 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>State:</label>
                <input
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={stateField}
                  onChange={(e) => setStateField(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-12 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>City:</label>
                <input
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <label className={`col-span-3 text-sm ml-16 ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Address:</label>
                <input
                  className={`col-span-3 px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            {/* right column for passwords (3/12) */}
            <div className="col-span-3 pr-4">
              <div className={`border rounded p-3 ${mode === "dark" ? "bg-[#262626] border-gray-700" : "bg-gray-100 border-gray-300"}`}>
                <div className={`text-sm mb-2 ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>Passwords</div>
                <label className={`text-xs ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Master:</label>
                <input
                  className={`w-full px-2 py-1 rounded text-sm mb-2 ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={masterPassword}
                  onChange={(e) => setMasterPassword(e.target.value)}
                />
                <label className={`text-xs ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Investor:</label>
                <input
                  className={`w-full px-2 py-1 rounded text-sm mb-2 ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={investorPassword}
                  onChange={(e) => setInvestorPassword(e.target.value)}
                />
                <label className={`text-xs ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Phone:</label>
                <input
                  className={`w-full px-2 py-1 rounded text-sm ${mode === "dark" ? "bg-[#282828] border border-gray-600 text-gray-100" : "bg-white border border-gray-400 text-black"}`}
                  value={passwordPhone}
                  onChange={(e) => setPasswordPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 flex items-center justify-center gap-4">
          <button onClick={() => { handleCreate(); onClose(); }} className={`px-6 py-1 rounded text-white ${mode === "dark" ? "bg-[#1f6feb]" : "bg-blue-500"}`}>OK</button>
          <button onClick={onClose} className={`px-6 py-1 border rounded ${mode === "dark" ? "border-gray-600 text-gray-200" : "border-gray-400 text-black"}`}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
