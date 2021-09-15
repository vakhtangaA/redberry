import React from "react";
import { object } from "prop-types";

function RadioButtonsGroup({ question, register, registerName, validations }) {
  return (
    <div>
      <p>{question.question}</p>
      {question.answers.map((answer) => {
        return (
          <div className="radioItem" key={answer}>
            <input
              {...register(registerName, validations)}
              type="radio"
              value={answer}
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioButtonsGroup;

RadioButtonsGroup.propTypes = {
  questions: object,
};
