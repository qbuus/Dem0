import { useEffect } from "react";
import styles from "./Success.module.css";
import { useStateContext } from "../../pagecontext/PageState";
import { MdOutlineDone } from "react-icons/md";
import { useRouter } from "next/router";

const SuccessComponent = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
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
