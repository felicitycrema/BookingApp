import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    console.log("🔐 Submitting login with:", { email, password });

    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        { email, password },
        { withCredentials: true }
      );

      setUser(data);
      alert("Login successful!");
      setRedirect(true);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed.");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around py-20">
      <div className="mb-64 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="p-2 px-3 py-2 rounded-2xl border"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="p-2 px-3 py-2 rounded-2xl border"
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600"
          >
            Login
          </button>

          {/* Forgot password link */}
          <div className="text-center py-1 text-gray-500">
            <Link className="underline text-black" to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <div className="text-center py-1 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text-black" to="/register">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// import { useState, useContext } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const { setUser } = useContext(UserContext);

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();
//     console.log("🔐 Submitting login with:", { email, password });

//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       setUser(data);
//       alert("Login successful!");
//       setRedirect(true);
//     } catch (error) {
//       console.error("Login failed:", error.response?.data || error.message);
//       alert("Login failed.");
//     }
//   }

//   if (redirect) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="mt-4 grow flex items-center justify-around py-20">
//       <div className="mb-64 w-full max-w-md">
//         <h1 className="text-4xl font-bold mb-4 text-center">Login</h1>
//         <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <button
//             type="submit"
//             className="bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600"
//           >
//             Login
//           </button>

//           {/* Forgot password link */}
//           <div className="text-center py-1 text-gray-500">
//             <Link className="underline text-black" to="/reset-password">
//               Forgot password?
//             </Link>
//           </div>

//           <div className="text-center py-1 text-gray-500">
//             Don't have an account yet?{" "}
//             <Link className="underline text-black" to="/register">
//               Register now
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import { useState, useContext } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const { setUser } = useContext(UserContext);

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();
//     console.log("🔐 Submitting login with:", { email, password });

//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       setUser(data);
//       alert("Login successful!");
//       setRedirect(true);
//     } catch (error) {
//       console.error("Login failed:", error.response?.data || error.message);
//       alert("Login failed.");
//     }
//   }

//   if (redirect) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="mt-4 grow flex items-center justify-around py-20">
//       <div className="mb-64 w-full max-w-md">
//         <h1 className="text-4xl font-bold mb-4 text-center">Login</h1>
//         <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <button
//             type="submit"
//             className="bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600"
//           >
//             Login
//           </button>
//           <div className="text-center py-1 text-gray-500">
//             Don't have an account yet?{" "}
//             <Link className="underline text-black" to="/register">
//               Register now
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import {useState, useContext} from "react";
// import {Link, Navigate} from "react-router-dom";
// import axios from "axios";
// import {UserContext} from "../UserContext";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const {setUser} = useContext(UserContext);

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/login",
//         {
//           email,
//           password,
//         }
//         // { withCredentials: true }
//       );
//       setUser(userInfo);
//       // console.log("Login successful:", response.data);
//       alert("Login successful!");
//             setRedirect(true);
//     } catch (error) {
//       // console.error("Login error:", error);
//       alert("Login failed.");
//     }
//   }
//   if (redirect) {
//     return <navigate to={'/'} />
//   }

//   return (
//     <div className="mt-4 grow flex items-center justify-around py-20">
//       <div className="mb-64 w-full max-w-md">
//         <h1 className="text-4xl font-bold mb-4 text-center">Login</h1>
//         <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <button className="bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600">
//             Login
//           </button>
//           <div className="text-center py-1 text-gray-500">
//             Don't have an account yet?{" "}
//             <Link className="underline text-black" to="/register">
//               Register now
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
