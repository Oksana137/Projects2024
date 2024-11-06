const getEntries = () => {
  return JSON.parse(localStorage.getItem("diaryEntries")) || [];
};

const getEntriesByDate = (date) => {
  const entries = getEntries();
  //console.log(entries);
  const entriesByDate = entries.filter((entry) => entry.date === date);
  return entriesByDate;
};

export { getEntriesByDate };
