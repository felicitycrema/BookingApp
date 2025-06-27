import { useState } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PetsIcon from "@mui/icons-material/Pets";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PoolIcon from "@mui/icons-material/Pool";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const amenitiesList = [
  { label: "Free parking spot", icon: <LocalParkingIcon />, name: "parking" },
  { label: "WIFI", icon: <WifiIcon />, name: "wifi" },
  { label: "TV", icon: <LiveTvIcon />, name: "tv" },
  { label: "Coin Laundry", icon: <LocalLaundryServiceIcon />, name: "laundry" },
  { label: "Pets", icon: <PetsIcon />, name: "pets" },
  { label: "Cafeteria", icon: <RestaurantIcon />, name: "cafeteria" },
  { label: "Pool", icon: <PoolIcon />, name: "pool" },
];

const Amenities = ({ selected, onChange }) => {
  function handleCbClick(name) {
    if (selected.includes(name)) {
      onChange(selected.filter((item) => item !== name));
    } else {
      onChange([...selected, name]);
    }
  }

  return (
    <div className="mt-2 gap-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {amenitiesList.map((amenity, idx) => (
        <label
          key={idx}
          className={`border p-6 min-h-[100px] flex items-center gap-3 rounded-2xl cursor-pointer hover:bg-gray-100 transition-all shadow-sm ${
            selected.includes(amenity.name) ? "bg-gray-200" : ""
          }`}
        >
          <input
            type="checkbox"
            className="accent-red-500"
            checked={selected.includes(amenity.name)}
            onChange={() => handleCbClick(amenity.name)}
          />
          <div className="text-gray-700 flex items-center gap-2">
            {amenity.icon}
            <span className="text-sm">{amenity.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Amenities;
