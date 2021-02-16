import styled from "styled-components";

export default styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  align-self: center;
  width: 100%;
  padding: 10px;
  transform: rotate(${(props) => props.rotate});
  border: 1px solid ${(props) => props.theme.darkGray};
  box-shadow: 18px 14px 21px -8px rgba(0, 0, 0, 0.69);
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
  &:hover {
    animation: scale-image 0.5s ease-in-out forwards;
  }

  @keyframes scale-image {
    100% {
      transform: scale(1.1);
    }
  }
`;
