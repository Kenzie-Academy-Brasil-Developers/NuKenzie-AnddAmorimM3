import { Values } from "./Values/Values"
import styles from "/src/Components/SectionValues/sectionValues.module.scss"

export const SectionValues = ({ listValues }) => {

  return (
    <>
      <section className="container">
        <div className={styles.section}>
          <Values values={listValues} />
        </div>
      </section>
    </>
  )
}