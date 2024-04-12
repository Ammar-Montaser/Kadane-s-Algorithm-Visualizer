/* eslint-disable no-unused-vars */
import "./scss/main.scss";
import ArrayCard from "./views/ArrayCard";
import Input from "./views/Input";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { setMax, setSum, reset } from "./Redux/arraySlice.js";

function App() {
  const arr = useSelector((state) => state.arrayReducer.array);

  const myRef = useRef(null);
  const dispatch = useDispatch();
  const resetState = () => {
    dispatch(reset());
  };
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

      document.getElementById(i).style.color = "red";
      document.getElementById(i).style.border = "5px solid red";
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
      document.getElementById(i).style.color = "limegreen";
      document.getElementById(i).style.border = "5px solid limegreen";
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
            <div className="controlButtons">
              {" "}
              <button className="start" onClick={maxSequence}>
                {" "}
                Start
              </button>
              <button className="reset" onClick={resetState}>
                {" "}
                Reset
              </button>
            </div>
          </div>
          <div className="arrayContainer" ref={myRef}>
            {arr.map((item, i) => (
              <ArrayCard idx={i} key={i} num={item}></ArrayCard>
            ))}
          </div>
        </div>

        <div className="footer">
          <h2 className="footerText">{"Global Maximum: "}</h2>
          <h2 className="footerText">{"Current Sum: "}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
