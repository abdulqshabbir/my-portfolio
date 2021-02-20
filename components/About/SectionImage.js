import styled from "styled-components";

export default styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  align-self: center;
  width: 100%;
  padding: 10px;
  transform: rotate(${(props) => props.rotate});
  background: white;
  box-shadow: 18px 14px 21px -8px rgba(0, 0, 0, 0.69);
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};

  @media (max-width: 1200px) {
    width: 60%;
  }
`;

export const SectionImageNoBoxShadow = styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  align-self: center;
  width: 100%;
  padding: 10px;
  transform: rotate(${(props) => props.rotate});
  background: white;
  @media (max-width: 1200px) {
    width: 60%;
  }
`;
