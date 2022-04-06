import "styles/App.css";
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Register from "pages/Register";
import Products from "pages/Products";
import Cart from "pages/Cart";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <div className="app">
      <NotificationContainer />
      <Header />
      <Cart />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />}>
            <Route path=":categoryId" element={<Products />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
