import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import useTranslation from "./hooks/useTranslation";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/layout/Home"));
function App() {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
