import { Switch, Route } from "react-router-dom";

import Identification from "./components/Identification";
import Start from "./components/Start";
import Covid from "./components/Covid";

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
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
