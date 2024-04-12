/* eslint-disable no-unused-vars */
import "./scss/main.scss";
import ArrayCard from "./views/ArrayCard";
import Input from "./views/Input";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { setMax, setSum } from "./Redux/arraySlice.js";

function App() {
  const arr = useSelector((state) => state.arrayReducer.array);
  const maxNum = useSelector((state) => state.arrayReducer.max);
  const sum = useSelector((state) => state.arrayReducer.sum);

  const myRef = useRef(null);
  const dispatch = useDispatch();

  const maxSequence = async () => {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let start = 0;
    let end = 0;
    if (arr.length == 0) {
      console.log(0);
    }

    for (let i = 0; i < arr.length; i++) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );
      sum = sum + arr[i];
      dispatch(setSum(sum));

      document.getElementById(i).style.color = "white";
      document.getElementById(i).style.border = "2px solid black";
      if (sum > max) {
        end = i;
        max = sum;
        dispatch(setMax(max));
      }

      if (sum < 0) {
        start = i + 1;

        sum = 0;
        dispatch(setSum(sum));
      }
      console.log(start);
      console.log(end);
    }
    for (let i = start; i <= end; i++) {
      document.getElementById(i).style.color = "cyan";
      document.getElementById(i).style.border = "2px solid cyan";
    }
  };

  return (
    <>
      <div className="layout">
        <div className="nav">
          <h1 className="title">KADANE&apos;S ALGORITHM VISUALIZER</h1>
        </div>

        <div className="main">
          <div className="input">
            <Input />
            <div className="Control Buttons">
              {" "}
              <button onClick={maxSequence}> start</button>
              <button onClick={maxSequence}> start</button>
            </div>
          </div>
          <div className="arrayContainer" ref={myRef}>
            {arr.map((item, i) => (
              <ArrayCard idx={i} key={i} num={item}></ArrayCard>
            ))}
          </div>
        </div>

        <div className="footer">
          <h1 className="footerText">{"Global Maximum: " + maxNum}</h1>
          <h1 className="footerText">{"Current Sum: " + sum}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
