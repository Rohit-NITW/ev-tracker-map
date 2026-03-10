import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LiveMap() {

  const [location, setLocation] = useState(null);

  useEffect(() => {

    const locationRef = ref(db, "location");

    onValue(locationRef, (snapshot) => {

      const data = snapshot.val();
      console.log("Firebase data:", data);

      if (!data) return;

      const lat = Number(data.latitude);
      const lng = Number(data.longitude);

      if (!isNaN(lat) && !isNaN(lng)) {
        setLocation([lat, lng]);
      }

    });

  }, []);

  if (!location) {
    return (
      <div style={{textAlign:"center", padding:"40px"}}>
        Waiting for location data...
      </div>
    );
  }

  return (
    <MapContainer
      center={location}
      zoom={16}
      style={{ height: "90vh", width: "100%" }}
    >

      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={location} />

    </MapContainer>
  );
}