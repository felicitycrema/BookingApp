// import React from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const LocationMap = ({ latitude, longitude, price }) => {
//   if (!latitude || !longitude) {
//     return (
//       <p className="text-sm text-gray-500">
//         No valid coordinates provided to render map.
//       </p>
//     );
//   }

//   const customIcon = L.divIcon({
//     html: `
//       <div style="
//         position: relative;
//         width: 45px;
//         height: 45px;
//         border-radius: 50%;
//         overflow: hidden;
//         box-shadow: 0 2px 8px rgba(0,0,0,0.25);
//         border: 2px solid white;
//       ">
//         <img 
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xP2lEAAxs0TSNtU6UoljFLXkzJBwpeBd-A&s"
//         //   https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=80&q=80
//           style="width: 100%; height: 100%; object-fit: cover;"
//         />
//         <div style="
//           position: absolute;
//           bottom: 0;
//           width: 100%;
//           background: rgba(0,0,0,0.6);
//           color: white;
//           font-size: 14px;
//           font-weight: bold;
//           text-align: center;
//           padding: 2px 0;
//         ">
//           R${price}
//         </div>
//       </div>
//     `,
//     className: "",
//     iconAnchor: [30, 60],
//     popupAnchor: [0, -60],
//   });

//   return (
//     <div className="w-full h-80 rounded-lg overflow-hidden">
//       <MapContainer
//         center={[latitude, longitude]}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[latitude, longitude]} icon={customIcon} />
//       </MapContainer>
//     </div>
//   );
// };

// export default LocationMap;

import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = ({ latitude, longitude, price }) => {
  if (!latitude || !longitude) {
    return (
      <p className="text-sm text-gray-500">
        No valid coordinates provided to render map.
      </p>
    );
  }

  const customIcon = L.divIcon({
    html: `
      <div style="
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      ">
        <div style="
          width: 80px;
          height: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 18px;
          color: #16a34a;
          border: 2px solid white;
        ">
          R${price}
        </div>
        <div style="
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 14px solid white;
          margin-top: -2px;
        "></div>
      </div>
    `,
    className: "",
    iconAnchor: [40, 44], // Center X, Y: bottom of pointer
    popupAnchor: [0, -44],
  });

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default LocationMap;

// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const customIcon = L.divIcon({
//   html: `
//       <div style="
//         width: 40px;
//         height: 40px;
//         border-radius: 50%;
//         overflow: hidden;
//         border: 2px solid white;
//         box-shadow: 0 0 6px rgba(0,0,0,0.25);
//       ">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xP2lEAAxs0TSNtU6UoljFLXkzJBwpeBd-A&s"
//              style="width: 100%; height: 100%; object-fit: cover;" />
//       </div>
//     `,
//   className: "",
//   iconAnchor: [20, 40], // half width, full height
//   popupAnchor: [0, -40],
// });

// // Custom marker icon
// // const customIcon = new L.Icon({
// //   iconUrl:
// //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xP2lEAAxs0TSNtU6UoljFLXkzJBwpeBd-A&s", // example: red pin
// //   // https://cdn-icons-png.flaticon.com/512/684/684908.png
// //   iconSize: [38, 38], // size of the icon
// //   iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
// //   popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
// //     shadowUrl: null,
// //         // "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
// //   shadowSize: [41, 41],
// //     shadowAnchor: null,
// //         // [14, 41],
// // });

// const LocationMap = ({ latitude, longitude, title, address, price }) => {
//   if (!latitude || !longitude) {
//     return (
//       <p className="text-sm text-gray-500">
//         No valid coordinates provided to render map.
//       </p>
//     );
//   }

//   return (
//     <div className="w-full h-80 rounded-lg overflow-hidden">
//       <MapContainer
//         center={[latitude, longitude]}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[latitude, longitude]} icon={customIcon}>
//           <Popup closeOnClick={false} autoClose={false} closeButton={false}>
//             <div className="text-sm">
//               {/* <strong>{title || "Place"}</strong>
//               <br />
//               {address}
//               <br /> */}
//               <span className="fixed text-center text-green-600 font-semibold">R{price}</span>
//             </div>
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default LocationMap;
