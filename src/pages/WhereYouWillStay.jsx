import axios from "axios";


export default function WhereYouWillStay({ bedroomImage, setBedroomImage }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);

    try {
      const res = await axios.post(
        "http://localhost:4000/upload-bedroom",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      const filename = res.data.filename;
      setBedroomImage(`/uploads/${filename}`);
    } catch (err) {
      console.error("File upload failed:", err);
      alert("Failed to upload image");
    }
  };

  return (
    <div className="my-4">
      <label className="block mb-1 text-sm font-medium">Bedroom Image</label>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {bedroomImage && (
        <div className="mt-2">
          <img
            src={`http://localhost:4000${bedroomImage}`}
            alt="Bedroom Preview"
            className="w-full max-w-md rounded"
          />
        </div>
      )}
    </div>
  );
}
