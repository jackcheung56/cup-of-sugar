import React from 'react'

export default (props) =>
  props.fieldType === 'textfield' ? (
    <textarea
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(event) => props.onChange(event)}
      placeholder={props.placeholder}
    />
  ) : (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      autoComplete="false"
    />
  )