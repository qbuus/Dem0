import styles from "./Footer.module.css";
import Contact from "../ContactUs/Contact";
import { Socials } from "./data";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContent}>
        <div className={styles.FooterFlex}>
          <div>
            <Contact />
          </div>
          <div className={styles.FooterInfo}>
            <div className={styles.FooterInfoFlex}>
              <h2>Socials</h2>
              {Socials.map((social, i) => (
                <div className={styles.FooterIcon} key={i}>
                  <a href={social.slug}>{social.icon}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
