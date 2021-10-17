import * as React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./InputTag.scss";
export default function ComposedTextField(props) {
  const handleChange = (event) => {
    props.setValue(event.target.value, props.name);
  };

  return (
    <div className="inputTag__container">
      <div className="inputTag__containerText default-font">
        {props.label}
      </div>

      <OutlinedInput
        style={{ height: "36px", width: props.width }}
        id="component-outlined"
        className={`inputTag__outlinedInput ${(props.inValidData && props.inValidData===true) && "inputTag__wrongData"}`}
        value={props.value}
        onChange={handleChange}
        label="Name"
        disabled={props.disabled ? true : false}
        placeholder={props.placeholder}
      />
      <FormHelperText id="component-helper-text">
        {props.helperText}
      </FormHelperText>
    </div>
  );
}
