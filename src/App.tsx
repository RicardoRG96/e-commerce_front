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
import { AuthProvider } from "./components/public/AuthContext";
import ProductsCategory from "./components/public/ProductsCategory";
import { SearchedProductProvider } from "./components/public/ProductSearchContext";
import ProductSearch from "./components/public/ProductSearch";
import SearchedOrder from "./components/private/SearchedOrder";

function App() {
  return (
    <AuthProvider>
      <SearchedProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/categories" element={<ProductsCategory />} />
          <Route path="/products/categories/:productCategory" element={<Products />} />
          <Route path="/products/product/:productId" element={<ProductLayout />} />
          <Route path="/products/search" element={<ProductSearch />} />
          <Route path="/cart" element={<CartLayout />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/myaccount/account-settings" element={<AccountSettings />} />
          <Route path="/myaccount/orders" element={<OrdersLayout />} />
          <Route path="/myaccount/orders/search/:orderId" element={<SearchedOrder />} />
          <Route path="/myaccount/orders/:orderId" element={<OrderDetailsLayout />} />
        </Routes>
        <Footer />
      </SearchedProductProvider>
    </AuthProvider>
  )
}

export default App
