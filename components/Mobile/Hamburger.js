import styled from "styled-components";

export default styled.div`
  /* position hamburgerLines relative to Hamburger */
  position: relative;
  /* only show for small screens */
  display: none;
  width: 120px;
  height: 120px;
  background-color: white;
  cursor: pointer;
  z-index: 2;
  height: 120px;

  @media (max-width: 1200px) {
    display: flex;
    /* align-self aligns hamburger wrapper to the right */
    align-self: flex-end;

    /* align-items and justify-items aligns hamburger lines */
    align-items: center;
    justify-content: center;
  }
`;
