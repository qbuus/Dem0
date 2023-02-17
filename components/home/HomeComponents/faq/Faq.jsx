import React from "react";
import dynamic from "next/dynamic";
const Toggle = dynamic(
  () => import("../../../../customComponents/ThemeSwitcher/Toggle"),
  {
    ssr: false,
  }
);
import Link from "next/link";
import { GoQuestion } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import styles from "./Faq.module.css";
import Cart from "../../../cart/Cart";
import { useStateContext } from "../../../../pagecontext/PageState";

export const Faq = () => {
  const { setShowCart, showCart, totalQuantities } = useStateContext();

  return (
    <div className={styles.Banner}>
      <div className={styles.BannerContainer}>
        <Link href="/Faq">
          <div className={styles.BannerFaq}>
            <div>
              <GoQuestion />
            </div>
            <p>Contact & Help</p>
          </div>
        </Link>
        <div className={styles.BannerRight}>
          <div className={styles.CartBox} onClick={() => setShowCart(true)}>
            <button className={styles.Cart} type="button">
              <BsCart />
            </button>
            <div>
              <p>{totalQuantities}</p>
            </div>
          </div>
          <div>
            <Toggle />
          </div>
        </div>
      </div>
      {showCart && <Cart />}
    </div>
  );
};
