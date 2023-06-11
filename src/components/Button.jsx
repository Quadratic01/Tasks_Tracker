const Button = ({ text, color, onClick }) => {
    return (
      <button syle={{ backgroundColor: color }} className="btn" onClick={onClick}>{" "}
        {text}
      </button>
    )
  }
  
  export default Button