import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToArray } from "../Redux/arraySlice";
function Input() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const regex = /^-?\d+$/;
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (regex.test(value)) {
      dispatch(addItemToArray(parseInt(value)));
    } else {
      alert(
        "Please enter a valid number! only negative and positive numbers allowed."
      );
    }
  };
  return (
    <div className="inputContainer">
      <h2>ADD NUMBERS TO THE ARRAY!</h2>
      <form>
        <input name="array" value={value} onChange={onChange} type="number" />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default Input;
