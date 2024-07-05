import { Route, Routes } from "react-router-dom";
import Home from "./components/common/Home";
import LoginForm from "./components/public/LoginForm";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import './styles/global.css'
import RegisterForm from "./components/public/RegisterForm";
import Products from "./components/public/Products";
import ProductLayout from "./components/public/ProductLayout";


//añadir rutas de admin y cart
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<ProductLayout />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
