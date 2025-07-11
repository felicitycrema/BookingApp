import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

const PlaceMap = ({ address, price }) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            address
          )}`,
          {
            headers: {
              "User-Agent": "MyReactApp/1.0 (crema.zitha@gmail.com)", // ✅ Use your email
              "Accept-Language": "en",
            },
          }
        );
        const data = await response.json();
        if (data.length > 0) {
          setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (err) {
        console.error("Geocoding failed:", err);
      }
    };

    fetchCoordinates();
  }, [address]);

  if (!position)
    return <div className="text-sm text-gray-500">Loading map…</div>;

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-64 rounded-xl z-0"
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="text-sm font-medium">
            {address}
            <br />
            <span className="text-green-600 font-bold">${price}</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default PlaceMap;
