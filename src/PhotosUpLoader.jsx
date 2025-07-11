// import { useState } from "react";
// import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import StarIcon from "@mui/icons-material/Star";
// import axios from "axios";

// /**
//  * Props:
//  * - addedPhotos: array of filenames in the current group
//  * - onChange: function(newPhotos, isReplace = false) => void
//  */
// const PhotosUpLoader = ({ addedPhotos = [], onChange }) => {
//   const [photoLink, setPhotoLink] = useState("");

//   const addPhotoByLink = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/upload-by-link", {
//         link: photoLink,
//       });
//       onChange([data.filename]);
//       setPhotoLink("");
//     } catch (error) {
//       console.error("Upload via link failed:", error);
//     }
//   };

//   const uploadPhoto = async (e) => {
//     const files = e.target.files;
//     const data = new FormData();
//     for (let file of files) {
//       data.append("photos", file);
//     }

//     try {
//       const response = await axios.post("/upload", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       onChange(response.data);
//     } catch (error) {
//       console.error("File upload failed:", error);
//     }
//   };

//   const removePhoto = (e, filename) => {
//     e.preventDefault();
//     const updated = addedPhotos.filter((photo) => photo !== filename);
//     onChange(updated, true);
//   };

//   const selectAsMainPhoto = (e, filename) => {
//     e.preventDefault();
//     const reordered = [filename, ...addedPhotos.filter((p) => p !== filename)];
//     onChange(reordered, true);
//   };

//   return (
//     <div className="space-y-4">
//       {/* Upload by link */}
//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Add using a link..."
//           className="w-full border p-2 rounded-full"
//           value={photoLink}
//           onChange={(e) => setPhotoLink(e.target.value)}
//         />
//         <button
//           onClick={addPhotoByLink}
//           type="button"
//           className="bg-gray-200 px-4 py-1 rounded-2xl"
//         >
//           Add
//         </button>
//       </div>

//       {/* Uploaded photo previews */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Large main photo */}
//         {addedPhotos.length > 0 && (
//           <div className="md:col-span-2 h-64 relative">
//             <img
//               src={`http://localhost:4000/upload/${addedPhotos[0]}`}
//               alt="Main"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//             <button
//               onClick={(e) => removePhoto(e, addedPhotos[0])}
//               className="absolute bottom-2 right-2 text-white bg-black bg-opacity-70 hover:bg-opacity-90 p-1 rounded-full"
//             >
//               <DeleteOutlineIcon fontSize="small" />
//             </button>
//             <button
//               onClick={(e) => selectAsMainPhoto(e, addedPhotos[0])}
//               className="absolute bottom-2 left-2 text-white bg-black bg-opacity-70 hover:bg-opacity-90 p-1 rounded-full"
//             >
//               <StarIcon fontSize="small" />
//             </button>
//           </div>
//         )}

//         {/* Grid of remaining photos */}
//         <div className="grid grid-cols-2 gap-2">
//           {addedPhotos.slice(1).map((photo) => (
//             <div key={photo} className="relative h-32">
//               <img
//                 src={`http://localhost:4000/upload/${photo}`}
//                 alt=""
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//               <button
//                 onClick={(e) => removePhoto(e, photo)}
//                 className="absolute bottom-1 right-1 text-white bg-black bg-opacity-70 hover:bg-opacity-90 p-1 rounded-full"
//               >
//                 <DeleteOutlineIcon fontSize="small" />
//               </button>
//               <button
//                 onClick={(e) => selectAsMainPhoto(e, photo)}
//                 className="absolute bottom-1 left-1 text-white bg-black bg-opacity-70 hover:bg-opacity-90 p-1 rounded-full"
//               >
//                 <StarBorderIcon fontSize="small" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Upload by file */}
//       <label className="h-32 cursor-pointer flex items-center justify-center gap-2 border bg-transparent rounded-2xl p-2 text-gray-600">
//         <input type="file" multiple className="hidden" onChange={uploadPhoto} />
//         <CloudUploadOutlinedIcon />
//         Upload
//       </label>
//     </div>
//   );
// };

// export default PhotosUpLoader;

// import { useState } from "react";
// import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import StarIcon from "@mui/icons-material/Star";
// import axios from "axios";

// /**
//  * Props:
//  * - addedPhotos: array of filenames in the current group
//  * - onChange: function(newPhotos, isReplace = false) => void
//  */
// const PhotosUpLoader = ({ addedPhotos = [], onChange }) => {
//   const [photoLink, setPhotoLink] = useState("");

