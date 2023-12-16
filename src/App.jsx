import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
import Resgistration from "./pages/Worker/Registration"
import Dashboard from './pages/Worker/DashBoard';
import Navbar from './pages/components/Navbar';
import ProductDetailPage from './pages/Worker/ProductDetail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Resgistration />} />
          <Route exact path="/dash" element={<Dashboard />} />
          <Route exact path="/detail" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
