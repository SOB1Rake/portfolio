import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  const [lang, setLang] = useState("uz");

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} />
    </div>
  );
}