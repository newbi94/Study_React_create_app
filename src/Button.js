import PropTypes from "prop-types";
import styles from "./Button.module.css";



function Button ({text}){
    return <button 
    className={styles.title}>{text}</button>
    //App css와 Button css 내의 classname이 같고 App.js와 Button.js에 적용되는
    //classname이 같아도 다른 css 파일에 있으면
    //react-create-app은 랜덤하게 classname을 생성하기 때문에 충돌하지 않는다.
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Button;