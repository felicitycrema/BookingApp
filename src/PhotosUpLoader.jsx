import { useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const PhotosUpLoader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/upload-by-link", {
        link: photoLink,
      });
      const updatedPhotos = [...addedPhotos, data.filename];
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
      const updatedPhotos = [...addedPhotos, ...filenames];
      onChange(updatedPhotos);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  const removePhoto = (e, filename) => {
    e.preventDefault();
    onChange(addedPhotos.filter((photo) => photo !== filename));
  };

  const selectAsMainPhoto = (e, filename) => {
    e.preventDefault();
    const addedPhotosWithoutSelected = addedPhotos.filter(
      (photo) => photo !== filename
    );
    const newAddedPhotos = [filename, ...addedPhotosWithoutSelected];
    onChange(newAddedPhotos);
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
        {addedPhotos.length > 0 &&
          addedPhotos.map((link, index) => (
            <div
              key={index}
              className={`h-32 relative ${
                link === addedPhotos[0] ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <img
                className="w-full h-full rounded-2xl object-cover"
                src={"http://localhost:4000/upload/" + link}
                alt="uploaded"
              />

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
                {link === addedPhotos[0] ? (
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
