const baseUrl: string[] = import.meta.env.VITE_URL_LISTS.split(",");
const nameList: string[] = import.meta.env.VITE_NAMES.split(",");

export { baseUrl, nameList }