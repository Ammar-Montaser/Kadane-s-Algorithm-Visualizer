import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToArray } from "../Redux/arraySlice";
import { useSelector } from "react-redux";

function Input() {
  const maxNum = useSelector((state) => state.arrayReducer.max);
  const sum = useSelector((state) => state.arrayReducer.sum);
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
      <h2>ADD NUMBERS TO THE ARRAY!</h2>{" "}
      <form>
        <input name="array" value={value} onChange={onChange} type="number" />
        <button onClick={onSubmit}>Add</button>
      </form>{" "}
      <div className="resultInputContainer">
        <h2 className="resultText">{"Global Maximum: " + maxNum}</h2>

        <h2 className="resultText">{"Current Sum: " + sum}</h2>
      </div>
      <div className="colorKey">
        {" "}
        <span className="green"></span>
        <p>Maximum SubArray Solution</p>
        <span className="cyan"></span>
        <p>Scanning Array</p>
        <span className="yellow"></span>
        <p>Added To Array</p>
      </div>
    </div>
  );
}

export default Input;
