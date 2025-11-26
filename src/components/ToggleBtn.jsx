
import { useContext } from "react";
import Mycontext from "../context/Mycontext";  


const ToggleBtn = () => {
      const { mode, toggleMode } = useContext(Mycontext);

  return (
    <>
      <button
        onClick={toggleMode}
        className="px-3 py-0.5 rounded-full transition text-sm font-semibold border bg-transparet cursor-pointer"
        style={{
          background: mode === "dark" ? "white" : "black",
          color: mode === "dark" ? "white" : "white",
          borderColor: mode === "dark" ? "white" : "black",
        }}
      >
        {mode === "dark" ? "🌞" : "🌙"}
      </button>
    </>
  );
};

export default ToggleBtn;