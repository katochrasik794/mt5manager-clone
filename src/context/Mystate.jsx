import { useState } from "react";
import Mycontext from "./Mycontext";
import PropTypes from "prop-types";

function Mystate(props) {
  const [mode, setMode] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    // Apply class to body for CSS styling
    document.body.className = newMode;
  };

  return (
    <Mycontext.Provider value={{ mode, toggleMode, searchTerm, setSearchTerm }}>
      {props.children}
    </Mycontext.Provider>
  );
}
Mystate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mystate;