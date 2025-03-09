import styled from "styled-components";
import { UrlList } from "../../types/type";

const Li = styled.li``;

type ListItemProps = {
  item: UrlList;
  copy: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ListItem = ({ item, copy }: ListItemProps) => {
  return (
    <Li>
      <a onClick={copy} href={item.url} target="_blank">
        {item.name}
      </a>
    </Li>
  );
};

export default ListItem;
