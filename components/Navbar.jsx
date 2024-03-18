import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/breakfast" assHref>
          <li className={styles.listItem}>Breakfast</li>
          </Link>
          <Link href="/lunch" assHref>
          <li className={styles.listItem}>Lunch</li>
          </Link>
          <Image src="/img/logo.png" alt="" width="90" height="90" />
          <Link href="/dinner" assHref>          
          <li className={styles.listItem}>Dinner</li>
          </Link>
          <Link href="/snacks" assHref> 
          <li className={styles.listItem}>Snacks</li>
          </Link>
          <Link href="/contact" assHref>
          <li className={styles.listItem}>Contact</li>
          </Link>
          
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;