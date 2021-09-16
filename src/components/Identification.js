import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "./Form";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";
import peopleImg from "../assets/verificationImg.png";
import { addUser } from "../state/userSlice";

export default function Identification() {
  const [disabled, setDisabled] = useState(true);

  const decideButtonState = isValid => {
    if (isValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const dispatch = useDispatch();
  const { push } = useHistory();

  const onSubmit = (data, isValid) => {
    if (isValid) {
      dispatch(addUser(data));
      push("/questions");
    }
  };

  return (
    <div className="identificationParent">
      <Navbar text="REDBERRY" pages="1/4" />
      <div className="identification">
        <Form handleButtonState={decideButtonState} onSubmit={onSubmit} />
        <img src={peopleImg} alt="people" className="peopleImg"></img>
      </div>
      <NavigationButton disabled={disabled} direction="right" />
    </div>
  );
}
