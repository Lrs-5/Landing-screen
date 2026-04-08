function RadioGroup() {
  return (
    <div className="radio-wrapper">
      <p className="radio-title">
        Are you an Agency?<span className="required">*</span>
      </p>

      <div className="radio-options">
        <label className="radio-option">
          <input type="radio" name="agency" defaultChecked />
          <span>Yes</span>
        </label>

        <label className="radio-option">
          <input type="radio" name="agency" />
          <span>No</span>
        </label>
      </div>
    </div>
  );
}

export default RadioGroup;