import "./App.css";
import { NavBar } from "./components/navBar/NavBar";
//App,jsx vai praticamente virar as rotas entre os componentes
function App() {
  return (
    <>
      {" "}
      {/*fragment = uma tag vazia*/}
      <NavBar />
      <h1> Home</h1>
    </>
  );
}

export default App;
