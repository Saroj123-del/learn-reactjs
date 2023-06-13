import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Counter } from "./App";
import { Goalcounter } from "./Goalcounter";
import { Scorelist } from "./components/scorelist";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="Countries">
      <Goalcounter countryName={"Nepal"} flagUrl={"/Nepal.png"} />
      <Scorelist></Scorelist>
      <Goalcounter countryName={"India"} />
      <Scorelist></Scorelist>
    </div>
  </React.StrictMode>
);
