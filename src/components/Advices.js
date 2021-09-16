import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import advicesImage from "../assets/advicesImage.svg";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";
import RadioButtonsGroup from "./RadioButtonsGroup";
import questions from "./textQuestions";
import { addVaccinationInfo } from "../state/userSlice";
import { useDispatch } from "react-redux";
import { validations } from "./Covid";

function Advices() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [disabled, setDisabled] = useState(true);

  const decideButtonState = isValid => {
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

  useEffect(() => {
    decideButtonState(isValid);
  }, [errors, isValid]);

  const onSubmit = (data, isValid) => {
    console.log(data);
    if (isValid) {
      dispatch(addVaccinationInfo(data));
      push("/final");
    }
  };
  return (
    <div className="identificationParent covidQuestions" id="advicesParent">
      <Navbar text="COVID" pages="4/4" />

      <div className="advicesDiv">
        <img
          src={advicesImage}
          className="page2Image"
          alt="Man riding bike"
        ></img>
        <div className="advicesFormParent">
          <p style={{ fontFamily: "sans-serif" }}>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით ბევრისთვის არის და ყოფილა წლების
            განმავლობაში ერთად მიზნებისთვის ბრძოლის მიზეზი, ბევრისთვის კი -
            ჩვენთან გადმოსვლის. პანდემიის პერიოდში ერთმანეთსაც იშვიათად
            ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="advicesForm"
            autoComplete="on"
          >
            <RadioButtonsGroup
              question={questions.advices.onlineMeetups}
              register={register}
              registerName="onlineMeetups"
              validations={validations.requiredValidation}
            />
            {errors.onlineMeetups && (
              <span className="errorNotif">{errors.onlineMeetups.message}</span>
            )}
            <RadioButtonsGroup
              question={questions.advices.workInOffice}
              register={register}
              registerName="workInOffice"
              validations={validations.requiredValidation}
            />
            {errors.workInOffice && (
              <span className="errorNotif">{errors.workInOffice.message}</span>
            )}
            <div className="textAreaParent">
              <p>{questions.advices.physicalMeetups.question}</p>
              <textarea {...register("physicalMeetups")}></textarea>
            </div>
            <div className="textAreaParent">
              <p>{questions.advices.currentOpinion.question}</p>
              <div className="parentOfLastTextarea">
                <textarea {...register("currentOpinion")}></textarea>
                <button className={disabled ? "disabled" : ""}>
                  დასრულება
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="buttonsParent">
        <NavigationButton
          direction="left"
          disabled={false}
          path="/vaccination"
        />
      </div>
    </div>
  );
}

export default Advices;
