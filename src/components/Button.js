function Button(props) {
  const btnStyle = {
    padding: props.icon && !props.text ? "0 16px" : "0 24px",
    color:"#918E9B",
    display: 'flex',  // Ensure flex display for button
    alignItems: 'center', // Center contents vertically
    justifyContent: 'center'
  };

  // let outline = props.outline ? 'btn-outline' : 'btn-solid';
  const classList = `btn btn-${props.variant} btn-${props.size} ${props.classList}`;

  return (
    <a
      href={props.href}
      className={classList}
      style={btnStyle}
      target={props.target}
      rel="noreferrer"
    >
      {props.icon && <span className="btn__icon">{props.icon}</span>}
      {props.text && <span className="btn__text">{props.text}</span>}
    </a>
  );
}
export default Button;
