import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import "./styles/main.scss";
import Sobre from "./components/Sobre.jsx";
import Stack from "./components/Stack.jsx";
import Servicos from "./components/Servicos.jsx";
import Projetos from "./components/Projetos.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="blueprint-background">
      <NavBar />
      <Hero />
      <Sobre />
      <Stack />
      <Servicos />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
