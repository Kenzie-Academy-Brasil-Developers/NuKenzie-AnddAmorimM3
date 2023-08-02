import { Form } from "./Form/Form"
import styles from "/src/Components/SectionForm/sectionform.module.scss"

export const SectionForm = ({ addNewValues }) => {
    return (
        <section className={`${styles.section} container`}>
            <Form addNewValues={addNewValues} />
        </section>
    )
}