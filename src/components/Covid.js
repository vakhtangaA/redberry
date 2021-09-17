import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import page2Image from "../assets/page2.png";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";
import RadioButtonsGroup from "./RadioButtonsGroup";
import questions from "./textQuestions";
import { addCovidInfo } from "../state/userSlice";
import { useDispatch } from "react-redux";

export const validations = {
  requiredValidation: {
    required: {
      value: true,
      message: "ველის შევსება სავალდებულოა ",
    },
  },
  antiBodies: {
    date: {
      required: {
        value: true,
        message: "ველის შევსება სავალდებულოა ",
      },
    },
    number: {
      required: {
        value: true,
        message: "ველის შევსება სავალდებულოა ",
      },
      pattern: {
        value: /^\d+$/,
        message: "გთხოვთ, ჩაწეროთ მხოლოდ ციფრები",
      },
    },
  },
};

function AntiBodies({
  yes,
  question,
  register,
  registerNames,
  validations,
  errors,
}) {
  return (
    <div>
      <p>{question}</p>
      <input type="date" {...register(registerNames.date, validations.date)} />
      <div>
        {errors[registerNames.date] && (
          <span className="errorNotif">
            {errors[registerNames.date].message}
          </span>
        )}
      </div>
      {yes ? (
        <div>
          <input
            type="text"
            placeholder="ანტისხეულების რაოდენობა"
            {...register(registerNames.number, validations.number)}
          />
          <div>
            {errors[registerNames.number] && (
              <span className="errorNotif">
                {errors[registerNames.number].message}
              </span>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Covid() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const covidInfo = useSelector(state => state.user.covidInfo);

  useEffect(() => {
    reset(covidInfo);
  }, [reset, covidInfo]);

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

  const onSubmit = (data, isValid) => {
    if (isValid) {
      dispatch(addCovidInfo(data));
      push("/vaccination");
    }
  };

  useEffect(() => {
    decideButtonState(isValid);
  }, [errors, isValid]);

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
            validations={validations.requiredValidation}
          />
          {errors.hadCovid && (
            <span className="errorNotif">{errors.hadCovid.message}</span>
          )}
          {hadCovid === "კი" && (
            <RadioButtonsGroup
              question={questions.covid.ifYes}
              register={register}
              registerName="antisxeulebi"
              validations={validations.requiredValidation}
            />
          )}
          {errors.antisxeulebi && (
            <span className="errorNotif">{errors.antisxeulebi.message}</span>
          )}
          {antisxeulebi === "კი" && hadCovid === "კი" ? (
            <AntiBodies
              yes={true}
              question="თუ გახსოვს, გთხოვ მიუთითე მიახლოებითი თარიღი და რაოდენობა ანტისხეულების*"
              register={register}
              registerNames={{
                date: "antibodiesDate",
                number: "antiBodies",
              }}
              validations={validations.antiBodies}
              errors={errors}
            />
          ) : antisxeulebi === "არა" && hadCovid === "კი" ? (
            <AntiBodies
              yes={false}
              question="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), როდის გქონდა კოვიდ19"
              register={register}
              registerNames={{ date: "covidDate" }}
              validations={validations.antiBodies}
              errors={errors}
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
          path="/identification"
        />
        <NavigationButton
          direction="right"
          disabled={disabled}
          formId="covidForm"
        />
      </div>
    </div>
  );
}

export default Covid;
