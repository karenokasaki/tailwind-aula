import "./App.css";

import Buttons from "./components/buttons";
import Card from "./components/card";
import Card2 from "./components/card2";
import FormLayout from "./components/formlayout";
import Forms from "./components/forms";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="App bg-slate-100 min-h-screen mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1>Card</h1>
      <Card />
      <Card2 />

      <h1>Icons</h1>
      <Icons />

      <h1>Button</h1>
      <Buttons />

      <h1>Containers</h1>
      <div className="container">
        <h1>Outro container aqui</h1>
        <div className="container">
          <h1>um container dentro do outro</h1>
          <h1>um container dentro do outro</h1>
          <h1>um container dentro do outro</h1>
        </div>
      </div>

      <h1>Forms</h1>
      <Forms />

      <FormLayout />
    </div>
  );
}

export default App;
