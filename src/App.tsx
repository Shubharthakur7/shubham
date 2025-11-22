import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Container } from "@mui/material";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Container>
    </div>
  );
}
