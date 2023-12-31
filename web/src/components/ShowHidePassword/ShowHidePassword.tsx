import { useState } from 'react'

import { PasswordField, TextField, Label } from '@redwoodjs/forms'

import Icon from '../Icon/Icon'

const ShowHidePassword = ({ label, name }) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false)

  const handleClick = () => {
    setIsPasswordShowing((prevValue) => !prevValue)
  }

  return (
    <div className="field relative">
      <Label name={name}>{label}</Label>
      {isPasswordShowing ? (
        //tex -input
        <TextField name={name} placeholder="" required />
      ) : (
        // else pw-input
        <PasswordField name={name} placeholder="" required />
      )}

      <button className="absolute right-6 top-8" onClick={handleClick}>
        {isPasswordShowing ? (
          <Icon id="eyeOpened" size={36} />
        ) : (
          <Icon id="eyeClosed" size={36} />
        )}
      </button>
    </div>
  )
}

export default ShowHidePassword
