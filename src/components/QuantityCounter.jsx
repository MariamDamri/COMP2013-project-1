// counter with + and -
export default function QuantityCounter({ value, onChange, min }) {
  const plus = () => onChange(value + 1);
  const minus = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <div className="ProductQuantityDiv">
      <button
        className="QuantityBtn"
        onClick={minus}
        disabled={value <= min} // dont go under min lol
      >
        -
      </button>
      <p>{value}</p>
      <button className="QuantityBtn" onClick={plus}>
        +
      </button>
    </div>
  );
}
