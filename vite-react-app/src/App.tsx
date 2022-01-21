import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useForceUpdate } from "./hooks";
import routes from "./router";
import store from "./store";

function App() {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    store.subscribe(() => {
      forceUpdate();
    });
  });
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
