// import { useState } from "react";
// import WifiIcon from "@mui/icons-material/Wifi";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
// import PetsIcon from "@mui/icons-material/Pets";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
// import PoolIcon from "@mui/icons-material/Pool";
// import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
// import PedalBikeIcon from "@mui/icons-material/PedalBike";
// import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
// import LiveTvIcon from "@mui/icons-material/LiveTv";
// import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
// import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
// import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
// import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
// import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
// import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
// import LocalCarWashOutlinedIcon from '@mui/icons-material/LocalCarWashOutlined';
// import ViewCompactIcon from "@mui/icons-material/ViewCompact";
// import CloseIcon from "@mui/icons-material/Close";

// const amenitiesList = [
//   { label: "Free parking spot", icon: <LocalParkingIcon />, name: "parking" },
//   { label: "WIFI", icon: <WifiIcon />, name: "wifi" },
//   { label: "TV", icon: <LiveTvIcon />, name: "tv" },
//   { label: "Coin Laundry", icon: <LocalLaundryServiceIcon />, name: "laundry" },
//   { label: "Pets allowed", icon: <PetsIcon />, name: "pets" },
//   { label: "Cafeteria", icon: <RestaurantIcon />, name: "cafeteria" },
//   { label: "Pool", icon: <PoolIcon />, name: "pool" },
//   { label: "Security camera", icon: <VideocamOutlinedIcon />, name: "camera" },
//   {
//     label: "Garden view",
//     icon: <EnergySavingsLeafOutlinedIcon />,
//     name: "garden",
//   },
//   { label: "Central aircon", icon: <AcUnitOutlinedIcon />, name: "aircon" },
//   { label: "Bicycles", icon: <PedalBikeIcon />, name: "bicycles" },
//   { label: "Kitchen", icon: <MicrowaveOutlinedIcon />, name: "kitchen" },
//   {
//     label: "Refrigerator",
//     icon: <KitchenOutlinedIcon />,
//     name: "refrigerator",
//   },
//   {
//     label: "Free water - in building",
//     icon: <WaterDropOutlinedIcon />,
//     name: "water",
//   },
//   { label: "Dryer", icon: <LocalLaundryServiceOutlinedIcon />, name: "Dryer" },
//   {
//     label: "Dry Cleaning Service",
//     icon: <DryCleaningOutlinedIcon />,
//     name: "dryclean",
//   },
//   { label: "Fitness Center", icon: <FitnessCenterOutlinedIcon />, name: "fit" },
//   { label: "Car Wash", icon: <LocalCarWashOutlinedIcon />, name: "carwash" },
// ];



// const Amenities = ({ selectedAmenities = [], showAll = false }) => {
//   return (
//     <div className="grid grid-cols-2 gap-y-4 gap-x-6 max-w-xl">
//       {(showAll ? amenitiesList : amenitiesList.slice(0, 10))
//         .filter((a) => selectedAmenities.includes(a.name))
//         .map((a, idx) => (
//           <div key={idx} className="flex items-center gap-3 text-gray-700">
//             <div className="text-red-500">{a.icon}</div>
//             <span className="text-sm">{a.label}</span>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Amenities;

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
  { label: "Dry Cleaning Service", icon: <DryCleaningOutlinedIcon />, name: "dryclean", },
  { label: "Fitness Center", icon: <FitnessCenterOutlinedIcon />, name: "fit" },
  { label: "Car Wash", icon: <LocalCarWashOutlinedIcon />, name: "carwash" },
];

const Amenities = ({ selectedAmenities, onChange }) => {
  function handleCbClick(name) {
    if (selectedAmenities.includes(name)) {
      onChange(selectedAmenities.filter((item) => item !== name));
    } else {
      onChange([...selectedAmenities, name]);
    }
  }

  return (
    <div className="mt-2 gap-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {amenitiesList.map((amenity, idx) => (
        <label
          key={idx}
          className={`border p-6 min-h-[100px] flex items-center gap-3 rounded-2xl cursor-pointer hover:bg-gray-100 transition-all shadow-sm ${
            selectedAmenities.includes(amenity.name) ? "bg-gray-200" : ""
          }`}
        >
          <input
            type="checkbox"
            className="accent-red-500"
            checked={selectedAmenities.includes(amenity.name)}
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
