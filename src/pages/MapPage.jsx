import { Link } from "react-router-dom";
import LiveMap from "../components/LiveMap";

export default function MapPage() {
  return (
    <div>

      <div className="topbar">
        <Link to="/" className="backButton">
          ← Back
        </Link>

        <h2 className="mapTitle">Live Vehicle Location</h2>
      </div>

      <LiveMap />

    </div>
  );
}