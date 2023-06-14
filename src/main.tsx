import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Counter } from "./App";
import { Goalcounter } from "./Goalcounter";
import { Scorelist } from "./components/scorelist";
import { Newtable } from "./components/datatable";
import { Buttonbtn } from "./Button2";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <div className="main-div">
      <div className="Countries">
        <Goalcounter countryName={"Nepal"} flagUrl={"/Nepal.png"} />
        <Scorelist></Scorelist>
      </div>
      <Newtable></Newtable>
      <div className="Countries2">
        <Goalcounter countryName={"India"} />
        <Scorelist></Scorelist>
      </div>
    </div> */}
    <Buttonbtn></Buttonbtn>
  </React.StrictMode>
);
