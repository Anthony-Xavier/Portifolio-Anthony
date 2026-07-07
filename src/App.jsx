import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./styles/main.scss"; // Dica: se o main.scss já importa tudo, você pode remover o App.scss daqui se não for usar

function App() {
  const [count, setCount] = useState(0);

  return (
    // A div agora envelopa o conteúdo e cobre a tela toda
    <div className="blueprint-background"></div>
  );
}

export default App;
