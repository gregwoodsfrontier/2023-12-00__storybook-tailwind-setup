const CheckBox = () => {
  return (
    <div className="field">
      <label htmlFor="checkbox" className="container">
        Send Out an Event Reminder
        <input type="checkbox" name="checkbox" id="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default CheckBox
