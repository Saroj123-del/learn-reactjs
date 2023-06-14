export function Buttonbtn() {
  return (
    <div>
      <div className="main-box">
        <button type="button" id="first" className="same-btn">
          Start
        </button>
        <button type="button" id="second" className="same-btn">
          Pause
        </button>
        <button type="button" id="third" className="same-btn">
          Reset
        </button>
      </div>
      <div className="second-box">
        <p className="timer">01:60</p>
      </div>
    </div>
  );
}
