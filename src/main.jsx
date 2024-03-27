import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ConversationContextProvider } from "./context/ConversationContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ConversationContextProvider>
          <App />
        </ConversationContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
