import styled from "styled-components";
import intlTelInput from 'intl-tel-input';
import './form.css'
import 'intl-tel-input/build/css/intlTelInput.css';

const input = document.querySelector("#phone");
intlTelInput(input, {
    utilsScript: "path/to/utils.js"
});

export const Input = styled.input`

`
