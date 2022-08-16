import { Route, Switch } from "react-router-dom";

import Assignment1 from "./Pages/Assignment1";
import Assignment2 from "./Pages/Assignment2";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Switch>
          <Route exact path="/">
            <Assignment1 />
          </Route>
          <Route exact path="/assignment1">
            <Assignment1 />
          </Route>
          <Route exact path="/assignment2">
            <Assignment2 />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
