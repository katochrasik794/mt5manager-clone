
import { useContext } from "react";
import Mycontext from "../context/Mycontext";  


const ToggleBtn = () => {
      const { mode, toggleMode } = useContext(Mycontext);

  return (
    <>
      <button
        onClick={toggleMode}
        className="transition text-2xl font-semibold bg-transparet cursor-pointer"
        // style={{
        //   background: mode === "dark" ? "white" : "black",
        //   color: mode === "dark" ? "white" : "white",
        //   borderColor: mode === "dark" ? "white" : "black",
        // }}
      >
        {mode === "dark" ? "🌞" : "🌙"}
      </button>
    </>
  );
};

export default ToggleBtn;