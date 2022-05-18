import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider, QuizProvider, AuthProvider } from "contexts";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
