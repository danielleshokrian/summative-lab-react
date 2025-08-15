import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // optional
import Home from "./pages/Home";         // optional
import Shop from "./pages/Shop";
import AdminPortal from "./pages/AdminPortal";
import { useCoffeeData } from "./hooks/useCoffeeData";

export default function App() {
  // Fetch coffees once, lift state
  const { coffees, setCoffees, loading, error } = useCoffeeData();

  return (
    <Router>
      <Navbar /> 

      {loading && <p>Loading coffees...</p>}
      {error && <p>Error: {error.message}</p>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop coffees={coffees} />} />
        <Route path="/admin" element={<AdminPortal coffees={coffees} setCoffees={setCoffees} />} />
      </Routes>
    </Router>
  );
}
