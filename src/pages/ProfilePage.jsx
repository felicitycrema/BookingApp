import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PlacesPage from "./PlacesPage";
import AccountNav from "./AccountNav";
import axios from "axios";

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
      });
      setRedirect("/");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Password reset state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetError("");
    setResetSuccess("");

    if (newPassword !== confirmPassword) {
      setResetError("New password and confirm password do not match.");
      return;
    }

    try {
      setResetLoading(true);
      await axios.put(
        "http://localhost:4000/user/reset-password",
        { currentPassword, newPassword },
        { withCredentials: true }
      );
      setResetSuccess("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Password reset failed:", error);
      setResetError(
        error?.response?.data?.error || "Failed to update password."
      );
    } finally {
      setResetLoading(false);
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
        <div className="max-w-lg mx-auto text-center">
          <p className="mb-4">
            Logged in as <strong>{user?.name}</strong> ({user?.email})
          </p>

          
          <button
            onClick={logout}
            className="mt-8 py-2 px-8 bg-red-400 text-white rounded-full"
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

// import { useContext, useState, useEffect } from "react";
// import { UserContext } from "../UserContext";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import PlacesPage from "./PlacesPage";
// import AccountNav from "./AccountNav";
// import axios from "axios";

// const ProfilePage = () => {
//   const { ready, user, setUser } = useContext(UserContext);
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const [redirect, setRedirect] = useState(null);
//   // const [file, setFile] = useState(null);
//   // const [previewUrl, setPreviewUrl] = useState(null);
//   // const [uploading, setUploading] = useState(false);

//   let subpage = pathname.split("/")[2] || "profile";

//   const logout = async () => {
//     try {
//       await fetch("http://localhost:4000/logout", {
//         method: "POST",
//         credentials: "include",
//       });
//       setRedirect("/");
//       setUser(null);
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   // const handleFileChange = (e) => {
//   //   const selectedFile = e.target.files[0];
//   //   setFile(selectedFile);
//   //   if (selectedFile) {
//   //     setPreviewUrl(URL.createObjectURL(selectedFile));
//   //   } else {
//   //     setPreviewUrl(null);
//   //   }
//   // };

//   // const uploadAvatar = async () => {
//   //   if (!file) return;
//   //   setUploading(true);
//   //   const formData = new FormData();
//     // formData.append("avatar", file);

//     // try {
//       // const { data } = await axios.post(
//       //   "http://localhost:4000/upload-avatar",
//       //   formData,
//       //   {
//       //     headers: { "Content-Type": "multipart/form-data" },
//       //     withCredentials: true,
//       //   }
//       // );

//       // await axios.put(
//       //   "http://localhost:4000/user/avatar",
//       //   { avatarUrl: data.url },
//       //   { withCredentials: true }
//       // );

//   //     const updatedUser = { ...user, avatarUrl: data.url };
//   //     setUser(updatedUser);
//   //     setFile(null);
//   //     setPreviewUrl(null);
//   //   } catch (err) {
//   //     console.error("Avatar upload failed", err);
//   //   } finally {
//   //     setUploading(false);
//   //   }
//   // };

//   if (!ready) {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   if (ready && !user && !redirect) {
//     return <Navigate to="/login" />;
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />;
//   }

//   return (
//     <div>
//       <AccountNav />
//       {subpage === "profile" && (
//         <div className=" text-center max-w-lg mx-auto">
//           {/* <div className="mb-4">
//             {previewUrl ? (
//               <img
//                 src={previewUrl}
//                 alt="Avatar preview"
//                 className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-blue-400"
//               />
//             ) : user.avatarUrl ? (
//               <img
//                 src={user.avatarUrl}
//                 alt="User avatar"
//                 className="mt-6 w-24 h-24 rounded-full mx-auto object-cover"
//               />
//             ) : (
//               <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white mx-auto">
//                 {user.name?.[0] || "?"}
//               </div>
//             )}
//           </div>

//           <div className="mb-4">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             <button
//               onClick={uploadAvatar}
//               className="bg-blue-600 text-white px-4 py-2 rounded-full mt-2 disabled:opacity-50"
//               disabled={uploading}
//             >
//               {uploading ? "Uploading..." : "Upload Avatar"}
//             </button>
//           </div> */}

//           <p>
//             Logged in as <strong>{user?.name}</strong> ({user?.email})
//           </p>

//           <button
//             onClick={logout}
//             className="py-2 px-8 bg-red-400 text-white rounded-full mt-6"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//       {subpage === "places" && <PlacesPage />}
//     </div>
//   );
// };

// export default ProfilePage;

// import React, { useState } from "react";
// import axios from "axios";

// const ProfilePage = () => {
//   const [avatarFile, setAvatarFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [uploadedUrl, setUploadedUrl] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setAvatarFile(file);

//     if (file) {
//       setPreviewUrl(URL.createObjectURL(file));
//     } else {
//       setPreviewUrl(null);
//     }
//   };

//   const uploadAvatar = async () => {
//     if (!avatarFile) {
//       setError("Please select a file first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("avatar", avatarFile);

//     try {
//       setUploading(true);
//       setError(null);

//       const response = await axios.post(
//         "http://localhost:4000/upload-avatar",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true, // important if you use cookies for auth
//         }
//       );

//       setUploadedUrl(response.data.url);
//     } catch (err) {
//       console.error("Avatar upload failed", err);
//       setError("Upload failed: " + (err.response?.data?.error || err.message));
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Upload Avatar</h2>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="mb-2"
//       />

//       {previewUrl && (
//         <div className="mb-2">
//           <p className="text-sm text-gray-600">Preview:</p>
//           <img
//             src={previewUrl}
//             alt="Avatar preview"
//             className="w-32 h-32 object-cover rounded-full border"
//           />
//         </div>
//       )}

//       <button
//         onClick={uploadAvatar}
//         disabled={uploading}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//       >
//         {uploading ? "Uploading..." : "Upload Avatar"}
//       </button>

//       {uploadedUrl && (
//         <p className="text-green-600 mt-2">
//           Uploaded URL:
//           http://localhost:4000/uploads/avatars/avatar-1751278361302.jpg
//           <a href={uploadedUrl} target="_blank" rel="noreferrer">
//             {uploadedUrl}
//           </a>
//         </p>
//       )}

//       {error && <p className="text-red-600 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default ProfilePage;

// import { useContext, useState } from "react";
// import { UserContext } from "../UserContext";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import PlacesPage from "./PlacesPage";
// import AccountNav from "./AccountNav";

// const ProfilePage = () => {
//   const { ready, user, setUser } = useContext(UserContext);
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const [redirect, setRedirect] = useState(null);

//   let subpage = pathname.split("/")[2] || "profile";

//   const logout = async () => {
//     try {
//       await fetch("http://localhost:4000/logout", {
//         method: "POST",
//         credentials: "include",
//         // withXredentials: "true",
//       });
//       setRedirect("/");
//       setUser(null);
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   if (!ready) {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   if (ready && !user && !redirect) {
//     return <Navigate to="/login" />;
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />;
//   }

//   return (
//     <div>
//       <AccountNav />
//       {subpage === "profile" && (
//         <div className="text-center max-w-lg mx-auto">
//           Logged in as {user?.name} ({user?.email})
//           <br />
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

// export default ProfilePage;

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
