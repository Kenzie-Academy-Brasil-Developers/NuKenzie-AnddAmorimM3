export const InputNumber = ({ value, onChange }) => {

    return (
        <>
            <label htmlFor="value">Valor (R$)</label>
            <input type="number" placeholder="1" value={value} onChange={onChange} required/>
        </>
    )
}