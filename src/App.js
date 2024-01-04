import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
//최초 render시 발생하고 더이상 re-render되지 않는 useEffect
//콘솔 창에 "I run only once." 문구가 표시됨
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
//keyword의 변화를 감지하여 변화할 때마다 re-render되는 useEffect
//즉 input창의 value={keyword}가 바뀔 때마다 re-render됨
//keyword가 변화할 때마다 "I run when 'keyword' changes." 문구가 표시됨
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
//counter의 변화를 감지하여 변화할 때마다 re-render되는 useEffect
//즉 버튼을 클릭하여 setCounuter를 통해 counter가 변화할 때마다 re-render됨
//counter가 변화할 때마다 "I run when 'counter' changes." 문구가 표시됨

  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
//keyword와 counter중 어느하나라도 변화할 때마다 re-render되는 useEffect

  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
//keyword의 길이가 5를 넘는 조건을 만족하는 상태에서 매 변화마다 re-render되는 useEffect

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
