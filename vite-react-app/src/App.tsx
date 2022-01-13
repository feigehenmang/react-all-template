import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./router";
import store from "./store";

function App() {
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
