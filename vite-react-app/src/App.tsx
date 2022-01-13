import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./router";

function App() {
  return (
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
  );
}

export default App;
