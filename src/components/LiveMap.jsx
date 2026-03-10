import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LiveMap() {

// Initial location: NIT Warangal
const [location, setLocation] = useState({
latitude: 17.9835,
longitude: 79.5312
});

useEffect(() => {

const locationRef = ref(database, "location");

onValue(locationRef, (snapshot) => {
  const data = snapshot.val();

  if (data) {
    setLocation({
      latitude: data.latitude,
      longitude: data.longitude
    });
  }
});

}, []);

return (
<MapContainer
center={[location.latitude, location.longitude]}
zoom={16}
style={{ height: "100vh", width: "100%" }}
>

  <TileLayer
    attribution="© OpenStreetMap"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  <Marker position={[location.latitude, location.longitude]} />

</MapContainer>

);
}