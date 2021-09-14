import React from "react";
import { useSelector } from "react-redux";

import page2Image from "../assets/page2.png";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";
import RadioButtonsGroup from "./RadioButtonsGroup";
import questions from "./textQuestions";
import { useForm } from "react-hook-form";

function AntiBodies({ yes, question }) {
  return (
    <div>
      <p>{question}</p>
      <input type="date" />
      {yes && <input type="number" />}
    </div>
  );
}

function Covid() {
  const covid = questions.covid;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const hadCovid = watch("hadCovid");
  const antisxeulebi = watch("antisxeulebi");

  return (
    <div className="identificationParent covidQuestions">
      <Navbar text="REDBERRY" pages="2/4" />
      <div className="identification covidIdentification">
        <form onSubmit={handleSubmit(onSubmit)} id="covidForm">
          <RadioButtonsGroup
            question={questions.covid}
            register={register}
            registerName="hadCovid"
          />
          {hadCovid === "კი" && (
            <RadioButtonsGroup
              question={questions.covid.ifYes}
              register={register}
              registerName="antisxeulebi"
            />
          )}
          {antisxeulebi === "კი" && hadCovid === "კი" ? (
            <AntiBodies
              yes={true}
              question="თუ გახსოვს, გთხოვ მიუთითე მიახლოებითი თარიღი და რაოდენობა ანტისხეულების*"
            />
          ) : antisxeulebi === "არა" && hadCovid === "კი" ? (
            <AntiBodies
              yes={false}
              question="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), როდის გქონდა კოვიდ19"
            />
          ) : (
            ""
          )}
        </form>
        <img
          src={page2Image}
          className="page2Image"
          alt="A man with temperature"
        ></img>
      </div>
      <div className="buttonsParent">
        <NavigationButton
          direction="left"
          disabled={false}
          className="page2NavigationBtn"
        />
        <NavigationButton
          direction="right"
          disabled={true}
          formId="covidForm"
        />
      </div>
    </div>
  );
}

export default Covid;
