import { ReactElement } from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
`;

type ContainerProps = {
  children: ReactElement;
};

const Container = ({ children }: ContainerProps) => {
  return <Div>{children}</Div>;
};

export default Container;
