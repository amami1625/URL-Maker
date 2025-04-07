import React, { useEffect, useState } from "react";
import { UrlList } from "../../types/type";
import List from "../common/List";
import ListItem from "../common/ListItem";
import Button from "../common/Button";

const Monthly = () => {
  const [baseUrl, setBaseUrl] = useState<string[]>([]);
  const [nameLists, setNameLists] = useState<string[]>([]);
  const [hallNumber, setHallNumber] = useState<number>(0);
  const [date, setDate] = useState<string>("0");
  const [urlList, setUrlList] = useState<UrlList[]>([]);

  useEffect(() => {
    const y = String(new Date().getFullYear());
    const m = String(new Date().getMonth() + 1).padStart(2, "0");
    setHallNumber(0);
    setDate(`${y}${m}`);
    setBaseUrl(import.meta.env.VITE_URL_LISTS.split(","));
    setNameLists(import.meta.env.VITE_NAMES.split(","));
  }, []);

  const changeHall = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHallNumber(Number(e.target.value));
  };

  const changeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value.replace("-", ""));
  };

  const clickHandler = () => {
    const y = Number(date?.slice(0, 4));
    const m = Number(date?.slice(4, 6));
    const numberOfDays = new Date(y, m, 0).getDate();
    const data = [];
    for (let i = 1; i <= numberOfDays; i++) {
      data.push({
        name: `${nameLists[hallNumber]} (${y}/${m}/${i})`,
        url: `${baseUrl[hallNumber]}${y}${String(m).padStart(2, "0")}${String(i).padStart(2, "0")}`
      });
    }
    setUrlList(data);
  };

  const copy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    navigator.clipboard.writeText(e.currentTarget.href);
  };

  return (
    <div>
      <select onChange={changeHall}>
        {nameLists.map((name, i) => (
          <option value={i} key={name}>
            {name}
          </option>
        ))}
      </select>
      <input onChange={changeMonth} type="month" />
      <Button text="月間のURLを取得" handler={clickHandler}/>
      <List>
        {urlList.map((item) => (
          <ListItem item={item} copy={copy} key={item.url} />
        ))}
      </List>
    </div>
  );
};

export default Monthly;
