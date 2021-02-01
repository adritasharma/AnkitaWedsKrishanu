import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Banner } from "./Sections/Banner";
import { Savethedate } from "./Sections/Savethedate";
import { Timer } from "./Sections/Timer";
import { Bridegroom } from "./Sections/Bridegroom/Bridegroom";
import { Whenandwhere } from "./Sections/Whenandwhere";
import { Timeline } from "./Sections/Timeline";
import { Seperator } from "./Seperator";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App" style={{ background: 'url(' + process.env.PUBLIC_URL + "/images/petal.png" + ')' }}>
      <Navbar />
      <Banner />
      <div className="container">
        <Seperator />
        <Savethedate />
        <Timer />
        <Seperator />
        <Bridegroom />
        <Seperator />
        <Timeline/>
        <Seperator />
        <Whenandwhere />
      </div>
      <Footer />

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
