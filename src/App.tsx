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
import MyAccount from "./components/private/MyAccount";
import AccountSettings from "./components/private/AccountSettings";
import OrdersLayout from "./components/private/OrdersLayout";
import OrderDetailsLayout from "./components/private/OrderDetailsLayout";


//añadir rutas de admin y orderDetails
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductLayout />} />
        <Route path="/cart" element={<CartLayout />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount/account-settings" element={<AccountSettings />} />
        <Route path="/myaccount/orders" element={<OrdersLayout />} />
        <Route path="/myaccount/orders/details" element={<OrderDetailsLayout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
