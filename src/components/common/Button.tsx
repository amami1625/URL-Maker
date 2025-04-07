import styled from "styled-components";

const ButtonElm = styled.button`
  border-radius: 5px;
  position: relative;
  display: flex;
  margin-left: auto;
  max-width: 220px;
  padding: 10px 16px;
  color: #fff;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background-color: #4b5563;
  &:hover {
    opacity: 0.8;
  }
`;

interface ButtonProps {
  text: string;
  handler: () => void;
}

const Button = ({ text, handler }: ButtonProps) => {
  return <ButtonElm onClick={handler}>{text}</ButtonElm>;
};

export default Button;
