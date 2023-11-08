import styled from "styled-components";
import intlTelInput from "intl-tel-input";
import "./form.css";
import "intl-tel-input/build/css/intlTelInput.css";

const input = document.querySelector("#phone");
intlTelInput(input, {
  utilsScript: "path/to/utils.js",
});


export function Input(props) {
  return (
    <input
      id="phone"
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeHolder}
    />
  );
}
