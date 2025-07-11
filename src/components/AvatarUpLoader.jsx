import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

const AvatarUploader = () => {
  const { user, setUser } = useContext(UserContext);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadAvatar = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const { data } = await axios.post("/upload-avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Update user context with new avatar URL
      const updatedUser = { ...user, avatarUrl: data.url };
      setUser(updatedUser);

      // Optionally persist in backend
      await axios.put("/user/avatar", { avatarUrl: data.url });
    } catch (err) {
      console.error("Avatar upload failed", err);
    }
  };

  return (
    <div className="space-y-2">
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={uploadAvatar}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Upload Avatar
      </button>
    </div>
  );
};

export default AvatarUploader;
