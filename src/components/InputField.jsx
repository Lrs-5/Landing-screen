function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        className="input-box"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default InputField;