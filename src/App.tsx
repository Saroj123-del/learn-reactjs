import { useState } from "react";
import styles from "./App.module.css";
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <style jsx>
        {`
          p,
          h2 {
            text-align: center;
          }
        `}
      </style>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <p>This is used to count numbers.</p>
      <h2>Count:{count}</h2>
      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            console.log("State is increased", count);
            setCount(count + 1);
          }}
          type="button"
        >
          Increase(+1)
        </button>
        <button
          onClick={() => {
            console.log("State is decreased", count);
            setCount(count - 1);
          }}
          type="button"
        >
          Decrease(-1)
        </button>
        <button
          onClick={() => {
            console.log("State is reset", count);
            setCount(0);
          }}
          type="button"
        >
          Reset(0)
        </button>
      </div>
    </div>
  );
}
