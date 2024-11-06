import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center py-8 bg-slate-200">
      <Counter
        increment={true}
        count={count}
        setCounter={setCounter}
      />
    </div>
  );
}

export default App;
