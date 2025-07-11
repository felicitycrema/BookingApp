import { useState } from "react";
import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";

const HotelListingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    city: "",
    rooms: "",
    baths: "",
    type: "Hotel",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const { name, location, description, city, rooms, baths, type, image } =
      formData;
    if (
      !name ||
      !location ||
      !description ||
      !city ||
      !rooms ||
      !baths ||
      !type ||
      !image
    ) {
      toast.error("Please fill in all fields and upload an image.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const res = await fetch("/api/listings", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Failed to create listing");
      toast.success("Listing created successfully!");

      onClose();
      setFormData({
        name: "",
        location: "",
        description: "",
        city: "",
        rooms: "",
        baths: "",
        type: "Hotel",
        image: null,
      });
      setPreview(null);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create listing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 space-y-6">
          <Dialog.Title className="text-2xl font-bold text-gray-800">
            Create Hotel Listing
          </Dialog.Title>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Listing Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="rooms"
              type="number"
              placeholder="Rooms"
              value={formData.rooms}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="baths"
              type="number"
              placeholder="Baths"
              value={formData.baths}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Hotel">Hotel</option>
              <option value="Apartment">Apartment</option>
              <option value="Resort">Resort</option>
              <option value="Hostel">Hostel</option>
            </select>

            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="col-span-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="col-span-full h-40 w-full object-cover rounded-lg border border-gray-200"
              />
            )}

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="col-span-full border border-gray-300 rounded-lg px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t mt-4">
            <button
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Listing"}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default HotelListingModal;
