import { useState } from "react";
import styles from "./App.module.css";
export function Goalcounter(props: { countryName: string; flagUrl: string }) {
  const [count, setCount] = useState(0);

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
      <div className="image">
        <img src={props.flagUrl}></img>
        <p>Flags of:</p>
        <h2>{props.countryName}</h2>
      </div>
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
    </div>
  );
}
