import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchContextProvider from "./context/SearchContext";
import UserContextProvider from "./context/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <SearchContextProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </SearchContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
