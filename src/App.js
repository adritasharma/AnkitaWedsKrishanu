import logo from './logo.svg';
import './App.css';
import { Navbar } from "./Navbar";
import { Banner } from "./Sections/Banner";
import { Timer } from "./Sections/Timer";
import { Whenandwhere } from "./Sections/Whenandwhere";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <div className="container">
      <Timer/>
      <Whenandwhere/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
