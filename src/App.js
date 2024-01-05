import { useState } from "react";

function App() {
  
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    
    event.preventDefault();
    //<form>의 submit시 기본기능인 새로고침을 막기위한 함수
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    //정확한 이해가 어려운 부분
    //currentArray를 argument, 가상의 전달바구니 쯤으로 생각하는 것이
    //가장 맞는 이해가 되는 것 같다.
    //최초 바구니는 비어있으나 한개가 포함되면 그 후로는 한개를 가진 바구니가
    //되는 것. 근데 정의도 안된 녀석이 누적이 되는건가.. 가상의 바구니 주제에..
    //아니 어쩌면 가상의 바구니기에 누적되는 걸지도?..

    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  //x.map()은 x라는 array에 접근해 모든 element에 영향을 주는 함수다.
  //()안에는 함수도 넣을 수 있는데 함수는 3가지 인자를 가질 수 있다.
  //arr.map(callbackFunction(currenValue, index, array), thisArg)
  //currenVlaue : 현재 배열(arr) 내의 값들을 의미    
  //index : 현재 배열 내 값의 인덱스를 의미    
  //array : 현재 배열
  //thisArg(선택항목) : callback 함부 내부에서 사용할 this 레퍼런스 를 설정한다
}

export default App;
