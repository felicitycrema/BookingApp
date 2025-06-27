import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/register", {
        name,
        email,
        password,
      });
      console.log("Registered successfully:", response.data);
      alert("Registration successful. Now you can log in");
      // You can redirect or clear fields here
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed.");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around py-20">
      <div className="mb-64 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={registerUser}>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="John Doe"
            className="p-2 px-3 py-2 rounded-2xl border"
          />
          <input
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="your@email.com"
            className="p-2 px-3 py-2 rounded-2xl border"
          />
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="password"
            className="p-2 px-3 py-2 rounded-2xl border"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600">
            Register
          </button>
          <div className="text-center py-1 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

// import {useState} from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const RegisterPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('')

//   function registerUser(ev) {
//     ev.preventDefault();
//     axios.get('http://localhost:4000/test');
//   }
//   return (
//     <div className="mt-4 grow flex items-center justify-around py-20">
//       <div className="mb-64 w-full max-w-md">
//         <h1 className="text-4xl font-bold mb-4 text-center">Register</h1>
//         <form className="flex flex-col gap-4" onSubmit={}>
//           <input
//             type="text"
//             value={name}
//             onChange={ev => setName(ev.target.value)}
//             placeholder="John Doe"
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={ev => setEmail(ev.target.value)}
//             placeholder="your@email.com"
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={ev => setPassword(ev.target.value)}
//             placeholder="password"
//             className="p-2 px-3 py-2 rounded-2xl border"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600">
//             Register
//           </button>
//           <div className="text-center py-1 text-gray-500">
//             Already a member?{" "}
//             <Link className="underline text-black" to="/login">
//               Login
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
