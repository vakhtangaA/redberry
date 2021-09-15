import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import doctorImg from "../assets/doctor2.png";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";
import RadioButtonsGroup from "./RadioButtonsGroup";
import questions from "./textQuestions";
import { addCovidInfo } from "../state/userSlice";
import { useDispatch } from "react-redux";

function Vaccination() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [disabled, setDisabled] = useState(true);

  const decideButtonState = (isValid) => {
    if (isValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    decideButtonState(isValid);
  }, [errors, isValid]);

  const dispatch = useDispatch();
  const { push } = useHistory();

  const onSubmit = (data, isValid) => {
    if (isValid) {
      dispatch(addCovidInfo(data));
      push("/vaccination");
    }
  };
  console.log(errors);

  const isVaccinated = watch("isVaccinated");
  const antisxeulebi = watch("antisxeulebi");
  return (
    <div className="identificationParent covidQuestions">
      <Navbar text="REDBERRY" pages="3/4" />
      <div className="identification covidIdentification">
        <form onSubmit={handleSubmit(onSubmit)} id="vaccinationForm">
          <RadioButtonsGroup
            question={questions.vaccination}
            register={register}
            registerName="isVaccinated"
            // validations={validations.hadCovid}
          />
          {/* {errors.hadCovid && (
            <span className="errorNotif">{errors.hadCovid.message}</span>
          )} */}
          {isVaccinated === "კი" && (
            <RadioButtonsGroup
              question={questions.vaccination.ifYes}
              register={register}
              registerName="antisxeulebi"
              // validations={validations.hadCovid}
            />
          )}
          {/* {errors.antisxeulebi && (
            <span className="errorNotif">{errors.antisxeulebi.message}</span>
          )} */}
        </form>
        <img src={doctorImg} alt="doctorImage" className="doctorImg"></img>
      </div>
    </div>
  );
}

export default Vaccination;
