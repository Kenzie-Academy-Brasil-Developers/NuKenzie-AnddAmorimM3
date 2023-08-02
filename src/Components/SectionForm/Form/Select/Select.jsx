export const Select = ({ value, onChange }) => {
    return (
        <>
            <label htmlFor="category">Tipo de Valor</label>
            <select id="category" value={value} onChange={onChange}>
                <option value="category">Selecione uma categoria</option>
                <option value="Entrada"> Entrada</option>
                <option value="Despesa"> Despesa</option>
            </select>
        </>
    )
}