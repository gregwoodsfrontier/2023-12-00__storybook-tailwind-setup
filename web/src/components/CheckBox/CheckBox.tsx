import { CheckboxField, Label } from '@redwoodjs/forms'

const CheckBox = ({ label, name, ...rest }) => {
  return (
    <div className="field">
      <CheckboxField name={name} id={name} {...rest} />
      <Label name={name} className="container">
        {label}
      </Label>
    </div>
  )
}

export default CheckBox
