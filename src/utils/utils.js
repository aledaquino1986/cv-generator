const formatFunction = date => {
  const newDate = new Date(date);
  const month = newDate.getMonth(newDate);
  const year = newDate.getFullYear(newDate);

  const formatter = new Intl.DateTimeFormat("en-us", { month: "short" });

  return `${formatter.format(month)}-${year}`;
};

export { formatFunction };
