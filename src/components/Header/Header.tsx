import { useEffect } from "react";
import "./Header.scss";

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")!.substring(1);
        const targetElement = document.getElementById(targetId)!;

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      });
    });
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#skill-section">Skills</a>
          </li>
          <li>
            <a href="#project-section">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
