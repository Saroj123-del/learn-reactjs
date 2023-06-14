export function Newtable() {
  return (
    <form>
      <div className="hoider">
        <h2 className="header">Score-UK</h2>
      </div>
      <div className="content">
        <div className="forum">
          <label htmlFor="text">Player Name</label>
          <input type="text" id="text" name="text" />
        </div>
        <div className="btn">
          <button type="submit" id="red" className="butn">
            Cancel
          </button>
          <button type="submit" id="green" className="butn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
