import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import doctorImg from "../assets/doctor2.png";
import Navbar from "./Navbar";
import NavigationButton from "./NavigationButton";
import RadioButtonsGroup from "./RadioButtonsGroup";
import questions from "./textQuestions";
import { addVaccinationInfo } from "../state/userSlice";
import { useDispatch } from "react-redux";
import { validations } from "./Covid";

function Vaccination() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
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

  const vaccinationInfo = useSelector(state => state.user.vaccinationInfo);

  useEffect(() => {
    reset(vaccinationInfo);
  }, [reset, vaccinationInfo]);

  useEffect(() => {
    decideButtonState(isValid);
  }, [errors, isValid]);

  const onSubmit = (data, isValid) => {
    if (isValid) {
      dispatch(addVaccinationInfo(data));
      push("/advices");
    }
  };

  const isVaccinated = watch("isVaccinated");
  const vaccinationStage = watch("vaccinationStage");
  const whatAreUWaiting = watch("whatAreUWaiting");

  return (
    <div className="identificationParent covidQuestions">
      <Navbar text="REDBERRY" pages="3/4" />
      <div className="identification covidIdentification">
        <form onSubmit={handleSubmit(onSubmit)} id="vaccinationForm">
          <RadioButtonsGroup
            question={questions.vaccination}
            register={register}
            registerName="isVaccinated"
            validations={validations.requiredValidation}
          />
          {errors.isVaccinated && (
            <span className="errorNotif">{errors.isVaccinated.message}</span>
          )}
          {isVaccinated === "კი" ? (
            <RadioButtonsGroup
              question={questions.vaccination.ifYes}
              register={register}
              registerName="vaccinationStage"
              validations={validations.requiredValidation}
            />
          ) : isVaccinated === "არა" ? (
            <RadioButtonsGroup
              question={questions.vaccination.ifNo}
              register={register}
              registerName="whatAreUWaiting"
              validations={validations.requiredValidation}
            />
          ) : null}
          {errors.vaccinationStage && (
            <span className="errorNotif">
              {errors.vaccinationStage.message}
            </span>
          )}
          {errors.whatAreUWaiting && (
            <span className="errorNotif">{errors.whatAreUWaiting.message}</span>
          )}

          {isVaccinated === "კი" &&
            vaccinationStage ===
              "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" && (
              <h5 className="toLeftH5">
                რომ აღარ გადადო, ბარემ ახლავე დარეგისტრირდი
                <a href="https://booking.moh.gov.ge/">
                  https://booking.moh.gov.ge/
                </a>
              </h5>
            )}
          {isVaccinated === "არა" && whatAreUWaiting === "არ ვგეგმავ" ? (
            <h5 className="toLeftH5">
              <a href="https://booking.moh.gov.ge/">
                👉 https://booking.moh.gov.ge/
              </a>
            </h5>
          ) : whatAreUWaiting === "გადატანილი მაქვს და ვგეგმავ აცრას" ? (
            <h5 className="toLeftH5">
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
              <br />
              <div style={{ marginTop: "1rem" }}></div>
              👉 რეგისტრაციის ლინკი -
              <a
                href="https://booking.moh.gov.ge/"
                style={{ marginLeft: ".4rem" }}
              >
                https://booking.moh.gov.ge/
              </a>
            </h5>
          ) : null}
        </form>
        <img src={doctorImg} alt="doctorImage" className="doctorImg"></img>
      </div>
      <div className="buttonsParent">
        <NavigationButton direction="left" disabled={false} path="/questions" />
        <NavigationButton
          direction="right"
          disabled={disabled}
          formId="vaccinationForm"
        />
      </div>
    </div>
  );
}

export default Vaccination;
