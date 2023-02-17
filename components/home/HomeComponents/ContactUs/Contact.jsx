import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t99vpdg",
        "template_9q7g5vk",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_TOKEN
      )
      .then(
        (result) => {
          toast.success("Email has been sent successfully");
        },
        (error) => {
          toast.error("There has been an error. Please try again");
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" id="name" name="Name" required />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="Email"
          required
        />
        <select name="Subject" required>
          <option>General</option>
          <option>Purchase</option>
          <option>Products</option>
          <option>Articles</option>
        </select>
        <textarea required placeholder="Message" name="Message"></textarea>
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
