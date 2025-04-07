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
  background: rgb(149, 202, 252);
  background: linear-gradient(
    270deg,
    rgba(149, 202, 252, 1) 0%,
    rgba(107, 182, 255, 1) 100%
  );
  &:hover {
    background: rgb(117, 188, 255);
    background: linear-gradient(
      270deg,
      rgba(117, 188, 255, 1) 0%,
      rgba(62, 159, 252, 1) 100%
    );
  }
`;

interface ButtonProps {
  text: string,
  handler: () => void
}

const Button = ({ text, handler }: ButtonProps) => {
  return (
    <ButtonElm onClick={handler}>{ text }</ButtonElm>
  )
}

export default Button