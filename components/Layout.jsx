import { useEffect } from "react";
import HeaderTop from "../components/header/header";
import { Footer } from "./home/HomeComponents/Footer/Footer";
import Head from "next/head";
import { useStateContext } from "../pagecontext/PageState";

const Layout = ({ children }) => {
  const {
    cartItems,
    totalPrice,
    setQty,
    totalQuantities,
    qty,
    setCartItems,
    setTotalPrice,
    setTotalQuantities,
  } = useStateContext();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const cartPrice = JSON.parse(localStorage.getItem("totalPrice"));
    const cartquantity = JSON.parse(localStorage.getItem("totalQuantities"));
    const cartQty = JSON.parse(localStorage.getItem("qty"));

    if (cartData) {
      setCartItems(cartData);
      setTotalPrice(cartPrice);
      setTotalQuantities(cartquantity);
      setQty(cartQty);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > -1) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
      localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
      localStorage.setItem("qty", JSON.stringify(qty));
    }
  }, [cartItems]);

  return (
    <div>
      <Head>
        <title>Dem0</title>
      </Head>
      <header>
        <HeaderTop />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
