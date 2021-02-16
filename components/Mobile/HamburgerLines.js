import styled from "styled-components";

export default styled.div`
  /* position lines relative to hamburger container */
  position: absolute;
  /* only show for small screens */
  display: block;
  background-color: ${(props) => props.theme.gray};
  height: 5px;
  width: 50px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.gray};
    height: 5px;
    width: 50px;
  }

  &::before {
    transform: translateY(-20px);
  }
  &::after {
    transform: translateY(20px);
  }
`;
