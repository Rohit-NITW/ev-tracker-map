import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        EV Live Tracking Dashboard
      </motion.h1>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Project</h2>
        <p>
          A modern web dashboard that displays the live location of a vehicle
          using real-time cloud data and an interactive map interface.
        </p>
      </motion.div>

      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Developers</h2>
        <ul>
          <li><b>Rohit</b> – Full Stack Development</li>
          <li><b>Dinesh</b> – System Development</li>
        </ul>
      </motion.div>

      <motion.div
        className="card"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Tech Stack</h2>
        <ul>
          <li>React + Vite</li>
          <li>Firebase Realtime Database</li>
          <li>React Leaflet Maps</li>
          <li>Modern Web UI</li>
        </ul>
      </motion.div>

      <Link to="/map">
        <motion.button
          className="mapButton"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Live Map
        </motion.button>
      </Link>

    </div>
  );
}