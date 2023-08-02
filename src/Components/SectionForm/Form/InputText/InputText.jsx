export const InputText = ({ value, onChange }) => {

    return (
        <>
            <label htmlFor="title">Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição" value={value} onChange={onChange} />
            <p>Ex: Compra de Roupas</p>
        </>
    )
}
