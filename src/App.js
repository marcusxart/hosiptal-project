import "./app.scss";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/Auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
