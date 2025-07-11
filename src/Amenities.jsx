// components/DisplayAmenities.jsx
import { useState } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PetsIcon from "@mui/icons-material/Pets";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PoolIcon from "@mui/icons-material/Pool";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import LocalCarWashOutlinedIcon from '@mui/icons-material/LocalCarWashOutlined';
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import CloseIcon from "@mui/icons-material/Close";


const amenitiesList = [
  { label: "Free parking spot", icon: <LocalParkingIcon />, name: "parking" },
  { label: "WIFI", icon: <WifiIcon />, name: "wifi" },
  { label: "TV", icon: <LiveTvIcon />, name: "tv" },
  { label: "Coin Laundry", icon: <LocalLaundryServiceIcon />, name: "laundry" },
  { label: "Pets allowed", icon: <PetsIcon />, name: "pets" },
  { label: "Cafeteria", icon: <RestaurantIcon />, name: "cafeteria" },
  { label: "Pool", icon: <PoolIcon />, name: "pool" },
  { label: "Security camera", icon: <VideocamOutlinedIcon />, name: "camera" },
  {
    label: "Garden view",
    icon: <EnergySavingsLeafOutlinedIcon />,
    name: "garden",
  },
  { label: "Central aircon", icon: <AirOutlinedIcon />, name: "aircon" },
  { label: "Bicycles", icon: <PedalBikeIcon />, name: "bicycles" },
  { label: "Kitchen", icon: <MicrowaveOutlinedIcon />, name: "kitchen" },
  {
    label: "Refrigerator",
    icon: <KitchenOutlinedIcon />,
    name: "refrigerator",
  },
  {
    label: "Free water - in building",
    icon: <WaterDropOutlinedIcon />,
    name: "water",
  },
  { label: "Dryer", icon: <LocalLaundryServiceOutlinedIcon />, name: "Dryer" },
  {
    label: "Dry Cleaning Service",
    icon: <DryCleaningOutlinedIcon />,
    name: "dryclean",
  },
  { label: "Fitness Center", icon: <FitnessCenterOutlinedIcon />, name: "fit" },
  { label: "Car Wash", icon: <LocalCarWashOutlinedIcon />, name: "carwash" },
];

const Amenities = ({ amenities = [] }) => {
  const matched = amenitiesList.filter((a) => amenities.includes(a.name));

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {matched.map((amenity, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded-lg shadow flex items-center gap-3"
        >
          {amenity.icon}
          <span className="text-gray-800 text-sm">{amenity.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
