import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
      </div>
      //App css와 Button css 내의 classname이 같고 App.js와 Button.js에 적용되는
      //classname이 같아도 다른 css 파일에 있으면
      //react-create-app은 랜덤하게 classname을 생성하기 때문에 충돌하지 않는다.
  );
}

export default App;
