import styled from "styled-components";

export default styled.div`
  /* position lines relative to hamburger container */
  position: absolute;
  /* only show for small screens */
  display: none;
  background-color: ${(props) => props.theme.gray};
  height: 3px;
  width: 50px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.gray};
    height: 3px;
    width: 50px;
  }

  &::before {
    transform: translateY(-20px);
  }
  &::after {
    transform: translateY(20px);
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;
