import { useState } from "react";
import styled from "styled-components";

const Button = styled.button``;
const Ul = styled.ul``;
const Li = styled.li``;

type UrlList = {
  name: string;
  url: string;
};

const Daily = () => {
  const [urlList, setUrlList] = useState<UrlList[]>([]);

  const clickHandler = () => {
    const baseUrl: string[] = import.meta.env.VITE_URL_LISTS.split(",");
    const nameList: string[] = import.meta.env.VITE_NAMES.split(",");
    const data = baseUrl.map((url, i) => ({
      name: nameList[i],
      url,
    }));
    setUrlList(data);
  };
  return (
    <div>
      <Button onClick={clickHandler}>当日分のURLを取得</Button>
      <Ul>
        {urlList.map((item) => (
          <Li key={item.url}>
            <a href={item.url} target="_blank">{item.name}</a>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default Daily;
