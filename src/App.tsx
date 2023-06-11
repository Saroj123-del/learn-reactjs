import { useState } from "react";
import styles from "./App.module.css";
export function Counter() {
  const [count, setCount] = useState(0);
  const [backgroundcolor] = useState("#5d4092");
  let errorAbove10 = "No error";
  if (count > 10) {
    errorAbove10 = (
      <p style={{ color: "white" }}>Error cannot count above 10</p>
    );
  }
  return (
    <div className="main">
      <style jsx>
        {`
          p,
          h2 {
            text-align: center;
          }
        `}
      </style>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      {/* <p>This is used to count numbers.</p> */}
      <h2>{count}</h2>
      <div className={styles.btnContainer}>
        <button
          className="decrease-btn"
          onClick={() => {
            console.log("State is decreased", count);
            setCount(count - 1);
          }}
          type="button"
        >
          -1
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            console.log("State is reset", count);
            setCount(0);
          }}
          type="button"
        >
          0
        </button>
        <button
          className="increase-btn"
          onClick={() => {
            console.log("State is increased", count);

            setCount(count + 1);
          }}
          type="button"
        >
          +1
        </button>
      </div>
      {/* {count > 10 ? (
        <p style={{ color: "white" }}>Error cannot count above 10</p>
      ) : (
        "NO error"
      )}
      {count < 0 ? (
        <p style={{ color: "white" }}>Error cannot count below 0</p>
      ) : (
        "No error"
      )} */}
      {errorAbove10}
    </div>
  );
}
