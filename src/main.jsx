import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./route/route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" w-11/12 m-auto overflow-hidden">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
