import { useEffect } from "react";
import styles from "./Success.module.css";
import { useStateContext } from "../../pagecontext/PageState";
import { useRouter } from "next/router";
import { MdOutlineDone } from "react-icons/md";

const SuccessComponent = () => {
  const router = useRouter();

  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div className={styles.successContainer}>
      <div className={styles.success}>
        <div>
          <p>Thank you for your purchase</p>
        </div>
        <div>
          <MdOutlineDone size={75} color={"green"} />
        </div>
        <div>
          <p>You will be redirected to the home page in a bit</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
