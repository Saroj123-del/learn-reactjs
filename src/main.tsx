import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Counter } from "./App";
import { Goalcounter } from "./Goalcounter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="Countries">
      <Goalcounter countryName={"Nepal"} flagUrl={"/Nepal.png"} />
      <Goalcounter countryName={"India"} flagUrl={"/India.png"} />
    </div>
  </React.StrictMode>
);
