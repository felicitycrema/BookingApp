import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import axios from "axios";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./UserContext"; 
import "leaflet/dist/leaflet.css";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
