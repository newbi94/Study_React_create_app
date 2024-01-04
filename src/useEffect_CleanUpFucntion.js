
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
};
//useEffect의 Cleanup기능
//위 Hello 컴포넌트 내에 return () = > x 를 추가하여
//컴포넌트가 마운트 해제될 때 x를 발생시킨다.

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};  
    //showing의 state에 따라 Hello 컴포넌트를 마운트하고 해제하는 return문
    //+ 버튼을 클릭하면 showing의 state에 따라 버튼의 문구를 바꾼다.

export default App;
