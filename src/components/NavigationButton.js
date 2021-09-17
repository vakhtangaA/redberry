import React from "react";
import { bool, oneOf } from "prop-types";
import { Link } from "react-router-dom";

function NavigationButton({
  disabled,
  direction,
  path,
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
  return direction === "left" ? (
    <Link to={path}>
      <button className="identificationSubmit">
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
    </Link>
  ) : (
    <button form={formId} type="submit" className="identificationSubmit">
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
