import React, { useState } from "react";
import { UrlList } from "../../types/type";
import List from "../common/List";
import ListItem from "../common/ListItem";
import Button from "../common/Button";
import { copy } from "../../functions/function";

const Monthly = () => {
  const baseUrl: string[] = import.meta.env.VITE_URL_LISTS.split(",");
  const nameList: string[] = import.meta.env.VITE_NAMES.split(",");
  const [hallNumber, setHallNumber] = useState<number>(0);
  const [urlList, setUrlList] = useState<UrlList[]>([]);
  const [date, setDate] = useState<string>(`${String(new Date().getFullYear())}${String(new Date().getMonth() + 1).padStart(2, "0")}`);

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
        name: `${nameList[hallNumber]} (${y}/${m}/${i})`,
        url: `${baseUrl[hallNumber]}${y}${String(m).padStart(2, "0")}${String(i).padStart(2, "0")}`
      });
    }
    setUrlList(data);
  };

  return (
    <div>
      <select onChange={changeHall}>
        {nameList.map((name, i) => (
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
