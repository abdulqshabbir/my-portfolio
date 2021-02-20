import { useContext, useState } from "react";
import { Context } from "../Store";
import styles from "./Hamburger.module.css";

const Hamburger = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const [isActive, setIsActive] = useState(true);

  function toggleOpen() {
    setIsActive((prevState) => !prevState);
    dispatch({ type: "TOGGLE_HAMBURGER_ACTIVE", payload: isActive });
  }

  return (
    <div onClick={toggleOpen} className={`${styles.hamburger}`}>
      {children}
    </div>
  );
};

export default Hamburger;
