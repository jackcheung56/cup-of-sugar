import React from "react";

export default function FormInput(props) {
  props.fieldType === "textfield" ? (
    <FormInput
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(event) => props.onChange(event)}
      placeholder={props.placeholder}
    />
  ) : (
    <FormInput
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      autoComplete="false"
    />
  );
}
