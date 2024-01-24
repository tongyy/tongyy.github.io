import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <section id="project-section">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;
