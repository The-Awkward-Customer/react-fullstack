import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import EventsPage from "./pages/eventspage";
import UseStatePage from "./pages/useStatePage";
import CondRendPage from "./pages/condRendPage";
import MapPage from "./pages/mapsPage";
import UseEffectPage from "./pages/useEffectPage";
import PropsPage from "./pages/propsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eventspage" element={<EventsPage />} />
        <Route path="/usestatepage" element={<UseStatePage />} />
        <Route path="/conditionalrendering" element={<CondRendPage />} />
        <Route path="/maps" element={<MapPage />} />
        <Route path="/useeffectpage" element={<UseEffectPage />} />
        <Route path="/propspage" element={<PropsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
