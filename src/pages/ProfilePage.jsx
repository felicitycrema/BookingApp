import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PlacesPage from "./PlacesPage";
import AccountNav from "./AccountNav";

const ProfilePage = () => {
  const { ready, user, setUser } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(null);

  let subpage = pathname.split("/")[2] || "profile";

  const logout = async () => {
    try {
      await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include",
        // withXredentials: "true",
      });
      setRedirect("/");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (!ready) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (ready && !user && !redirect) {
    return <Navigate to="/login" />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user?.name} ({user?.email})
          <br />
          <button
            onClick={logout}
            className="py-2 px-8 bg-red-300 text-white rounded-full mt-4"
          >
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default ProfilePage;

// import { useContext } from "react";
// import { UserContext } from "../UserContext";
// import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
// import PlacesPage from "./PlacesPage";
// import AccountNav from "./AccountNav";

// const AccountPage = () => {
//   const { ready, user, setUser } = useContext(UserContext);
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   let subpage = pathname.split("/")[2];

//   const logout = async () => {
//     try {
//       await fetch("/logout", {
//         method: "POST",
//         credentials: "include",
//       });
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }

//     setUser(null);
//     navigate("/");
//   };
//   // if (!subpage) subpage = "profile";
//   if (!ready) {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   if (ready && !user && !redirect) {
//     return <Navigate to={"/login"} />;
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />
//   }

//   return (
//     <div>
//       <AccountNav />
//       {subpage === "profile" && (
//         <div className="text-center max-w-lg mx-auto">
//           Logged in as {user.name} ({user.email})<br />
//           <button
//             onClick={logout}
//             className="py-2 px-8 bg-red-300 text-white rounded-full mt-4"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//       {subpage === "places" && <PlacesPage />}
//     </div>
//   );
// };

// export default AccountPage;
