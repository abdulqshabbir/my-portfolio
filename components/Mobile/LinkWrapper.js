import styles from "./LinkWrapper.module.css";
import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../Store";

const LinkWrapper = ({ children, className }) => {
  const [state] = useContext(Context);
  return (
    <div
      className={`${className} ${state.isHamburgerActive ? styles.active : ""}`}
    >
      {children}
    </div>
  );
};

const StyledLinkWrapper = styled(LinkWrapper)`
  display: none;
`;

export default StyledLinkWrapper;
