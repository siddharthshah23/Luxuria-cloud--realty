import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/footer/Footer";
import Navbar from "../src/components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/home/Home";
import About from "../src/components/aboutus/About";
import Contact from "../src/components/contact/Contact";
import Rental from "../src/components/rentals/Rental";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/rentals" component={Rental} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
