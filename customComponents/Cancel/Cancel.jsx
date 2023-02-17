import { useEffect } from "react";
import styles from "./Cancel.module.css";
import { useStateContext } from "../../pagecontext/PageState";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineCancel } from "react-icons/md";

const CancelComponent = () => {
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
          <p>Your purchase has been canceled</p>
        </div>
        <div>
          <p>Cart has been cleared</p>
        </div>
        <div>
          <MdOutlineCancel size={75} color={"rgb(106, 23, 23)"} />
        </div>
        <div>
          <p>You will be redirected to the home page in a bit</p>
        </div>
        <Link href={`/`}>
          <button>Immediate home page</button>
        </Link>
      </div>
    </div>
  );
};

export default CancelComponent;
