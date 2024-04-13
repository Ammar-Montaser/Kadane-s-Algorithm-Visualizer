/* eslint-disable no-unused-vars */
import "./scss/main.scss";
import ArrayCard from "./views/ArrayCard";
import Input from "./views/Input";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {
  setMax,
  setSum,
  reset,
  addItemToArray,
  toogle,
} from "./Redux/arraySlice.js";

function App() {
  const arr = useSelector((state) => state.arrayReducer.array);

  const loading = useSelector((state) => state.arrayReducer.loading);

  const myRef = useRef(null);
  const dispatch = useDispatch();
  const resetState = () => {
    dispatch(reset());
  };
  const random = async () => {
    dispatch(toogle(true));

    for (let i = 0; i <= 10; i++) {
      let sign = Math.round(Math.random());
      let randomNum = Math.round(Math.random() * 100);
      sign === 0 ? (randomNum *= -1) : (randomNum *= 1);
      await new Promise((resolve) =>
        setTimeout(() => {
          dispatch(addItemToArray(randomNum));

          resolve();
        }, 1000)
      );

      // setTimeout(() => {
      //   dispatch(addItemToArray(randomNum));
      // }, 1000 * i);
    }
    dispatch(toogle(false));
  };

  const maxSequence = async () => {
    for (let i = 0; i < arr.length; i++) {
      document.getElementById(i).style.color = "white";
      document.getElementById(i).style.border = "5px solid yellow";
    }

    //toogle disable button
    dispatch(toogle(true));

    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let start = 0;
    let end = 0;

    // Disabled button when array is empty. DEAD CODE//
    // if (arr.length == 0) {
    //   console.log(0);
    // }

    for (let i = 0; i < arr.length; i++) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );
      sum = sum + arr[i];
      dispatch(setSum(sum));

      document.getElementById(i).style.color = "cyan";
      document.getElementById(i).style.border = "5px solid cyan";
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
    }
    for (let i = start; i <= end; i++) {
      document.getElementById(i).style.color = "limegreen";
      document.getElementById(i).style.border = "5px solid limegreen";
    }
    console.log(start);
    console.log(end);

    dispatch(toogle(false));
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
              <button
                className="start"
                disabled={arr.length == 0 || loading}
                onClick={maxSequence}
              >
                {" "}
                Start
              </button>
              <button
                className="reset"
                disabled={arr.length == 0 || loading}
                onClick={resetState}
              >
                {" "}
                Reset
              </button>
              <button className="random" disabled={loading} onClick={random}>
                Random
              </button>
            </div>
          </div>
          {arr.length == 0 ? (
            <div className="descContainer">
              <h1>Algorithm Explaination</h1>
              <p>
                Kadane&apos;s algorithm efficiently solves the maximum subarray
                problem, finding the contiguous subarray with the largest sum
                within a one-dimensional array of numbers. It does this in
                linear time with a single pass through the array. The key
                insight is that we can build up the maximum sum subarray ending
                at each index i, either by continuing the previous maximum sum
                subarray or starting a new one. At each step, we compare
                extending the current subarray versus starting a new one. By
                keeping track of the current maximum sum and global maximum sum
                seen so far, we can continually update what subarray has the
                biggest total without needing to test all subsets. Elegant in
                its simplicity, Kadane&apos;s algorithm partitions the problem
                space intelligently to solve this optimization challenge in
                optimal linear complexity.
              </p>{" "}
              <h1>Try It Yourself</h1>
            </div>
          ) : (
            <div className="arrayContainer" ref={myRef}>
              {arr.map((item, i) => (
                <ArrayCard idx={i} key={i} num={item}></ArrayCard>
              ))}
            </div>
          )}
        </div>

        <div className="footer">
          <h2 className="footerText">
            &copy; {new Date().getFullYear()} Ammar Montaser
          </h2>
          <h2 className="link">
            <a href="ammarmontaser.com">Visit My Website</a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
