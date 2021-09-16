import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

import store from "./state/store";
import App from "./App";

// const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
