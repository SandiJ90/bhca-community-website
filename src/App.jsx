import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayouts";

import Home from "../src/pages/Home";
import Events from "../src/pages/Events";
import News from "../src/pages/News";
import ActionPlan from "../src/pages/ActionPlan";
import Volunteer from "../src/pages/Volunteer";
import Contact from "../src/pages/Contact";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/action-plan" element={<ActionPlan />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}