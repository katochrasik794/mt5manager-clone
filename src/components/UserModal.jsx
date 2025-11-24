import React, { useState } from "react";
import NewClientModal from "../components/NewClientModal"; // Import the new component
import GroupConfigModal from "../components/GroupConfigModal"; // Import GroupConfigModal
// import DealModal from "./DealDetailsModal"
import DealDetailsModal from "./DealDetailsModal";

export default function UserModal({ open, onClose, client }) {
  // Destructure client data with defaults
  const {
    login = "369003",
    name = "Aakanksha Pawar",
    currency = "USD",
    group = "OXO_B\\Standard",
    leverage = "1 : 400",
    metaQuotesId = "7DFF3626",
    email = "aakankshalp@gmail.com",
    phone = "0000000000",
    registered = "2025.11.05 16:49",
    lastAccess = "2025.11.05 16:49",
    lastAddress = "223.228.140.115",
    balance = "0.00",
    equity = "0.00",
    freeMargin = "0.00",
    // profit = "0.00",
    // Personal tab fields
    firstName = "Aakanksha",
    lastName = "Pawar",
    middleName = "",
    company = "",
    // language = "",
    // status = "",
    idNumber = "",
    leadCampaign = "",
    leadSource = "",
    // country = "India",
    state = "",
    city = "",
    zipCode = "",
    address = "",
    comment = "",
    // Account tab fields
    color = "None",
    bankAccount = "",
    agentAccount = "",
    enableAccount = true,
    enablePasswordChange = true,
    enableOneTimePassword = false,
    changePasswordNextLogin = false,
    // Limits tab fields
    showToRegularManagers = true,
    includeInServerReports = true,
    enableDailyReports = true,
    enableApiConnections = false,
    enableSponsoredVps = false,
    allowSubscriptionData = false,
    enableTrading = true,
    enableAlgoTrading = true,
    enableTrailingStops = true,
    limitTotalValue = "Default",
    limitNumberOfOrders = "Default",
    // Profile tab fields
    supportCenterEmail = "your.email@example.com",
    supportCenterPassword = "",
  } = client || {};

  // List of tabs
  const tabs = [
    "Overview",
    "Exposure",
    "Personal",
    "Account",
    "Limits",
    "Profile",
    "Subscriptions",
    "Payments",
    "Balance",
    "Trade",
    "History",
    "Security",
  ];

     // sample deals to match screenshot
     const deals = [
       {
         id: 1,
         time: "2025.11.14 16:00:55",
         deal: "7349073",
         type: "balance",
         amount: "729.00",
       },
       // add more rows if needed
     ];
   
     const [modalOpen, setModalOpen] = React.useState(false);
     const [selectedRow, setSelectedRow] = React.useState(null);
   
     const onRowDoubleClick = (row) => {
       setSelectedRow(row);
       setModalOpen(true);
     };
   
     const closeModal = () => {
       setModalOpen(false);
       setSelectedRow(null);
     };
   
     // State to manage the active tab (original modal)
     const [activeTab, setActiveTab] = useState("Overview");
   
     // State to manage the visibility of the NEW CLIENT modal
     const [isNewClientOpen, setIsNewClientOpen] = useState(false);
   
     // State to manage the visibility of the GROUP CONFIG modal
     const [isGroupConfigOpen, setIsGroupConfigOpen] = useState(false);
   
     if (!open) return null;

  // Generic styling
  const inputStyle =
    "bg-[#3c3c3c] border border-gray-600 text-gray-100 text-xs rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-[2px]";
  const labelStyle = "block text-xs font-medium  text-gray-400";
  const checkboxStyle =
    "w-4 h-3 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500";

  // Custom styling for the MetaQuotes input fields (used in Profile)
  const mqInputStyle =
    "bg-[#1e1e1e] border border-gray-600 text-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-3";
  const mqIconStyle =
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg";

  // Custom styling for select dropdowns
  const selectStyle = (width = "full") =>
    `bg-[#3c3c3c] border border-gray-600 text-gray-100 text-xs rounded-sm p-[2px] pr-8 block w-${width}`;

  // Dummy Candlestick Component (purely visual)
  const Candlestick = ({ color, height, offset, wickHeight, isCurrent }) => {
    const hClass = `h-[${height}px]`;
    // const topClass = `top-[${offset}px]`;
    // const wickClass = `h-[${wickHeight}px]`;

    // The candle itself (body)
    const body = (
      <div
        className={`relative w-[6px] ${
          color === "green" ? "bg-green-500" : "bg-red-500"
        } ${hClass}`}
        style={{ height: `${height}px` }}
      >
        {/* Wicks (top and bottom) */}
        <div
          className={`absolute w-px bg-gray-400 left-1/2 -translate-x-1/2`}
          style={{ height: `${wickHeight}px`, top: `-${wickHeight}px` }}
        ></div>
        <div
          className={`absolute w-px bg-gray-400 left-1/2 -translate-x-1/2 bottom-0`}
          style={{ height: `${wickHeight}px` }}
        ></div>

        {/* Current Price Line (for the last candle) */}
        {isCurrent && (
          <div className="absolute top-1/2 w-40 h-px bg-yellow-400 right-0 z-10"></div>
        )}
      </div>
    );

    return (
      <div
        className="flex flex-col justify-end items-center relative h-full pt-10"
        style={{ transform: `translateY(-${offset}px)` }}
      >
        {body}
      </div>
    );
  };

  // Array of simulated candles (offset is from the bottom of the chart area)
  const dummyCandles = [
    { color: "red", height: 20, offset: 15, wickHeight: 8 },
    { color: "green", height: 40, offset: 10, wickHeight: 12 },
    { color: "red", height: 25, offset: 20, wickHeight: 10 },
    { color: "green", height: 50, offset: 5, wickHeight: 15 },
    { color: "red", height: 35, offset: 18, wickHeight: 7 },
    { color: "green", height: 30, offset: 25, wickHeight: 10 },
    { color: "red", height: 50, offset: 5, wickHeight: 15 },
    { color: "green", height: 60, offset: 10, wickHeight: 5 },
    { color: "red", height: 20, offset: 15, wickHeight: 8 },
    { color: "green", height: 40, offset: 10, wickHeight: 12 },
    { color: "red", height: 25, offset: 20, wickHeight: 10 },
    { color: "green", height: 50, offset: 5, wickHeight: 15 },
    { color: "red", height: 35, offset: 18, wickHeight: 7 },
    { color: "green", height: 30, offset: 25, wickHeight: 10 },
    { color: "red", height: 50, offset: 5, wickHeight: 15 },
    { color: "green", height: 60, offset: 10, wickHeight: 5 },
    { color: "red", height: 20, offset: 15, wickHeight: 8 },
    { color: "green", height: 40, offset: 10, wickHeight: 12 },
    { color: "red", height: 25, offset: 20, wickHeight: 10 },
    { color: "green", height: 50, offset: 5, wickHeight: 15 },
    { color: "red", height: 35, offset: 18, wickHeight: 7 },
    { color: "green", height: 30, offset: 25, wickHeight: 10 },
    { color: "red", height: 50, offset: 5, wickHeight: 15 },
    { color: "green", height: 60, offset: 10, wickHeight: 5 },
    { color: "red", height: 20, offset: 15, wickHeight: 8 },
    { color: "green", height: 40, offset: 10, wickHeight: 12 },
    { color: "red", height: 25, offset: 20, wickHeight: 10 },
    { color: "green", height: 50, offset: 5, wickHeight: 15 },
    { color: "red", height: 35, offset: 18, wickHeight: 7 },
    { color: "green", height: 30, offset: 25, wickHeight: 10 },
    { color: "red", height: 50, offset: 5, wickHeight: 15 },
    { color: "green", height: 60, offset: 10, wickHeight: 5 },
    { color: "red", height: 20, offset: 15, wickHeight: 8 },
    { color: "green", height: 40, offset: 10, wickHeight: 12 },
    { color: "red", height: 25, offset: 20, wickHeight: 10 },
    { color: "green", height: 50, offset: 5, wickHeight: 15 },
    { color: "red", height: 35, offset: 18, wickHeight: 7 },
    { color: "green", height: 30, offset: 25, wickHeight: 10 },
    { color: "red", height: 50, offset: 5, wickHeight: 15 },
    { color: "green", height: 60, offset: 10, wickHeight: 5 },
    { color: "red", height: 20, offset: 15, wickHeight: 8 },
    { color: "green", height: 40, offset: 10, wickHeight: 12 },
    { color: "red", height: 25, offset: 20, wickHeight: 10 },
    { color: "green", height: 50, offset: 5, wickHeight: 15 },
    { color: "red", height: 35, offset: 18, wickHeight: 7 },
    { color: "green", height: 30, offset: 25, wickHeight: 10 },
    { color: "red", height: 50, offset: 5, wickHeight: 15 },
    { color: "green", height: 45, offset: 10, wickHeight: 15, isCurrent: true }, // Last one is the current candle
  ];

  return (
    <>
      {/* Client Account Modal (The main modal) */}
      <div className="fixed inset-0 -top-12 backdrop-blur  flex items-center justify-center z-50">
        {/* Main Content Area - mimics the window from the image */}
        <div className="bg-[#1e1e1e] rounded-sm border border-gray-700 shadow-2xl max-w-4xl w-full h-5/6 mx-4">
          {/* Title Bar */}
          <div className="flex items-center justify-between p-1 bg-[#2c2c2c] border-b border-gray-700">
            <h3 className="text-sm font-semibold text-gray-100 ml-2">
              Account: **{login}**, **{name}**, **{currency}**, **{group}**
            </h3>
            <div className="flex items-center">
              <button className="text-gray-400 hover:bg-[#3e3e3e] w-8 h-6 text-3xl mb-2 leading-none">
                <span className="inline-block transform -translate-y-0.5">
                  -
                </span>
              </button>
              <button className="text-gray-400 hover:bg-[#3e3e3e] w-8 h-6 text-lg leading-none">
                ☐
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:bg-red-600 hover:text-white w-8 h-6 mb-1 text-xl leading-none"
              >
                ×
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-[#2c2c2c] border-b border-[#1e1e1e] p-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-2 text-xs font-medium ${
                  activeTab === tab
                    ? "bg-[#1e1e1e] text-white border-b-2 border-blue-500"
                    : "text-gray-400 hover:bg-[#3e3e3e]"
                } transition-colors duration-150 rounded-t-sm`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          {/* Only the Profile tab is forced to have no scroll; others can scroll if content exceeds height */}
          <div
            className={`p-4 bg-[#2c2c2c] h-[calc(100%-65px)] ${
              activeTab !== "Profile" ? "overflow-auto" : "overflow-hidden"
            }`}
          >
            {/* --- Overview Content --- */}
            {activeTab === "Overview" && (
              <>
                <div className="text-sm space-y-1 mb-4">
                  <p className="text-gray-100">
                    **{name}**, **{login}**,{" "}
                    <span
                      className="text-blue-400 cursor-pointer"
                      onClick={() => setIsGroupConfigOpen(true)}
                    >
                      OXO B\Standard
                    </span>
                    , <span className="text-red-500">**{leverage}**</span>
                  </p>
                  <p className="text-gray-400">- India, -, -, -</p>
                  <p className="text-gray-400">
                    0000000000 MetaQuotes ID: **{metaQuotesId}**
                  </p>
                  <p className="text-red-500 underline">{email}</p>
                  <p className="text-gray-400">
                    Registered: **{registered}** Last access: **{lastAccess}**
                    Last Address: **{lastAddress}**
                  </p>
                </div>
                <div className="border border-gray-300 rounded-sm h-2/3">
                  {/* HEADER */}
                  <div className="flex text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
                    <span className="w-2/12 px-2">Symbol</span>
                    <span className="w-1/12 px-2">Type</span>
                    <span className="w-1/12 px-2">Volume</span>
                    <span className="w-1/12 px-2">Price</span>
                    <span className="w-1/12 px-2">S / L</span>
                    <span className="w-1/12 px-2">T / P</span>
                    <span className="w-1/12 px-2">Price</span>
                    <span className="w-1/12 px-2 text-right">Swap</span>
                    <span className="w-2/12 px-2 text-right">Profit</span>
                  </div>

                  {/* ROW 1 — SELECTED */}
                  <div
                    className="flex text-sm text-gray-100 py-1 border-b border-gray-700 cursor-pointer"
                    onDoubleClick={() => setActiveTab("Trade")}
                  >
                    <span className="w-2/12 px-2">usoil.ffx</span>
                    <span className="w-1/12 px-2">buy</span>
                    <span className="w-1/12 px-2">0.01</span>
                    <span className="w-1/12 px-2">59.259</span>
                    <span className="w-1/12 px-2">0.000</span>
                    <span className="w-1/12 px-2">6100.000</span>
                    <span className="w-1/12 px-2">57.991</span>
                    <span className="w-1/12 px-2 text-right">0.00</span>
                    <span className="w-2/12 px-2 text-right">-1.27</span>
                  </div>

                  {/* ROW 2 — SELECTED */}
                  <div
                    className="flex text-sm text-gray-100 bg-[#3c3c3c] py-1 border-b border-gray-700 cursor-pointer"
                    onDoubleClick={() => setActiveTab("Trade")}
                  >
                    <span className="w-2/12 px-2">xauusd.e</span>
                    <span className="w-1/12 px-2">buy</span>
                    <span className="w-1/12 px-2">0.01</span>
                    <span className="w-1/12 px-2">4052.64</span>
                    <span className="w-1/12 px-2">0.00</span>
                    <span className="w-1/12 px-2">4080.00</span>
                    <span className="w-1/12 px-2">4065.62</span>
                    <span className="w-1/12 px-2 text-right">0.00</span>
                    <span className="w-2/12 px-2 text-right">12.98</span>
                  </div>

                  {/* BALANCE / EQUITY BAR */}
                  <div className="flex text-sm text-gray-200 bg-gray-500/50 py-2 ">
                    <span className="w-8/12 px-2 font-bold">
                      Balance:&nbsp;
                      <span className="text-white font-normal">819.47 USD</span>
                      &nbsp;&nbsp; Equity:&nbsp;
                      <span className="text-white font-normal">831.18</span>
                      &nbsp;&nbsp; Margin:&nbsp;
                      <span className="text-white font-normal">10.41</span>
                      &nbsp;&nbsp; Free Margin:&nbsp;
                      <span className="text-white font-normal">820.77</span>
                    </span>

                    <span className="ml-8 px-2">0.00</span>
                    <span className="w-2/12 px-2 text-right">11.71</span>
                  </div>

                  {/* MARGIN LEVEL ROW */}
                  <div className="flex text-sm text-gray-300 bg-gray-500/50 py-2 ">
                    <span className="px-2 font-bold">
                      Margin Level:&nbsp;
                      <span className="text-gray-100">7 984.44 %</span>
                    </span>
                  </div>

                  {/* EMPTY SPACE */}
                  <div className="text-gray-400 text-center py-8"></div>
                </div>
              </>
            )}
            {/* --- Exposure Content --- */}
            {activeTab === "Exposure" && (
              <>
                <div className="border border-gray-700 rounded-sm h-full flex flex-col relative">
                  {/* HEADER */}
                  <div className="flex text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
                    <span className="w-2/12 px-2">Asset</span>
                    <span className="w-2/12 px-2">Volume</span>
                    <span className="w-2/12 px-2">Rate</span>
                    <span className="w-2/12 px-2">USD</span>
                    <span className="w-2/12 px-2">Graph</span>
                    <span className="w-2/12 px-2 text-right">
                      Long Positions
                    </span>
                  </div>

                  {/* ROWS */}
                  <div className="flex flex-col">
                    {/* Row 1: USD */}
                    <div className="flex items-center text-sm text-gray-200 bg-[#3c3c3c] border-b border-gray-700 py-2">
                      <span className="w-2/12 px-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-sm bg-yellow-700 text-yellow-100 text-xs">
                          ＄
                        </span>
                        USD
                      </span>

                      <span className="w-2/12 px-2">322.79136K</span>
                      <span className="w-2/12 px-2">1.00000</span>
                      <span className="w-2/12 px-2">806.98</span>

                      {/* Graph */}
                      <span className="w-2/12 px-2">
                        <div className="w-full h-3 bg-gray-800 rounded-sm relative">
                          <div
                            className="absolute left-0 top-0 h-3 rounded-sm"
                            style={{
                              width: "85%",
                              background:
                                "linear-gradient(90deg,#3b82f6,#2563eb)",
                            }}
                          />
                        </div>
                      </span>

                      {/* Long Positions column intentionally left empty for rows (pie will cover all rows) */}
                      <span className="w-2/12 px-2 text-right"></span>
                    </div>

                    {/* Row 2: USOil.ffx */}
                    <div className="flex items-center text-sm text-gray-200 bg-[#2c2c2c] border-b border-gray-700 py-2">
                      <span className="w-2/12 px-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-sm bg-orange-700 text-orange-100 text-xs">
                          ⛽
                        </span>
                        USOil.ffx
                      </span>

                      <span className="w-2/12 px-2">0.01</span>
                      <span className="w-2/12 px-2">1.000</span>
                      <span className="w-2/12 px-2">0.28</span>

                      {/* Graph */}
                      <span className="w-2/12 px-2">
                        <div className="w-full h-3 bg-gray-800 rounded-sm relative">
                          <div
                            className="absolute left-0 top-0 h-3 rounded-sm"
                            style={{
                              width: "8%",
                              background:
                                "linear-gradient(90deg,#06b6d4,#0891b2)",
                            }}
                          />
                        </div>
                      </span>

                      <span className="w-2/12 px-2 text-right"></span>
                    </div>

                    {/* Row 3: XAU */}
                    <div className="flex items-center text-sm text-gray-200 bg-[#3c3c3c] border-b border-gray-700 py-2">
                      <span className="w-2/12 px-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-sm bg-yellow-800 text-yellow-100 text-xs">
                          ◎
                        </span>
                        XAU
                      </span>

                      <span className="w-2/12 px-2">1</span>
                      <span className="w-2/12 px-2">4052.64000</span>
                      <span className="w-2/12 px-2">10.13</span>

                      {/* Graph */}
                      <span className="w-2/12 px-2">
                        <div className="w-full h-3 bg-gray-800 rounded-sm relative">
                          <div
                            className="absolute left-0 top-0 h-3 rounded-sm"
                            style={{
                              width: "30%",
                              background:
                                "linear-gradient(90deg,#f97316,#ef4444)",
                            }}
                          />
                        </div>
                      </span>

                      <span className="w-2/12 px-2 text-right"></span>
                    </div>
                  </div>

                  {/* SINGLE PIE CHART covering all three rows (placed inside the Long Positions column) */}
                  {/* using the uploaded screenshot image as the pie — local path provided */}
                  <div
                    className="absolute"
                    style={{
                      /* position the pie inside the Long Positions column area and cover the three rows */
                      right: "-6px" /* small inset from right border */,
                      top: "44px" /* below the header (approx header height) */,
                      height:
                        "120px" /* covers three rows (adjust if row height differs) */,
                      width: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents:
                        "none" /* so it doesn't block interactions */,
                    }}
                  >
                    {/* You can keep the SVG pie or use your uploaded image — both shown here (SVG commented out) */}

                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 32 32"
                      className="block"
                    >
                      <circle r="16" cx="16" cy="16" fill="#2563eb" />
                      <path
                        d="M16 16 L 30 16 A 14 14 0 0 0 28 4 z"
                        fill="#ef4444"
                      />
                      <circle
                        r="14"
                        cx="16"
                        cy="16"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="0.5"
                      />
                    </svg>

                    {/* using the uploaded screenshot image as texture for the pie (local file path) */}
                    {/* <img src="/mnt/data/3ccb32f4-b689-49f7-a7a2-15cc9cfa647e.png" alt="pie" style={{ width: "96px", height: "96px", objectFit: "cover", borderRadius: "9999px" }} /> */}
                  </div>

                  {/* BALANCE / EQUITY / MARGIN ROW */}
                  <div className="flex text-sm text-gray-200 bg-gray-500/50 py-2 ">
                    <span className="w-10/12 px-2 font-bold">
                      • Balance:{" "}
                      <span className="text-white font-normal">
                        {balance} USD
                      </span>
                      &nbsp; Equity:{" "}
                      <span className="text-white font-normal">{equity}</span>
                      &nbsp; Margin:{" "}
                      <span className="text-white font-normal">10.41</span>
                      &nbsp; Free Margin:{" "}
                      <span className="text-white font-normal">
                        {freeMargin}
                      </span>
                    </span>

                    <span className="w-2/12 px-2 text-right"></span>
                  </div>

                  {/* MARGIN LEVEL */}
                  <div className="flex items-center text-sm text-gray-300 bg-gray-500/50 pl-3">
                    <span className="px-2 font-bold">
                      Margin Level:{" "}
                      <span className="text-gray-100">7 949.28 %</span>
                    </span>
                  </div>

                  {/* EMPTY SPACE */}
                  <div className="flex-grow text-gray-400 text-center py-8"></div>
                </div>
              </>
            )}
            {/* --- Personal Content --- */}
            {activeTab === "Personal" && (
              <div className="px-1 space-y-3">
                {/* NAME */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Name:
                  </label>
                  <input
                    className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[688px] px-2 py-1"
                    value={firstName}
                    readOnly
                  />
                </div>

                {/* LAST + MIDDLE */}
                <div className="grid grid-cols-[120px_260px_133px_260px] items-center gap-4">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Last name:
                  </label>
                  <input
                    className="bg-[#2b2b2b] text-gray-100 border border-gray-300 px-2 py-1"
                    value={lastName}
                    readOnly
                  />

                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Middle name:
                  </label>
                  <input
                    className="bg-[#2b2b2b] text-gray-100 border border-gray-300 px-2 py-1"
                    value={middleName}
                    readOnly
                  />
                </div>

                {/* COMPANY */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Company:
                  </label>
                  <input
                    className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[688px] px-2 py-1"
                    value={company}
                    readOnly
                  />
                </div>

                {/* REGISTERED */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-4 relative">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Registered:
                  </label>

                  <div className="relative w-[688px]">
                    <input
                      className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-full px-2 py-1 pr-8"
                      value={registered}
                      readOnly
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                      ▾
                    </span>
                  </div>
                </div>

                {/* LANGUAGE / STATUS BLOCK */}
                <div className="grid grid-cols-2 gap-">
                  {/* LEFT SIDE */}
                  <div className="space-y-3">
                    {/* LANGUAGE */}
                    <div className="grid grid-cols-[120px_200px] items-center gap-4 relative">
                      <label className="text-xs font-medium text-gray-400 text-right pr-4">
                        Language:
                      </label>
                      <div className="relative">
                        <select className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[260px] px-2 py-1 appearance-none">
                          <option>-</option>
                        </select>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                          ▾
                        </span>
                      </div>
                    </div>

                    {/* ID NUMBER */}
                    <div className="grid grid-cols-[120px_200px] items-center gap-4">
                      <label className="text-xs font-medium text-gray-400 text-right pr-4">
                        ID number:
                      </label>
                      <input
                        className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[260px] px-2 py-1"
                        value={idNumber}
                        readOnly
                      />
                    </div>

                    {/* METAQUOTES */}
                    <div className="grid grid-cols-[120px_200px] items-center gap-4">
                      <label className="text-xs font-medium text-gray-400 text-right pr-4">
                        MetaQuotes ID:
                      </label>
                      <input
                        className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[260px] px-2 py-1"
                        value={metaQuotesId}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="space-y-3">
                    {/* STATUS */}
                    <div className="grid grid-cols-[120px_260px] items-center gap-4 relative">
                      <label className="text-xs font-medium text-gray-400 text-right pr-4">
                        Status:
                      </label>
                      <div className="relative">
                        <select className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[260px] px-2 py-1 appearance-none">
                          <option>-</option>
                        </select>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                          ▾
                        </span>
                      </div>
                    </div>

                    {/* LEAD CAMPAIGN */}
                    <div className="grid grid-cols-[120px_260px] items-center gap-4">
                      <label className="text-xs font-medium text-gray-400 text-right pr-4">
                        Lead campaign:
                      </label>
                      <input
                        className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[260px] px-2 py-1"
                        value={leadCampaign}
                        readOnly
                      />
                    </div>

                    {/* LEAD SOURCE */}
                    <div className="grid grid-cols-[120px_260px] items-center gap-4">
                      <label className="text-xs font-medium text-gray-400 text-right pr-4">
                        Lead source:
                      </label>
                      <input
                        className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[260px] px-2 py-1"
                        value={leadSource}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Email:
                  </label>
                  <input
                    className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[688px] px-2 py-1"
                    value={email}
                    readOnly
                  />
                </div>

                {/* PHONE */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Phone:
                  </label>
                  <input
                    className="bg-[#5a1f24] text-gray-100 border border-red-600 w-[260px] px-2 py-1"
                    value={phone}
                    readOnly
                  />
                </div>

                {/* COUNTRY + STATE */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="grid grid-cols-[120px_260px] items-center gap-4 relative">
                    <label className="text-xs font-medium text-gray-400 text-right pr-4">
                      Country:
                    </label>
                    <div className="relative">
                      <select className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[260px] px-2 py-1 appearance-none">
                        <option>India</option>
                      </select>
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                        ▾
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-[100px_200px] items-center gap-4">
                    <label className="text-xs font-medium text-gray-400 text-right pr-4">
                      State:
                    </label>
                    <input
                      className="bg-[#2b2b2b] text-gray-100 border border-gray-300 px-2 py-1 w-[260px]"
                      value={state}
                      readOnly
                    />
                  </div>
                </div>

                {/* CITY + ZIP */}
                <div className="grid grid-cols-2">
                  <div className="grid grid-cols-[120px_260px] items-center gap-4">
                    <label className="text-xs font-medium text-gray-400 text-right pr-4">
                      City:
                    </label>
                    <input
                      className="bg-[#2b2b2b] text-gray-100 border border-gray-300 px-2 py-1 w-[260px]"
                      value={city}
                      readOnly
                    />
                  </div>

                  <div className="grid grid-cols-[118px_260px] items-center gap-4">
                    <label className="text-xs font-medium text-gray-400 text-right pr-4">
                      Zip code:
                    </label>
                    <input
                      className="bg-[#2b2b2b] text-gray-100 border border-gray-300 px-2 py-1 w-[260px]"
                      value={zipCode}
                      readOnly
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Address:
                  </label>
                  <input
                    className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[688px] px-2 py-1"
                    value={address}
                    readOnly
                  />
                </div>

                {/* COMMENT */}
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-xs font-medium text-gray-400 text-right pr-4">
                    Comment:
                  </label>
                  <input
                    className="bg-[#2b2b2b] text-gray-100 border border-gray-300 w-[688px] px-2 py-1"
                    value={comment}
                    readOnly
                  />
                </div>
              </div>
            )}
            {/* --- Account Content --- */}
            {activeTab === "Account" && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 items-end">
                  <div className="flex items-center gap-6">
                    <label htmlFor="group" className={labelStyle}>
                      Group:
                    </label>
                    <div className="relative">
                      <select id="group" className={inputStyle} value={group}>
                        <option value="OXO_B\Standard">{group}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        &#9662;
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <label htmlFor="color" className={labelStyle}>
                      Color:
                    </label>
                    <div className="relative">
                      <select id="color" className={inputStyle} value={color}>
                        <option value="None">None</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        &#9662;
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <label htmlFor="leverage" className={labelStyle}>
                      Leverage:
                    </label>
                    <input
                      type="text"
                      id="leverage"
                      className={inputStyle}
                      value={leverage}
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="bankAccount"
                      className="block text-xs font-medium  text-gray-400 w-26"
                    >
                      Bank account:
                    </label>
                    <input
                      type="text"
                      id="bankAccount"
                      className={inputStyle}
                      value={bankAccount}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="agentAccount"
                      className="block text-xs font-medium  text-gray-400 w-30"
                    >
                      Agent account:
                    </label>
                    <input
                      type="text"
                      id="agentAccount"
                      className={inputStyle}
                      value={agentAccount}
                      readOnly
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center">
                    <input
                      id="enableThisAccount"
                      type="checkbox"
                      checked={enableAccount}
                      className={checkboxStyle}
                      readOnly
                    />
                    <label
                      htmlFor="enableThisAccount"
                      className="ml-2 text-xs font-medium text-gray-200 cursor-pointer"
                    >
                      Enable this account
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="enablePasswordChange"
                      type="checkbox"
                      checked={enablePasswordChange}
                      className={checkboxStyle}
                      readOnly
                    />
                    <label
                      htmlFor="enablePasswordChange"
                      className="ml-2 text-xs font-medium text-gray-200 cursor-pointer"
                    >
                      Enable password change
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="enableOneTimePassword"
                      type="checkbox"
                      checked={enableOneTimePassword}
                      className={checkboxStyle}
                      readOnly
                    />
                    <label
                      htmlFor="enableOneTimePassword"
                      className="ml-2 text-xs font-medium text-gray-200 cursor-pointer"
                    >
                      Enable one-time password
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="changePasswordNextLogin"
                      type="checkbox"
                      checked={changePasswordNextLogin}
                      className={checkboxStyle}
                      readOnly
                    />
                    <label
                      htmlFor="changePasswordNextLogin"
                      className="ml-2 text-xs font-medium text-gray-200 cursor-pointer"
                    >
                      Change password at next login
                    </label>
                  </div>
                </div>
                <div className="pt-4 ">
                  <div className="flex gap-8">
                    <div className="flex flex-col justify-between h-[250px]">
                      <p className="text-gray-400 text-xs w-26 mb-2">
                        Trade accounts:
                      </p>
                      <div className="flex flex-col gap-4">
                        <button className="px-4 py-1 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500 text-sm h-full">
                          Add
                        </button>
                        <button className="px-4 py-1 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500 text-sm h-full">
                          Edit
                        </button>
                        <button className="px-4 py-1 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500 text-sm h-full">
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-300 rounded-sm w-2xl">
                      <div className="grid grid-cols-2 text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
                        <span className="px-4">Gateway ID</span>
                        <span className="px-4">Account</span>
                      </div>
                      <div className="text-gray-400 text-center py-12">
                        {/* Trade account rows would go here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* --- Limits Content --- */}
            {activeTab === "Limits" && (
              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="showToRegularManagers"
                        type="checkbox"
                        checked={showToRegularManagers}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="showToRegularManagers"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Show to regular managers
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="includeInServerReports"
                        type="checkbox"
                        checked={includeInServerReports}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="includeInServerReports"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Include in server reports
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="enableDailyReports"
                        type="checkbox"
                        checked={enableDailyReports}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="enableDailyReports"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Enable daily reports
                      </label>
                    </div>
                    <div className="flex items-center pt-4">
                      <input
                        id="enableApiConnections"
                        type="checkbox"
                        checked={enableApiConnections}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="enableApiConnections"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Enable API connections
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="enableSponsoredVps"
                        type="checkbox"
                        checked={enableSponsoredVps}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="enableSponsoredVps"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Enable sponsored VPS hosting
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="allowSubscriptionData"
                        type="checkbox"
                        checked={allowSubscriptionData}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="allowSubscriptionData"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Allow access to subscription data via data feeds
                      </label>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="enableTrading"
                        type="checkbox"
                        checked={enableTrading}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="enableTrading"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Enable trading
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="enableAlgoTrading"
                        type="checkbox"
                        checked={enableAlgoTrading}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="enableAlgoTrading"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Enable algo trading by Expert Advisors
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="enableTrailingStops"
                        type="checkbox"
                        checked={enableTrailingStops}
                        className={checkboxStyle}
                        readOnly
                      />
                      <label
                        htmlFor="enableTrailingStops"
                        className="ml-2 text-sm font-medium text-gray-200 cursor-pointer"
                      >
                        Enable trailing stops
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-6 max-w-lg">
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-400 w-64">
                      Limit total value of positions:
                    </label>
                    <div className="relative flex-grow">
                      <select className={inputStyle} value={limitTotalValue}>
                        <option value="Default">Default</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        &#9662;
                      </div>
                    </div>
                    <span className="text-gray-200 text-sm">USD</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-400 w-64">
                      Limit number of active orders:
                    </label>
                    <div className="relative flex-grow">
                      <select
                        className={inputStyle}
                        value={limitNumberOfOrders}
                      >
                        <option value="Default">Default</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        &#9662;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* --- Profile Content --- */}
            {activeTab === "Profile" && (
              <div className="flex justify-center h-full items-start pt-10">
                <div className="w-full max-w-md text-center space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-200">
                    MetaQuotes Support Center
                  </h2>
                  <p className="text-blue-400 text-sm">
                    https://support.metaquotes.net — Authorization
                  </p>
                  <p className="text-gray-200 mt-6 max-w-sm mx-auto">
                    MetaQuotes Technical Support Center features unique
                    information and provides direct access to assistance from
                    our support team
                  </p>
                  <p className="text-gray-400 italic">
                    Only available to authorized users
                  </p>
                  <form className="space-y-6 pt-4">
                    <div className="relative">
                      <i className={mqIconStyle}>&#9993;</i>
                      <input
                        type="email"
                        placeholder="Your email"
                        className={mqInputStyle}
                        defaultValue={supportCenterEmail}
                      />
                    </div>
                    <div className="relative">
                      <i className={mqIconStyle}>&#128274;</i>
                      <input
                        type="password"
                        placeholder="Support Center password"
                        className={mqInputStyle}
                        defaultValue={supportCenterPassword}
                      />
                    </div>
                    <div className="text-right">
                      <a
                        href="#"
                        className="text-blue-400 text-sm hover:underline"
                      >
                        Password recovery
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-[#00e676] text-gray-900 font-bold rounded-sm hover:bg-[#00c968] transition-colors"
                    >
                      Enter MetaQuotes Support Center
                    </button>
                  </form>
                  <div className="pt-4 text-sm">
                    <p className="text-gray-400">
                      Don't have a Support Center account?{" "}
                      <a href="#" className="text-blue-400 hover:underline">
                        Register
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 pt-2">
                    <span className="text-blue-400 text-2xl">&#9658;</span>
                    <span className="text-blue-400 text-sm hover:underline cursor-pointer">
                      Official Support Channel
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* --- Subscriptions Content --- */}
            {activeTab === "Subscriptions" && (
              <div className="border border-gray-700 rounded-sm h-full flex flex-col">
                <div className="grid grid-cols-7 text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
                  <span className="px-4">ID</span>
                  <span className="px-4">Subscription</span>
                  <span className="px-4">Status</span>
                  <span className="px-4 w-36">Subscription time</span>
                  <span className="px-4">Renewal time</span>
                  <span className="px-4">Expiration time</span>
                  <span className="px-4">Price</span>
                </div>
                <div className="flex-grow text-gray-400 text-center py-12">
                  {/* No subscriptions listed */}
                </div>
              </div>
            )}

            {/* --- Payments Content --- */}
            {activeTab === "Payments" && (
              <div className="flex flex-col h-full space-y-4">
                {/* Top Table: Active Payments/Requests */}
                <div className="border border-gray-300 rounded-sm flex-grow min-h-[50%] flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
                    <span className="px-4">ID</span>
                    <span className="px-4">Action</span>
                    <span className="px-4">State</span>
                    <span className="px-4">Created</span>
                    <span className="px-4">Done</span>
                    <span className="px-4">Wallet Name</span>
                    <span className="px-4">User Amo...</span>
                    <span className="px-4">User C...</span>
                  </div>
                  {/* Body */}
                  <div className="flex-grow text-gray-400  text-left py-2 px-4 italic text-sm">
                    <p className="bg-[#3c3c3c]"> No active payments</p>
                  </div>
                </div>

                {/* Date Filter and Request Button */}
                <div className="flex items-center justify-end space-x-2 p-2">
                  <div className="relative">
                    <select className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 pr-8">
                      <option>Today</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                      &#9662;
                    </div>
                  </div>

                  {/* Date Picker 1 */}
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="2025.11.21"
                      className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 pr-8 w-24"
                    />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                      &#9662;
                    </span>
                  </div>

                  <span className="text-gray-400">-</span>

                  {/* Date Picker 2 */}
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="2025.11.21"
                      className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 pr-8 w-24"
                    />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                      &#9662;
                    </span>
                  </div>

                  <button className="px-4 py-1.5 text-sm text-white rounded-sm border border-gray-600">
                    Request
                  </button>
                </div>

                {/* Bottom Table: Saved Cards/Payment Methods (shorter) */}
                <div className="border border-gray-300 rounded-sm flex-grow min-h-[25%] flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
                    <span className="px-4">ID</span>
                    <span className="px-4">Gateway</span>
                    <span className="px-4">Type</span>
                    <span className="px-4">Wallet Login</span>
                    <span className="px-4">Curr...</span>
                    <span className="px-4">Card Number</span>
                    <span className="px-4">Card Expira...</span>
                    <span className="px-4">Cardholder Name</span>
                  </div>
                  {/* Body - Placeholder for saved cards */}
                  <div className="flex-grow">
                    {/* Saved card rows would go here */}
                  </div>
                </div>
              </div>
            )}

            {/* --- Balance Content --- */}
            {activeTab === "Balance" && (
              <div className="flex flex-col h-full space-y-4">
                {/* Top Section: Operation Input */}
                <div className="space-y-4 border-b border-gray-700 pb-4">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-1/4 flex items-center gap-2">
                      <label htmlFor="operation" className={labelStyle}>
                        Operation:
                      </label>
                      <div className="relative">
                        <select
                          id="operation"
                          className={selectStyle("full")}
                          defaultValue="Balance"
                        >
                          <option>Balance</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                          &#9662;
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 flex items-center gap-4">
                      <label htmlFor="amount" className={labelStyle}>
                        Amount:
                      </label>
                      <div className="flex items-center space-x-1">
                        <input
                          type="text"
                          id="amount"
                          className={inputStyle}
                          placeholder="..."
                        />
                        <span className="text-gray-400 text-sm">USD</span>
                      </div>
                    </div>
                    <div className="w-2/4 flex items-center gap-2">
                      <label htmlFor="comment" className={labelStyle}>
                        Comment:
                      </label>
                      <div className="relative">
                        <select
                          id="comment"
                          className={selectStyle("full")}
                          defaultValue="... put your comment here ..."
                        >
                          <option disabled>
                            ... put your comment here ...
                          </option>
                          {/* Other comments would go here */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                          &#9662;
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-6">
                    <div className="flex items-center">
                      <input
                        id="checkFreeMargin"
                        type="checkbox"
                        className={checkboxStyle}
                      />
                      <label
                        htmlFor="checkFreeMargin"
                        className="ml-2 text-xs font-medium text-gray-200 cursor-pointer"
                      >
                        Conduct balance operation without checking the free
                        margin and the current balance on the account
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        className="px-6 py-1 text-xs text-gray-200 rounded bg-blue-600 hover:bg-blue-700 border border-blue-600 disabled:opacity-50"
                        disabled
                      >
                        Deposit
                      </button>
                      <button
                        className="px-6 py-1 text-xs text-gray-200 rounded bg-red-600 hover:bg-red-700 border border-red-600 disabled:opacity-50"
                        disabled
                      >
                        Withdrawal
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Deal History Table */}
                <div className="border border-gray-300 rounded-sm flex-grow flex flex-col relative">
      {/* Header */}
      <div className="grid grid-cols-4 text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
        <span className="px-4">Time</span>
        <span className="px-4">Deal</span>
        <span className="px-4">Type</span>
        <span className="px-4">Amount</span>
      </div>

      {/* Body container with scroll if many rows */}
      <div className="overflow-y-auto">
        {/* Deal rows */}
        {deals.map((d, idx) => (
          <div
            key={d.id}
            onDoubleClick={() => onRowDoubleClick(d)}
            className={`flex items-center text-sm text-gray-200 ${
              idx % 2 === 0 ? "bg-[#3c3c3c]" : "bg-[#2c2c2c]"
            } border-b border-gray-700 py-2 px-2 cursor-pointer`}
            title="Double-click to open details"
            role="button"
          >
            {/* Time — left column */}
            <div className="w-1/4 px-4">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="inline-block text-gray-400">⊕</span>
                <div className="leading-4">
                  <div className="text-[11px]">{d.time}</div>
                </div>
              </div>
            </div>

            {/* Deal */}
            <div className="w-1/4 px-4">
              <div className="text-sm text-gray-100">{d.deal}</div>
            </div>

            {/* Type */}
            <div className="w-1/4 px-4">
              <div className="text-sm text-gray-100">{d.type}</div>
            </div>

            {/* Amount (right aligned) */}
            <div className="w-1/4 px-4 text-right">
              <div className="text-sm text-gray-100">{d.amount}</div>
            </div>
          </div>
        ))}

        {/* Balance Summary Row */}
        <div className="flex text-sm text-gray-200 bg-[#3c3c3c] py-2 border-b border-gray-700 px-2">
          <span className="px-4 font-bold">
            • Balance:{" "}
            <span className="text-white font-normal">{balance} USD</span> | Equity:{" "}
            <span className="text-white font-normal">{equity}</span> | Free:{" "}
            <span className="text-white font-normal">{freeMargin}</span> /{" "}
            <span className="text-white font-normal">297 128.57 %</span>
          </span>
        </div>

        {/* filler empty area (matches screenshot) */}
        <div className="h-[320px] bg-[#2f2f2f]" />
      </div>

      {/* Footer / Filter area */}
      <div className="flex items-center justify-end space-x-2 p-2 border-t border-gray-700">
        <div className="relative">
          <select className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-xs rounded-sm p-1.5 pr-8">
            <option>Last 3 months</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            &#9662;
          </div>
        </div>

        {/* Date Picker 1 */}
        <div className="relative">
          <input
            type="text"
            defaultValue="2025.09.01"
            className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-xs rounded-sm p-1.5 pr-8 w-24"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            &#9662;
          </span>
        </div>

        <span className="text-gray-400">-</span>

        {/* Date Picker 2 */}
        <div className="relative">
          <input
            type="text"
            defaultValue="2025.11.21"
            className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-xs rounded-sm p-1.5 pr-8 w-24"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            &#9662;
          </span>
        </div>

        <button className="px-4 py-1.5 text-xs border border-gray-600 text-white rounded-sm">
          Request
        </button>
      </div>
    </div>
              </div>
            )}

            {/* --- Trade Content --- */}
            {activeTab === "Trade" && (
              <div className="flex h-full space-x-4 p-0">
                {/* Left Side: Chart Area */}
                <div className="w-3/5 border border-gray-700  relative flex flex-col overflow-hidden">
                  {/* Symbol label on top left of chart */}
                  <div className="absolute top-2 left-2 text-gray-200 text-sm bg-black bg-opacity-50 p-1 rounded-sm z-20">
                    EURUSD, M1
                  </div>
                  {/* Price Axis */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-12 text-xs text-gray-400 bg-[#2c2c2c] border-l border-gray-700 flex flex-col justify-around py-2 z-20"
                    style={{ height: "calc(100% - 24px)" }}
                  >
                    <div className="text-right pr-1">1.15475</div>
                    <div className="text-right pr-1">1.15470</div>
                    <div className="text-right pr-1 font-bold bg-blue-500 text-white py-1">
                      1.15462
                    </div>
                    <div className="text-right pr-1">1.15460</div>
                    <div className="text-right pr-1">1.15455</div>
                    <div className="text-right pr-1">1.15450</div>
                    <div className="text-right pr-1">1.15445</div>
                  </div>
                  {/* Time Axis */}
                  <div className="absolute bottom-0 left-0 right-12 h-6 text-xs text-gray-400 bg-[#2c2c2c] border-t border-gray-700 flex justify-around items-center px-2 z-20">
                    <span>10:49:00</span>
                    <span>10:50:00</span>
                    <span>10:51:00</span>
                    <span>10:52:00</span>
                    <span>10:53:00</span>
                    <span>10:54:00</span>
                  </div>

                  {/* Simulated Candlestick Chart Area */}
                  <div
                    className="flex-grow w-full h-full relative overflow-hidden flex justify-end pb-6 pr-12 space-x-1"
                    style={{ alignItems: "flex-end" }}
                  >
                    {/* Horizontal Grid Lines (subtle gray lines) */}
                    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute left-0 right-12 border-t border-gray-800"
                          style={{ top: `${i * 10}%` }}
                        ></div>
                      ))}
                    </div>

                    {/* Render Dummy Candles */}
                    {dummyCandles.map((candle, index) => (
                      <Candlestick
                        key={index}
                        color={candle.color}
                        height={candle.height}
                        offset={candle.offset}
                        wickHeight={candle.wickHeight}
                        isCurrent={candle.isCurrent || false}
                      />
                    ))}

                    {/* The yellow line for current price is included in the last candle component */}
                  </div>
                </div>

                {/* Right Side: Order Panel */}
                <div className="w-2/5 space-y-3 pt-2">
                  {/* Symbol and Type Selects */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <label htmlFor="symbol" className={labelStyle}>
                          Symbol:
                        </label>
                        <div className="relative">
                          <select
                            id="symbol"
                            className={selectStyle("full")}
                            defaultValue="EURUSD"
                          >
                            <option>EURUSD, Euro vs US Dollar</option>
                            {/* Other symbols */}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            &#9662;
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <label htmlFor="type" className={labelStyle}>
                          Type:
                        </label>
                        <div className="relative">
                          <select
                            id="type"
                            className={selectStyle("full")}
                            defaultValue="Market Order"
                          >
                            <option>Market Order</option>
                            {/* Other types */}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            &#9662;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Volume and Fill Policy */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-4">
                        <label htmlFor="volume" className={labelStyle}>
                          Volume:
                        </label>
                        <div className="flex items-center space-x-1">
                          <input
                            type="number"
                            id="volume"
                            className={inputStyle}
                            defaultValue="0.01"
                            min="0"
                          />
                          <span className="text-gray-400 text-sm w-16">
                            EUR
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <label htmlFor="fillPolicy" className={labelStyle}>
                        Fill Policy:
                      </label>
                      <div className="relative">
                        <select
                          id="fillPolicy"
                          className={selectStyle("full")}
                          defaultValue="Fill or Kill"
                        >
                          <option>Fill or Kill</option>
                          {/* Other policies */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                          &#9662;
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* At Price, Stop Loss, Take Profit */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 items-end">
                      <div>
                        <label htmlFor="atPrice" className={labelStyle}>
                          At Price:
                        </label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            id="atPrice"
                            className={inputStyle}
                            defaultValue="1.15450"
                          />
                          <button className="text-gray-400 hover:text-white">
                            &#x21bb;
                          </button>{" "}
                          {/* Refresh/Update icon */}
                          <div className="flex items-center">
                            <input
                              id="autoUpdate"
                              type="checkbox"
                              defaultChecked
                              className={checkboxStyle}
                            />
                            <label
                              htmlFor="autoUpdate"
                              className="ml-1 text-sm text-gray-200"
                            >
                              Auto
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="stopLoss" className={labelStyle}>
                          Stop Loss:
                        </label>
                        <input
                          type="number"
                          id="stopLoss"
                          className={inputStyle}
                          defaultValue="0.00000"
                        />
                      </div>
                      <div>
                        <label htmlFor="takeProfit" className={labelStyle}>
                          Take Profit:
                        </label>
                        <input
                          type="number"
                          id="takeProfit"
                          className={inputStyle}
                          defaultValue="0.00000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="pt-2 flex items-center gap-4">
                    <label htmlFor="commentTrade" className={labelStyle}>
                      Comment:
                    </label>
                    <input
                      type="text"
                      id="commentTrade"
                      className={inputStyle}
                    />
                  </div>

                  <hr className="border-gray-700 mt-6 mb-6" />

                  {/* Price Display */}
                  <div className="text-center">
                    <p className="text-3xl font-mono">
                      <span className="text-red-500">1.15462</span> /{" "}
                      <span className="text-blue-500">1.15462</span>
                    </p>
                  </div>

                  {/* Trade Buttons */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <button className="p-3 text-lg bg-red-700 text-white rounded-sm hover:bg-red-600">
                      Sell at 1.15462
                    </button>
                    <button className="p-3 text-lg bg-blue-700 text-white rounded-sm hover:bg-blue-600">
                      Buy at 1.15462
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- History Content --- */}
            {activeTab === "History" && (
              <div className="flex flex-col h-full space-y-4">
                {/* History Table */}
                <div className="border border-gray-300 rounded-sm flex-grow flex flex-col">
                  {/* Header */}
                  <div className="grid grid-cols-10 text-xs font-medium text-gray-400 bg-[#2c2c2c] border-b border-gray-700 py-2">
                    <span className="px-4">Time</span>
                    <span className="px-4">Order</span>
                    <span className="px-4">Symbol</span>
                    <span className="px-4">Type</span>
                    <span className="px-4">Volu...</span>
                    <span className="px-4">Price</span>
                    <span className="px-4">S / L</span>
                    <span className="px-4">T / P</span>
                    <span className="px-4 w-30">Close Time</span>
                    <span className="px-4">State</span>
                  </div>

                  {/* Body - Placeholder for history deals */}
                  <div className="flex-grow">
                    {/* History rows would go here */}
                  </div>
                </div>

                {/* Footer/Filter */}
                <div className="flex items-center justify-end space-x-2 p-2 border-t border-gray-700">
                  <div className="relative">
                    <select className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 pr-8">
                      <option>Last month</option>
                      {/* Other time periods */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                      &#9662;
                    </div>
                  </div>

                  {/* Date Picker 1 */}
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="2025.11.01"
                      className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 pr-8 w-24"
                    />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                      &#9662;
                    </span>
                  </div>

                  <span className="text-gray-400">-</span>

                  {/* Date Picker 2 */}
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="2025.11.21"
                      className="bg-[#3c3c3c] border border-gray-600 text-gray-100 text-sm rounded-sm p-1.5 pr-8 w-24"
                    />
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                      &#9662;
                    </span>
                  </div>

                  <button className="px-4 py-1.5 text-sm  text-white rounded-sm  border border-gray-600">
                    Request
                  </button>
                </div>
              </div>
            )}

            {/* --- Security Content --- */}
            {activeTab === "Security" && (
              <div className="space-y-4  max-w-2xl mx-auto text-gray-100">
                {/* Master Password */}
                <div className="space-y-1">
                  <p className="text-sm">
                    **Master password** is used for full access to the trading
                    account
                  </p>
                  <div className="flex items-end space-x-2">
                    <input
                      type="password"
                      className={inputStyle}
                      defaultValue="********"
                    />
                    <button className="px-4 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-600 w-20">
                      Check
                    </button>
                    <button className="px-4  text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-600 w-20">
                      Change
                    </button>
                    <button className="px-4  text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-600 w-24">
                      Generate
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 pl-1">
                    minimum 8 characters
                  </p>
                </div>

                {/* Investor Password */}
                <div className="space-y-1">
                  <p className="text-sm">
                    **Investor password** is used for limited access to the
                    trading account in read-only mode
                  </p>
                  <div className="flex items-end space-x-2">
                    <input
                      type="password"
                      className={inputStyle}
                      defaultValue="********"
                    />
                    <button className="px-4 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-600 w-20">
                      Check
                    </button>
                    <button className="px-4 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-600 w-20">
                      Change
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 pl-1">
                    minimum 8 characters
                  </p>
                </div>

                {/* API Password */}
                <div className="space-y-1">
                  <p className="text-sm">
                    **API password** is used for access to the server using Web
                    API
                  </p>
                  <div className="flex items-end space-x-2">
                    <input
                      type="password"
                      className={inputStyle}
                      defaultValue="********"
                    />
                    <button className="px-4 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-600 w-20">
                      Check
                    </button>
                    <button className="px-4 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-600 w-20">
                      Change
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 pl-1">
                    minimum 8 characters
                  </p>
                </div>

                {/* Phone Password */}
                <div className="space-y-1">
                  <p className="text-sm">
                    **Phone password** allows to identify the account owner when
                    performing trade operations by phone
                  </p>
                  <div className="relative">
                    <input
                      type="password"
                      className={inputStyle}
                      defaultValue="****"
                    />
                    <p className="text-xs text-gray-400 pl-1 mt-1">
                      to view password set focus to field
                    </p>
                  </div>
                </div>

                {/* OTP Secret Key */}
                <div className="space-y-1">
                  <p className="text-sm">
                    **Shared secret key** in combination with the current
                    timestamp is used to generate one-time password
                  </p>
                  <p className="text-xs text-gray-400 pl-1">OTP secret key</p>
                  <input
                    type="text"
                    className={inputStyle}
                    defaultValue="... secret key ..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer/Action Buttons - consistent across tabs */}
          <div className="flex justify-between p-2 border-t border-gray-700 bg-[#2c2c2c]">
            <button
              onClick={() => setIsNewClientOpen(true)} // Open NewClientModal
              className="px-4 py-1 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500"
            >
              New Client
            </button>
            <div className="space-x-2">
              <button className="px-4 py-1 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500">
                Update
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500"
              >
                Cancel
              </button>
              <button className="px-4 py-1 text-sm text-gray-200 rounded hover:bg-gray-500 border border-gray-500">
                Help
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Client Modal (separate component) */}
      <NewClientModal
        open={isNewClientOpen}
        onClose={() => setIsNewClientOpen(false)}
      />

      {/* Group Config Modal (separate component) */}
      <GroupConfigModal
        open={isGroupConfigOpen}
        onClose={() => setIsGroupConfigOpen(false)}
        groupName={group}
      />

            {/* Use the external DealModal component */}
      <DealDetailsModal open={modalOpen} onClose={closeModal} row={selectedRow} />
    </>
  );
}
