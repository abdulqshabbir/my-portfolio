import styled from "styled-components";

export default styled.img`
  background-color: inherit;
  cursor: pointer;
  width: 50px;
  height: 50px;
  &:hover {
    animation: scale-image 0.3s ease-in-out forwards;
  }

  @keyframes scale-image {
    100% {
      transform: scale(1.2);
    }
  }
`;
