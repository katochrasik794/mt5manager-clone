import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

// Define the colors/variables based on the provided code's intent (MetaTrader 5 Manager style)
const styles = {
  // Main background color for the overall application content area
  appBg: '#111827', 
  // Panel background (used for the log box and the footer bar itself)
  panelBg: '#2c2c2c', 
  // Border color (used to separate elements)
  borderColor: '#b2b2b2',
  // Muted text (used for titles and timestamps)
  mutedText: '#9CA3AF', 
  // Text color
  mainText: '#FFFFFF',
  // Success/Green log background (used for successful operations)
  logSuccessBg: 'rgba(16, 185, 129, 0.2)', // Slightly stronger green to match the image
  // Error/Red log background (used for failed/error operations)
  logErrorBg: 'rgba(239, 68, 68, 0.2)', // Slightly stronger red to match the image
  // Default/White log background - This should be close to the panelBg but distinct
  logDefaultBg: '#343434', // Darker gray for alternating row/default look
  // Log Text color (for the non-muted content)
  logTextColor: '#FFFFFF',
};

// Mock data reflecting the entries in the uploaded image (image_39b622.png)
const logEntries = [
    { time: "2025.11.20 12:55:52", dealer: "369068", login: "369068", request: "market buy 0.1 XAUUSD.e", answer: "Done at 4062.90", type: 'default' },
    { time: "2025.11.20 12:56:53", dealer: "369068", login: "369068", request: "market sell 0.1 XAUUSD.e, close #7434109", answer: "Done at 4063.19", type: 'default' },
    { time: "2025.11.20 12:57:32", dealer: "369068", login: "369068", request: "market buy 0.1 XAUUSD.e", answer: "Done at 4066.09", type: 'success' },
    { time: "2025.11.20 12:58:00", dealer: "369068", login: "369068", request: "market buy 0.1 XAUUSD.e", answer: "Done at 4065.03", type: 'default' },
    { time: "2025.11.20 12:41:38", dealer: "369068", login: "369068", request: "market sell 0.1 XAUUSD.e, close #7434115", answer: "Done at 4065.25", type: 'default' },
    { time: "2025.11.20 12:43:57", dealer: "369068", login: "369068", request: "market sell 0.1 XAUUSD.e, close #7434114", answer: "Done at 4066.04", type: 'default' },
    { time: "2025.11.20 12:57:40", dealer: "369016", login: "369016", request: "market sell 0.01 XAUUSD.e", answer: "Done at 4065.90", type: 'error' },
    { time: "2025.11.20 12:57:50", dealer: "369016", login: "369016", request: "market buy 0.01 XAUUSD.e, close #7434134", answer: "Done at 4065.72", type: 'error' },
    { time: "2025.11.20 12:58:30", dealer: "369075", login: "369075", request: "market sell 0.01 XAUUSD.e, close #7434093", answer: "Done at 4064.53", type: 'default' },
    { time: "2025.11.20 12:59:15", dealer: "369068", login: "369068", request: "market buy 0.1 XAUUSD.e", answer: "Done at 4066.20", type: 'success' },
    { time: "2025.11.20 13:00:01", dealer: "369068", login: "369068", request: "market sell 0.1 XAUUSD.e, close #7434119", answer: "Done at 4065.35", type: 'default' },
    { time: "2025.11.20 13:00:45", dealer: "369016", login: "369016", request: "market buy 0.01 XAUUSD.e", answer: "Done at 4065.99", type: 'error' },
];

// Helper to define column sizing for the grid
const gridColClasses = "grid-cols-[140px_80px_80px_minmax(0,1fr)_120px]";

export default function App() {
  const login = "2025.11.20 08:50:33";
  const logout = "—";
  const [isLogsPanelOpen, setIsLogsPanelOpen] = useState(true);

  // Function to determine background color based on log entry type
  const getBackgroundColor = (type) => {
    switch (type) {
      case 'success':
        return styles.logSuccessBg;
      case 'error':
        return styles.logErrorBg;
      case 'default':
      default:
        return styles.logDefaultBg;
    }
  };

  return (
    // Main container to simulate the application environment for correct styling
    <div 
        className="" 
        style={{ backgroundColor: styles.appBg, color: styles.mainText, fontFamily: 'Inter, sans-serif' }}>
        {/* Footer Bar System */}
        <div className="w-full">
            {/* Logs Panel (Collapsible) */}
            <div 
                className={`transition-all duration-300 overflow-hidden ${isLogsPanelOpen ? 'max-h-96 border-t' : 'max-h-12'}`}
                style={{ backgroundColor: styles.panelBg, borderColor: styles.borderColor }}
            >
                {/* Panel Header/Toggler */}
                <div 
                    className="flex justify-between items-center p-2 cursor-pointer border-b"
                    onClick={() => setIsLogsPanelOpen(!isLogsPanelOpen)}
                    style={{ borderColor: isLogsPanelOpen ? styles.borderColor : styles.panelBg }}
                >
                    <div className="text-sm font-semibold" style={{ color: styles.mutedText }}>
                        Toolbox / Logs
                    </div>
                    {isLogsPanelOpen ? (
                        <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                    ) : (
                        <ChevronUpIcon className="w-4 h-4 text-gray-400" />
                    )}
                </div>

                {/* Logs Content Area */}
                <div className={`p-2 transition-opacity duration-300 ${isLogsPanelOpen ? 'opacity-100' : 'opacity-0 h-0'}`}>
                    <div 
                        className="h-64 overflow-y-auto rounded-sm"
                        style={{ border: `1px solid ${styles.borderColor}`, backgroundColor: styles.logDefaultBg }}
                    >
                        {/* Table Header Row */}
                        <div 
                            className={`grid ${gridColClasses} text-xs font-semibold py-1 sticky top-0`} 
                            style={{ backgroundColor: styles.panelBg, color: styles.mutedText, borderBottom: `1px solid ${styles.borderColor}` }}
                        >
                            <div className="pl-3">Time</div>
                            <div>Dealer</div>
                            <div>Login</div>
                            <div>Request</div>
                            <div className="pr-3">Answer</div>
                        </div>

                        {/* Log Entries */}
                        <div className="text-xs">
                            {logEntries.map((entry, index) => (
                                <div
                                    key={index}
                                    className={`grid ${gridColClasses} py-1`}
                                    style={{ 
                                        backgroundColor: getBackgroundColor(entry.type),
                                        color: styles.logTextColor,
                                    }}
                                >
                                    <div className="pl-3" style={{ color: styles.mutedText }}>{entry.time}</div>
                                    <div>{entry.dealer}</div>
                                    <div>{entry.login}</div>
                                    <div>{entry.request}</div>
                                    <div>{entry.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Actual Footer Bar */}
            <footer 
                className="p-3 text-sm flex items-center justify-between shadow-lg"
                style={{ backgroundColor: styles.panelBg, borderTop: `1px solid ${styles.borderColor}` }}
            >
                <div className="text-gray-400">
                    Login time: <span className="font-medium text-white">{login}</span>
                </div>
                <div className="text-gray-400">
                    Logout time: <span className="font-medium text-white">{logout}</span>
                </div>
            </footer>
        </div>
    </div>
  );
}