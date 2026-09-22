import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function notifyPortfolioVisit() {
  const sessionKey = "portfolio_visit_notified";

  if (sessionStorage.getItem(sessionKey)) {
    return;
  }

  const visitorData = {
    page: window.location.pathname,
    referrer: document.referrer || "Direct",
    userAgent: navigator.userAgent,
    language: navigator.language || "Unknown",
    screen: `${window.screen.width} × ${window.screen.height}`,
    timezone:
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
  };

  fetch("/api/visitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(visitorData),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        sessionStorage.setItem(sessionKey, "true");
      }
    })
    .catch((error) => {
      console.error("Visitor notification failed:", error);
    });
}

notifyPortfolioVisit();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);