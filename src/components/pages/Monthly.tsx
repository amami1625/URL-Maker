import React, { useState } from "react";
import { MonthlyData, UrlList } from "../../types/type";
import List from "../common/List";
import ListItem from "../common/ListItem";
import Button from "../common/Button";
import { copy, getMonthlyDataArray } from "../../functions/function";
import { baseUrl, nameList } from "../../consts/lists";
import { initDate } from "../../consts/montyly";

const Monthly = () => {
  const [hallNumber, setHallNumber] = useState<number>(0);
  const [urlList, setUrlList] = useState<UrlList[]>([]);
  const [date, setDate] = useState<string>(initDate);

  const changeHall = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHallNumber(Number(e.target.value));
  };

  const changeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value.replace("-", ""));
  };

  const clickHandler = () => {
    const data: MonthlyData = {
      date,
      hallName: nameList[hallNumber],
      url: baseUrl[hallNumber],
    };
    const monthlyData = getMonthlyDataArray(data);
    setUrlList(monthlyData);
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
      <Button text="月間のURLを取得" handler={clickHandler} />
      <List>
        {urlList.map((item) => (
          <ListItem item={item} copy={copy} key={item.url} />
        ))}
      </List>
    </div>
  );
};

export default Monthly;
