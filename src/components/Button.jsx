function Button({ text, type = "primary", onClick, disabled = false }) {
  let className = "btn ";

  if (disabled) {
    className += "btn-disabled";
  } else if (type === "secondary") {
    className += "btn-secondary";
  } else {
    className += "btn-primary";
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;