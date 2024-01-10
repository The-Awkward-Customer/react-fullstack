import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import EventsPage from "./pages/eventspage";
import UseStatePage from "./pages/usestate";
import CondRendPage from "./pages/condrend";
import MapPage from "./pages/maps";
import UseEffectPage from "./pages/useeffect";

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
      </Routes>
    </Router>
  </React.StrictMode>
);
