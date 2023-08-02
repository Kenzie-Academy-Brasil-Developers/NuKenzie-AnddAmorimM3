import { InputNumber } from "./InputNumber/InputNumber"
import { InputText } from "./InputText/InputText"
import { Select } from "./Select/Select"
import { useState } from "react"
import styles from "/src/Components/SectionForm/Form/form.module.scss"

export const Form = ({ addNewValues }) => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  
  const handleSubmit = (e) => {
    e.preventDefault()
    addNewValues({ title, value, category })
    setTitle("")
    setValue("")
    setCategory("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <div className={styles.form}>
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <InputNumber
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <button type="submit">Inserir Valor</button>
        </div>
      </div>
    </form>
  )
}
