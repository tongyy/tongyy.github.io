import Header from "./components/Header";
import Intro from "./components/Intro";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Skills />
      <section id="project-section">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default App;
