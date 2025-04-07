import { useState } from "react";
import List from "../common/List";
import { UrlList } from "../../types/type";
import ListItem from "../common/ListItem";
import Button from "../common/Button";
import { copy } from "../../functions/function";

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

  return (
    <div>
      <Button text="前日のURLを取得" handler={clickHandler}/>
      <List>
        {urlList.map((item) => (
          <ListItem item={item} copy={copy} key={item.url}/>
        ))}
      </List>
    </div>
  );
};

export default Daily;
