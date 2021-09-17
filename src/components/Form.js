import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const validations = {
  name: {
    required: {
      value: true,
      message: "სახელის ველი სავალდებულოა ",
    },
    minLength: {
      value: 3,
      message: "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
    },
    maxLength: {
      value: 255,
      message: "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან",
    },
    pattern: {
      value: /^[A-Za-zა-ჰ]+$/,
      message:
        "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)",
    },
  },
  surname: {
    required: {
      value: true,
      message: "გვარის ველი სავალდებულოა",
    },
    minLength: {
      value: 3,
      message: "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
    },
    maxLength: {
      value: 255,
      message: "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან",
    },
    pattern: {
      value: /^[A-Za-zა-ჰ]+$/,
      message:
        " სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)",
    },
  },
  mail: {
    required: {
      value: true,
      message: "მეილის ველი სავალდებულოა",
    },
    validate: {
      isValidMail: value =>
        /^\S+@\S+\.\S+$/.test(value) || "თქვენს მიერ შეყვანილი მეილი არასწორია",

      isValidRedberryMail: value =>
        /^[A-Za-z0-9._%+-]+@redberry.ge$/.test(value) ||
        "გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)",
    },
  },
};

export default function Form({ handleButtonState, onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const personalInfo = useSelector(state => state.user.personalInfo);

  useEffect(() => {
    reset(personalInfo);
  }, [reset, personalInfo]);

  useEffect(() => {
    handleButtonState(isValid);
  });

  return (
    <div>
      <form
        id="identificationForm"
        onSubmit={handleSubmit(onSubmit)}
        className="identificationForm"
      >
        <div className="inputParentDiv">
          <label>სახელი*</label>
          <input {...register("name", validations?.name)} />

          {errors.name && (
            <span className="errorNotif">{errors.name.message}</span>
          )}
        </div>
        <div className="inputParentDiv">
          <label>გვარი*</label>
          <input {...register("surname", validations?.surname)} />
          {errors.surname && (
            <span className="errorNotif">{errors?.surname?.message}</span>
          )}
        </div>
        <div className="inputParentDiv">
          <label>მეილი*</label>
          <input {...register("mail", validations.mail)}></input>
          {errors.mail && (
            <span className="errorNotif">{errors?.mail?.message}</span>
          )}
        </div>
      </form>
      <div className="requiredText">
        <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
      </div>
    </div>
  );
}
