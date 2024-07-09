import "./css/input.css";

export default function Input(props) {
  const { placeholder, onChange, value } = props;

  return (
    <>
      <input
        value={value}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