//   const addPhotoByLink = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/upload-by-link", {
//         link: photoLink,
//       });
//       onChange([data.filename]); // add new photo
//       setPhotoLink("");
//     } catch (error) {
//       console.error("Upload via link failed:", error);
//     }
//   };

//   const uploadPhoto = async (e) => {
//     const files = e.target.files;
//     const data = new FormData();
//     for (let file of files) {
//       data.append("photos", file);
//     }

//     try {
//       const response = await axios.post("/upload", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       onChange(response.data); // add new photos
//     } catch (error) {
//       console.error("File upload failed:", error);
//     }
//   };

//   const removePhoto = (e, filename) => {
//     e.preventDefault();
//     const updated = addedPhotos.filter((photo) => photo !== filename);
//     onChange(updated, true); // replace group with updated list
//   };

//   const selectAsMainPhoto = (e, filename) => {
//     e.preventDefault();
//     const reordered = [filename, ...addedPhotos.filter((p) => p !== filename)];
//     onChange(reordered, true); // replace with reordered list
//   };

//   return (
//     <div className="space-y-4">
//       {/* Upload by link */}
//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Add using a link..."
//           className="w-full border p-2 rounded-full"
//           value={photoLink}
//           onChange={(e) => setPhotoLink(e.target.value)}
//         />
//         <button
//           onClick={addPhotoByLink}
//           type="button"
//           className="bg-gray-200 px-4 py-1 rounded-2xl"
//         >
//           Add
//         </button>
//       </div>

//       {/* Uploaded photo previews */}
//       <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {addedPhotos.map((photo) => (
//           <div
//             key={photo}
//             className={`h-32 relative ${
//               photo === addedPhotos[0] ? "ring-2 ring-blue-500" : ""
//             }`}
//           >
//             <img
//               src={`http://localhost:4000/upload/${photo}`}
//               alt="uploaded"
//               className="w-full h-full object-cover rounded-2xl"
//             />

//             {/* Delete Button */}
//             <button
//               onClick={(e) => removePhoto(e, photo)}
//               className="absolute bottom-1 right-1 text-white bg-black bg-opacity-70 hover:bg-opacity-90 p-1 rounded-full"
//             >
//               <DeleteOutlineIcon fontSize="small" />
//             </button>

//             {/* Main Photo Selector */}
//             <button
//               onClick={(e) => selectAsMainPhoto(e, photo)}
//               className="absolute bottom-1 left-1 text-white bg-black bg-opacity-70 hover:bg-opacity-90 p-1 rounded-full"
//             >
//               {photo === addedPhotos[0] ? (
//                 <StarIcon fontSize="small" />
//               ) : (
//                 <StarBorderIcon fontSize="small" />
//               )}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Upload by file */}
//       <label className="h-32 cursor-pointer flex items-center justify-center gap-2 border bg-transparent rounded-2xl p-2 text-gray-600">
//         <input type="file" multiple className="hidden" onChange={uploadPhoto} />
//         <CloudUploadOutlinedIcon />
//         Upload
//       </label>
//     </div>
//   );
// };

// export default PhotosUpLoader;

// import { useState } from "react";
// import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import StarIcon from "@mui/icons-material/Star";
// import axios from "axios";

// const PhotosUpLoader = ({ addedPhotos = [], onChange }) => {
//   const [photoLink, setPhotoLink] = useState("");

//   const addPhotoByLink = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/upload-by-link", {
//         link: photoLink,
//       });
//       const updatedPhotos = [...addedPhotos, data.filename];
//       onChange(updatedPhotos);
//       setPhotoLink("");
//     } catch (error) {
//       console.error("Upload failed:", error);
//     }
//   };

//   const uploadPhoto = async (e) => {
//     const files = e.target.files;
//     const data = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       data.append("photos", files[i]);
//     }

//     try {
//       const response = await axios.post("/upload", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       const filenames = response.data;
//       const updatedPhotos = [...addedPhotos, ...filenames];
//       onChange(updatedPhotos);
//     } catch (error) {
//       console.error("File upload failed:", error);
//     }
//   };

//   const removePhoto = (e, filename) => {
//     e.preventDefault();
//     onChange(addedPhotos.filter((photo) => photo !== filename));
//   };

//   const selectAsMainPhoto = (e, filename) => {
//     e.preventDefault();
//     const addedPhotosWithoutSelected = addedPhotos.filter(
//       (photo) => photo !== filename
//     );
//     const newAddedPhotos = [filename, ...addedPhotosWithoutSelected];
//     onChange(newAddedPhotos);
//   };

