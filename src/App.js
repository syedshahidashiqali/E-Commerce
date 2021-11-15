import MainComponent from "./components/MainComponent";
import NavBarComponent from "./components/NavBarComponent";
// import OffCanvasComponent from "./components/OffCanvasComponent";

function App() {

  const div = document.querySelector(".show")
  const changeBg = document.getElementsByClassName("navbar-light")
  return (
    <div className="app">
      <NavBarComponent />
      <MainComponent />
    </div>
  );
}

export default App;
