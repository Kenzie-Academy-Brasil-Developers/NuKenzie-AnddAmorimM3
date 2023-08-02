import styles from "./listItems.module.scss"

export const ListItens = ({ id, title, value, category, removeValue }) => {
  return (
    <>
      <li className={styles.li} >
        {category === "Entrada" ? <div className={styles.typeEntry}></div> : <div className={styles.typeExpense}></div>}
        <div className={styles.flexContainer}>
          <div className={styles.titleValueContainer}>
            <h2 className="title3">{title}</h2>
            <h3 className="body">R$ {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })},00</h3>
          </div>
          <div className={styles.titleValueContainer}>
            <h3 className="body">{category}</h3>
            <button onClick={() => removeValue(id)}>Excluir</button>
          </div>
        </div>
      </li>
    </>
  )
}