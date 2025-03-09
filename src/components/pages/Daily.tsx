import React, { useState } from "react";
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
    const y = String(new Date().getFullYear());
    const m = String(new Date().getMonth() + 1).padStart(2, "0");
    const d = String(new Date().getDate() -1).padStart(2, "0");
    const param = `${y}${m}${d}/`
    const data = baseUrl.map((url, i) => ({
      name: nameList[i],
      url: url + param,
    }));
    setUrlList(data);
  };

  const copy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    navigator.clipboard.writeText(e.currentTarget.href);
  };

  return (
    <div>
      <Button onClick={clickHandler}>前日分のURLを取得</Button>
      <Ul>
        {urlList.map((item) => (
          <Li key={item.url}>
            <a onClick={copy} href={item.url} target="_blank">
              {item.name}
            </a>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default Daily;
