import { ReactElement } from "react";
import styled from "styled-components";

const Ul = styled.ul``;

type ListProps = {
  children: ReactElement[];
};

const List = ({ children }: ListProps) => {
  return <Ul>{children}</Ul>;
};

export default List;
