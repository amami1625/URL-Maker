import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
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
    const d = String(new Date().getDate() - 1).padStart(2, "0");
    const param = `${y}${m}${d}/`;
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
