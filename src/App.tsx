import { Route, Routes } from "react-router-dom";
import Home from "./components/common/Home";
import LoginForm from "./components/public/LoginForm";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import RegisterForm from "./components/public/RegisterForm";
import Products from "./components/public/Products";
import ProductLayout from "./components/public/ProductLayout";
import CartLayout from "./components/private/CartLayout";
import './styles/global.css';


//añadir rutas de admin y myAccount
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
        <Route path="/cart" element={<CartLayout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
