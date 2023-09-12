import logo from "./logo.svg";
import "./App.css";

import { ButtonCounter } from "./btn-counter";
import { SvgEditDemo } from "./svgedit-demo";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ButtonCounter></ButtonCounter>

      <hr />
      <SvgEditDemo></SvgEditDemo>
    </div>
  );
}

export default App;
