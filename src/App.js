import { Switch, Route } from "react-router-dom";

import Identification from "./components/Identification";
import Start from "./components/Start";
import Covid from "./components/Covid";
import Advices from "./components/Advices";
import Vaccination from "./components/Vaccination";
import Final from "./components/Final";
import Result from "./components/Result";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/identification">
          <Identification />
        </Route>
        <Route path="/questions">
          <Covid />
        </Route>
        <Route path="/vaccination">
          <Vaccination />
        </Route>
        <Route path="/advices">
          <Advices />
        </Route>
        <Route path="/final">
          <Final />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
