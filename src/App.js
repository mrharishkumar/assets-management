import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home";
import Login from "./components/Login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
