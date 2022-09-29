import styles from "./Header.module.css";

import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      {/* <img src={rocket} />   */}
      <h1>
        to<span className={styles.do}>do</span>
      </h1>
    </header>
  );
}