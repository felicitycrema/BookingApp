// src/UserContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios
      .get("/profile")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        const message =
          err?.response?.data?.error || err.message || "Unknown error";
        console.warn("User not authenticated:", message);
        setUser(null);
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}

// // src/UserContext.jsx
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     // Always fetch profile, even if user is already set (to avoid stale login state)
//     axios
//       .get("http://localhost:4000/profile", { withCredentials: true })
//       .then((res) => {
//         setUser(res.data);
//       })
//       .catch((err) => {
//         console.warn(
//           "User not authenticated:",
//           err.response?.data || err.message
//         );
//         setUser(null);
//       })
//       .finally(() => {
//         setReady(true);
//       });
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, ready }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// booking/src/NewContext.jsx
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { data } from 'autoprefixer';

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [ready, setReady] = useState(false);
//   useEffect( () => {
//     if (!user) {
//        axios.get('/profile').then(({ data }) => {
//          setUser(data);
//          setReady(true);
//       });
//   }
// }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, ready, setReady }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
