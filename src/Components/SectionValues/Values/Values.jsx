import styles from "./values.module.scss"

export const Values = ({ values }) => {
    const totalValues = values.reduce((prevValue, currentValue) => {
        return prevValue + Number(currentValue.value)
    }, 0)

    return (
        <>
            <div className={styles.div}>
                <h2 className="title3">Valor Atual</h2>
                <h3 className="title3">{totalValues.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
            </div>
            <p className="body">O valor se refere ao saldo</p>
        </>
    )
}