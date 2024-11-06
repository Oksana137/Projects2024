const Counter = ({ count, setCounter }) => {
  return (
    <div className="flex justify-around items-center w-72 py-2 my-8 bg-white rounded-lg border-2 border-slate-400">
      <button
        className="w-8 h-8 bg-cover bg-[url('/img/minus.svg')]"
        onClick={() => setCounter(count - 1)}
      ></button>
      <h2 className="text-3xl font-bold w-20 py-4 rounded-lg border-2 border-slate-400 text-center align-middle">
        {count}
      </h2>
      <button
        className="w-8 h-8 bg-cover bg-[url('/img/plus.svg')]"
        onClick={() => setCounter(count + 1)}
      ></button>
    </div>
  );
};

export default Counter;
