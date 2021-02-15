import styled from "styled-components";

export default styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  align-self: center;
  width: 100%;
  border-radius: 2em;
  padding: 20px;
  transform: rotate(${(props) => props.rotate});

  &:hover {
    animation: rotate 1s ease-in-out forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
