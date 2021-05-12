import { useHistory } from "react-router";
import Button from "../../components/UI/Button/Button";

const NotFound = () => {
  let history = useHistory();

  const handleClick = () => {
      history.goBack();
  };

  return (
    <div>
      <h1>Not Found!</h1>
      <Button text="Go back" clicked={() => handleClick()}/>
    </div>
  );
};

export default NotFound;
