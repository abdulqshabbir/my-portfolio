import styled from "styled-components";

const LinkText = styled.p`
  color: ${(props) => props.color};
  font-family: basic-sans-serif, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: calc(1rem * (1.7));
  text-transform: lowercase;
  text-decoration: none;
  text-align: center;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  position: relative;

  &:hover {
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-bottom-color: ${(props) => props.color};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0;
    box-shadow: 0 0 0 1000px rgba(68, 74, 81, 0.5);
  }
`;

export default LinkText;
