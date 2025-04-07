const copy = (e: React.MouseEvent<HTMLAnchorElement>) => {
  navigator.clipboard.writeText(e.currentTarget.href);
};

export { copy }