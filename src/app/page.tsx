import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
          <Link className={styles.navbar_brand} href='/'>conduit</Link>
          <ul className={styles.navbar_nav}>
            <li className={styles.navbar_item}>
              <Link className={styles.navbar_link} href='/'>Home</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link className={styles.navbar_link} href='/login'>Sign in</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link className={styles.navbar_link} href='/register'>Sign up</Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}
