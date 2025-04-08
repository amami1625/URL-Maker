import { MonthlyData } from "../types/type";

const copy = (e: React.MouseEvent<HTMLAnchorElement>) => {
  navigator.clipboard.writeText(e.currentTarget.href);
};

const getDate = (date: string) => {
  const y = Number(date.slice(0, 4));
  const m = Number(date.slice(4, 6));
  const numberOfDays = new Date(y, m, 0).getDate();
  return [y, m, numberOfDays];
};

const getMonthlyDataArray = (data: MonthlyData) => {
  const { date, hallName, url } = data;
  const [y, m, numberOfDays] = getDate(date);
  const monthlyData = Array.from({ length: numberOfDays }, (_, i) => ({
    name: `${hallName} (${y}/${m}/${i + 1})`,
    url: `${url}${y}${String(m).padStart(2, "0")}${String(i + 1).padStart(2, "0")}`,
  }));
  return monthlyData;
};

export { copy, getMonthlyDataArray };
