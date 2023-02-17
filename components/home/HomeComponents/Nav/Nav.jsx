import styles from "./Nav.module.css";
import { NavData } from "./NavData";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavList}>
        {NavData.map((nav) => (
          <div key={nav.id}>
            <Link href={nav.url}>
              <ul>
                <li className={styles.NavItem}>{nav.name}</li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
