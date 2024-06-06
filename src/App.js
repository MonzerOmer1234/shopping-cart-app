import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/header/Navigation";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
