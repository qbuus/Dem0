import { useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import styles from "./Cart.module.css";
import { useStateContext } from "../../pagecontext/PageState";
import { urlFor } from "../../LIB/client";
import getStripe from "../../LIB/getStripe";

const Cart = () => {
  const cartRef = useRef();

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className={styles["cart-wrapper"]} ref={cartRef}>
      <div className={styles["cart-container"]}>
        <button
          type="button"
          className={styles["cart-heading"]}
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className={styles["heading"]}>Your Cart</span>
          <span className={styles["cart-num-items"]}>
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className={styles["empty-cart"]}>
            <h3>Your shopping bag is empty</h3>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className={styles["btn"]}
            >
              Continue Shopping
            </button>
          </div>
        )}

        <div className={styles["product-container"]}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className={styles["product"]} key={item._id}>
                <img
                  src={urlFor(item?.images[0])}
                  className={styles["cart-product-image"]}
                />
                <div className={styles["item-desc"]}>
                  <div className={styles["flex"]}>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className={styles["bottom"]}>
                    <div>
                      <p className={styles["quantity-desc"]}>
                        <span
                          className={styles["minus"]}
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className={styles["num"]}>{item.quantity}</span>
                        <span
                          className={styles["plus"]}
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles["remove-item"]}
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={styles["cart-bottom"]}>
            <div className={styles["total"]}>
              <h3>Subtotal:</h3>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
            <div className={styles["btn-container"]}>
              <button
                type="button"
                className={styles["btn"]}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
