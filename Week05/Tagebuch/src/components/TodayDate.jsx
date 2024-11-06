const TodayDate = () => {
  const getTodayDate = () => {
    return new Date().toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col justify-between">
      <p className="text-gray-600">{getTodayDate()}</p>
      <span className="text-3xl font-bold">Today</span>
    </div>
  );
};

export default TodayDate;
