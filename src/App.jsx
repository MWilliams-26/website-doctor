import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TemplatePreview from "./pages/TemplatePreview";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/t/:slug" element={<TemplatePreview />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
