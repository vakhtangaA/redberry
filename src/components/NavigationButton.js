import React from "react";
import { bool, oneOf } from "prop-types";

function NavigationButton({
  disabled,
  direction,
  formId = "identificationForm",
}) {
  if (disabled) {
    return (
      <button
        form={formId}
        type="submit"
        value=">"
        className="identificationSubmit disabled"
      >
        <i
          className={
            direction === "right"
              ? "arrowBtnRight"
              : direction === "left"
              ? "arrowBtnLeft"
              : ""
          }
        ></i>
      </button>
    );
  }
  return (
    <button
      form="identificationForm"
      type="submit"
      className="identificationSubmit"
    >
      <i
        className={
          direction === "right"
            ? "arrowBtnRight"
            : direction === "left"
            ? "arrowBtnLeft"
            : ""
        }
      ></i>
    </button>
  );
}

export default NavigationButton;

NavigationButton.propTypes = {
  disabled: bool,
  direction: oneOf(["left", "right"]),
};
