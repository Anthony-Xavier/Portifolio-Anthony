import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import "./styles/main.scss";
import "./App.scss";
import Sobre from "./components/Sobre.jsx";
import Stack from "./components/Stack.jsx";
import Servicos from "./components/Servicos.jsx";
import Projetos from "./components/Projetos.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
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
      <WhatsAppFloat />
      <Analytics />
    </div>
  );
}

export default App;
