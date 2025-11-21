import React, { useState } from "react";
// Import Heroicons
import {
  XMarkIcon,
  ServerStackIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  UsersIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  ShoppingCartIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  FolderIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  ClipboardDocumentListIcon,
  FilmIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

// Helper icons for sub-menus (no change)
const SubMenuIcons = {
  ClientsOrders: UserGroupIcon,
  Analytics: ChartBarIcon,
  Payments: CreditCardIcon,
  General: ArrowRightIcon,
};


// Define the full navigation structure (Removed the initialOpen flag from the objects)
const navItems = [
  // --- Servers ---
  {
    name: "Servers",
    icon: ServerStackIcon,
    isParent: true,
    children: [
      {
        name: "OXOMarkets-Live",
        icon: ServerStackIcon,
        isParent: true,
        children: [
          { name: "1818 - Crm OXO", icon: DocumentTextIcon },
        ],
      },
    ],
  },
  // --- Analytics ---
  {
    name: "Analytics",
    icon: ChartBarIcon,
    isParent: true,
    children: [
      { name: "Trading Accounts", icon: SubMenuIcons.Analytics },
      { name: "Online Users", icon: SubMenuIcons.Analytics },
      { name: "Open Positions", icon: SubMenuIcons.Analytics },
      { name: "Open Orders", icon: SubMenuIcons.Analytics },
      { name: "Advertising Campaigns", icon: SubMenuIcons.Analytics },
      { name: "By Country", icon: MapPinIcon },
    ],
  },
  // --- Server Reports ---
  { 
    name: "Server Reports", 
    icon: DocumentTextIcon, 
    isParent: true,
    children: [
      { name: "Accounts", icon: FolderIcon },
      { name: "Capital", icon: FolderIcon },
      { name: "Daily", icon: FolderIcon },
      { name: "EMIR", icon: FolderIcon },
      { name: "Funds", icon: FolderIcon },
      { name: "Gateways", icon: FolderIcon },
      { name: "NFA", icon: FolderIcon },
      { name: "Traders", icon: FolderIcon },
      { name: "Trades", icon: FolderIcon },
      { name: "Ultency", icon: FolderIcon },
    ]
  },
  // --- Clients & Orders (Active) ---
  {
    name: "Clients & Orders",
    icon: UserGroupIcon,
    active: true,
    isParent: true,
    children: [
      { name: "Online Users (5)", icon: SubMenuIcons.ClientsOrders },
      { name: "Clients (1)", icon: SubMenuIcons.ClientsOrders },
      { name: "Trading Accounts (154)", icon: SubMenuIcons.ClientsOrders },
      { name: "Positions (64)", icon: SubMenuIcons.ClientsOrders },
      { name: "Orders (4)", icon: SubMenuIcons.ClientsOrders },
    ],
  },
  // --- Payments ---
  {
    name: "Payments",
    icon: CreditCardIcon,
    isParent: true,
    children: [
      { name: "Processing", icon: SubMenuIcons.Payments },
      { name: "Active", icon: SubMenuIcons.Payments },
      { name: "History", icon: SubMenuIcons.Payments },
    ],
  },
  // --- Ultency Matching Engine ---
  {
    name: "Ultency Matching Engine",
    icon: CurrencyDollarIcon,
    isParent: true,
    children: [
        { name: "Templates", icon: ClipboardDocumentListIcon },
        { name: "Reporting", icon: ClipboardDocumentListIcon },
    ]
  },
  // --- Subscriptions ---
  {
    name: "Subscriptions",
    icon: ClockIcon,
    isParent: true,
    children: [
      { name: "Active", icon: ClockIcon },
      { name: "History", icon: ClockIcon },
      {
        name: "Configuration",
        icon: Cog6ToothIcon,
        isParent: true,
        children: [
          {
            name: "Market Data",
            icon: FolderIcon,
            isParent: true,
            children: [
              { name: "North America", icon: FolderIcon, isParent: true },
              { name: "South America", icon: FolderIcon, isParent: true },
              { name: "Europe", icon: FolderIcon, isParent: true },
              { name: "Middle East", icon: FolderIcon, isParent: true },
              { name: "Africa", icon: FolderIcon, isParent: true },
              { name: "Asia Pacific", icon: FolderIcon, isParent: true },
              { name: "Global", icon: MapPinIcon },
            ],
          },
          { name: "Services", icon: WrenchScrewdriverIcon },
        ],
      },
    ],
  },
  // --- Dealing ---
  { name: "Dealing", icon: ChartBarIcon },
  // --- Leverages ---
  { name: "Leverages", icon: UsersIcon },
  // --- Groups ---
  {
    name: "Groups (17)",
    icon: UsersIcon,
    isParent: true,
    children: [
      { name: "OXO_A (8)", icon: UsersIcon },
      { name: "OXO_B (9)", icon: UsersIcon },
    ],
  },
  // --- Plugins ---
  { name: "Plugins", icon: CubeIcon },
  // --- Mailbox ---
  { name: "Mailbox (1)", icon: EnvelopeIcon },
  
  // --- Support Center ---
  { 
    name: "Support Center", 
    icon: LifebuoyIcon, 
    isParent: true,
    children: [
      { name: "News", icon: DocumentTextIcon },
      { 
        name: "Articles", 
        icon: DocumentTextIcon, 
        isParent: true,
        children: [
          { name: "Analytics (14)", icon: DocumentTextIcon },
          { name: "Advertising (29)", icon: DocumentTextIcon },
          { name: "Platform Features (68)", icon: DocumentTextIcon },
          { name: "Video Tutorials (22)", icon: FilmIcon },
          { name: "How To (54)", icon: DocumentTextIcon },
          { name: "Broker Services (16)", icon: DocumentTextIcon },
          { name: "Trader Services (21)", icon: DocumentTextIcon },
          { name: "API / Integrations (22)", icon: DocumentTextIcon },
          { name: "Payments / Delivery (14)", icon: DocumentTextIcon },
        ]
      },
      { name: "Platform Documentation", icon: ClipboardDocumentListIcon },
      { name: "API Documentation", icon: ClipboardDocumentListIcon },
      { name: "Workshops", icon: AcademicCapIcon },
      { name: "Certification", icon: AcademicCapIcon },
      { name: "Service Desk", icon: LifebuoyIcon },
      { name: "Online Assistant", icon: UsersIcon },
      { name: "Search", icon: MagnifyingGlassIcon },
    ]
  },
  // --- App Store ---
  { 
    name: "App Store", 
    icon: ShoppingCartIcon, 
    isParent: true,
    children: [
      { name: "Platform (11)", icon: ShoppingBagIcon },
      { name: "Aggregation and Liquidity (63)", icon: ShoppingBagIcon },
      { name: "News and Data feeds (20)", icon: ShoppingBagIcon },
      { name: "Money Management (17)", icon: ShoppingBagIcon },
      { name: "Reporting (13)", icon: ShoppingBagIcon },
    ]
  },
];

/**
 * Recursive component to render nested menu items
 * @param {object} item - The navigation item object
 * @param {number} level - Current nesting level (for padding/indentation)
 */
const NavItem = ({ item, level = 0 }) => {
  const Icon = item.icon;
  const isActive = item.active;
  const hasChildren = item.children && item.children.length > 0;

  // *** KEY CHANGE: Always set initial state to false (closed) ***
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state
  const handleClick = () => {
    // Only toggle the state if the item is a parent
    if (item.isParent) {
      setIsOpen(!isOpen);
    }
    // Logic for leaf item clicks can be added here
  };
  
  // Base classes for item styling
  const navItemClasses = 
    `flex items-center gap-3 py-0.5 text-xs cursor-pointer transition-colors w-full ${
      isActive ? "bg-[#374151] text-white" : "hover:bg-gray-700"
    }`;
    
  // Indentation using Tailwind's 'pl-x' class
  const paddingStyle = {
    paddingLeft: `${12 + level * 16}px`, 
  };
  
  // Icon styling
  const iconBaseClasses = "w-5 h-5 text-blue-600 opacity-80";

  return (
    <>
      {/* Main menu item block, now with onClick handler */}
      <div className={navItemClasses} style={paddingStyle} onClick={handleClick}>
        <div className="flex items-center w-full">
          {/* Expansion Arrow/Icon - Conditionally applied rotation */}
          {item.isParent ? (
             <span 
                className={`text-gray-100 text-sm font-semibold transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
                style={{ marginRight: '4px' }}
             >
                &gt; {/* Simple triangle for expansion/collapse */}
            </span>
          ) : (
             <span className="w-4 mr-1"></span> // Placeholder for alignment
          )}
          

          {/* Icon */}
          <Icon className={iconBaseClasses} />

          {/* Text */}
          <span className={`ml-2 ${isActive ? 'font-medium' : ''}`}>
            {item.name}
          </span>
        </div>
      </div>

      {/* Render children conditionally based on isOpen state */}
      {isOpen && hasChildren && (
        <div className="flex flex-col">
          {item.children.map((child, index) => (
            <NavItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </>
  );
};


export default function NavigatorSidebar() {
  // Define classes for dark theme styling
  const sidebarClasses =
    "w-72 mb-10 bg-[#2c2c2c] text-gray-300 flex flex-col font-sans";

  const headerClasses =
    "px-4 py-1 bg-gray-600/50 flex items-center justify-between";


  return (
    <aside className={sidebarClasses}>
<style>
{`
.sidebar-scroll::-webkit-scrollbar {
  background: #111827;
  width: 10px;  
}
.sidebar-scroll::-webkit-scrollbar-thumb {
  background: #959595;
  border-radius: 4px; 
}
`}
</style>
      {/* --- Navigator Header --- */}
      <div className={headerClasses}>
        <span className="font-semibold text-md text-white">Navigator</span>
        <button
          className="p-1 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      {/* --- Menu Items --- */}
      <div className="flex-1 overflow-auto p-1 sidebar-scroll">
        <div className="text-sm font-semibold p-2 text-white">
          MetaTrader 5 Manager
        </div>
        <nav className="text-sm">
          {/* Render the top-level items */}
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} level={0} />
          ))}
        </nav>
      </div>
    </aside>
  );
}