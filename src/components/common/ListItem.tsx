import styled from "styled-components";
import { UrlList } from "../../types/type";

const Li = styled.li`
  padding: 8px;
  border-bottom: dashed 2px #6594e0;
  // border-bottom: 1px solid #ccc;
`;

const A = styled.a`
  font-size: 20px;
  color: #6594e0;
  &:hover {
    opacity: 0.7;
  }
`;

const Span = styled.span`
  display: block;
  font-size: 10px;
`;

type ListItemProps = {
  item: UrlList;
  copy: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ListItem = ({ item, copy }: ListItemProps) => {
  return (
    <Li>
      <A onClick={copy} href={item.url} target="_blank">
        {item.name}
        <Span>{item.url}</Span>
      </A>
    </Li>
  );
};

export default ListItem;
