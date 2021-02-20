import styled from "styled-components";

export default styled.button`
  align-self: flex-start;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 1.5em;
  font-size: ${(props) => props.theme.fs_p};
  font-weight: 400;
  padding: 0.5em 1.75em;
  margin-left: 2em;
  text-decoration: none;

  &:hover {
    animation: scale-button 0.25s ease-in-out forwards;
  }

  @keyframes scale-button {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fs_p_mobile};
  }
`;
