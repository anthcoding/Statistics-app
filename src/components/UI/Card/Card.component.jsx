//Styles
import "./Card.component.css";

const Card = (props) => {
  const clasess = "card " + props.className;

  return <div className={clasess}>{props.children}</div>;
};

export default Card;
