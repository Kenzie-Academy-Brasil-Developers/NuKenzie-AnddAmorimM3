import Logo from "/src/assets/NuKenzie.jpg"
import styles from "./header.module.scss"

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <img src={Logo} alt="logo NuKenzie" />
        </div>
      </header>
    </>
  )
}