//   return (
//     <>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Add using a link...jpg"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={photoLink}
//           onChange={(e) => setPhotoLink(e.target.value)}
//         />
//         <button
//           onClick={addPhotoByLink}
//           type="button"
//           className="bg-gray-200 px-4 py-1 rounded-2xl"
//         >
//           Add&nbsp;photo
//         </button>
//       </div>

//       <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
//         {Array.isArray(addedPhotos) &&
//           addedPhotos.length > 0 &&
//           addedPhotos.map((link, index) => (
//             <div
//               key={index}
//               className={`h-32 relative ${
//                 link === addedPhotos[0] ? "ring-2 ring-blue-500" : ""
//               }`}
//             >
//               <img
//                 className="w-full h-full rounded-2xl object-cover"
//                 src={"http://localhost:4000/upload/" + link}
//                 alt="uploaded"
//               />

//               {/* Delete Button */}
//               <button
//                 onClick={(e) => removePhoto(e, link)}
//                 className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-80 hover:bg-opacity-90 py-1 px-2 rounded-full"
//               >
//                 <DeleteOutlineIcon fontSize="small" />
//               </button>

//               {/* Star Button */}
//               <button
//                 onClick={(e) => selectAsMainPhoto(e, link)}
//                 className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-80 hover:bg-opacity-90 py-1 px-2 rounded-full"
//               >
//                 {link === addedPhotos[0] ? (
//                   <StarIcon />
//                 ) : (
//                   <StarBorderIcon fontSize="small" />
//                 )}
//               </button>
//             </div>
//           ))}
//       </div>

//       <label className="h-32 mt-2 cursor-pointer flex items-center justify-center gap-2 border bg-transparent rounded-2xl p-2 text-gray-600">
//         <input type="file" multiple className="hidden" onChange={uploadPhoto} />
//         <CloudUploadOutlinedIcon />
//         Upload
//       </label>
//     </>
//   );
// };

// export default PhotosUpLoader;


import { useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const PhotosUpLoader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");
  const safePhotos = Array.isArray(addedPhotos) ? addedPhotos : [];

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/upload-by-link", {
        link: photoLink,
      });
      const updatedPhotos = [...safePhotos, data.filename];
      onChange(updatedPhotos);
      setPhotoLink("");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const uploadPhoto = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    try {
      const response = await axios.post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const filenames = response.data;
      const updatedPhotos = [...safePhotos, ...filenames];
      onChange(updatedPhotos);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  const removePhoto = (e, filename) => {
    e.preventDefault();
    onChange(safePhotos.filter((photo) => photo !== filename));
  };

  const selectAsMainPhoto = (e, filename) => {
    e.preventDefault();
    const photosWithoutSelected = safePhotos.filter(
      (photo) => photo !== filename
    );
    const newPhotos = [filename, ...photosWithoutSelected];
    onChange(newPhotos);
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add using a link...jpg"
          className="w-full border border-gray-300 p-2 rounded-full"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          onClick={addPhotoByLink}
          type="button"
          className="bg-gray-200 px-4 py-1 rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>

      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {safePhotos.length > 0 &&
          safePhotos.map((link, index) => (
            <div
              key={index}
              className={`h-32 relative ${
                link === safePhotos[0] ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <img
                className="w-full h-full rounded-2xl object-cover"
                src={
                  link.startsWith("http")
                    ? link
                    : `http://localhost:4000/upload/${link}`
                }
                alt="uploaded"
              />
              {/* const backendUrl = import.meta.env.VITE_BACKEND_URL;
const imageUrl = link.startsWith("http") ? link : `${backendUrl}/upload/${link}`;
 */}
              {/* Delete Button */}
              <button
                onClick={(e) => removePhoto(e, link)}
                className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-80 hover:bg-opacity-90 py-1 px-2 rounded-full"
              >
                <DeleteOutlineIcon fontSize="small" />
              </button>

              {/* Star Button */}
              <button
                onClick={(e) => selectAsMainPhoto(e, link)}
                className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-80 hover:bg-opacity-90 py-1 px-2 rounded-full"
              >
                {link === safePhotos[0] ? (
                  <StarIcon />
                ) : (
                  <StarBorderIcon fontSize="small" />
                )}
              </button>
            </div>
          ))}
      </div>

      <label className="h-32 mt-2 cursor-pointer flex items-center justify-center gap-2 border bg-transparent rounded-2xl p-2 text-gray-600">
        <input type="file" multiple className="hidden" onChange={uploadPhoto} />
        <CloudUploadOutlinedIcon />
        Upload
      </label>
    </>
  );
};

export default PhotosUpLoader;
