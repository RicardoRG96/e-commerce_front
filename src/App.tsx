import { Route, Routes } from "react-router-dom";
import Home from "./components/common/Home";
import LoginForm from "./components/public/LoginForm";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import './styles/global.css'
import RegisterForm from "./components/public/RegisterForm";
import Products from "./components/public/Products";


//añadir rutas de admin, cart, y product (solo un producto)
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
