import { useState } from "react";
import Home from "./pages/Home.jsx";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={lightMode ? "app light-mode" : "app"}>
      <Home
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
    </div>
  );
}