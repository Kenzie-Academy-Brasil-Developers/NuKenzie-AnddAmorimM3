import { ListItens } from "./ListItems/ListItens"
import styles from "/src/Components/SectionList/sectionList.module.scss"
export const RenderCards = ({ listValues, removeValues }) => {
    return (
        <>
            <section className={styles.section}>
                <h3 className="title3">Resumo Financeiro</h3>
                {listValues && listValues.length > 0 ? (
                    <ul>
                        {listValues.map((values, index) => {
                            return (
                                <ListItens
                                    key={index}
                                    id={index}
                                    title={values.title}
                                    value={values.value}
                                    category={values.category}
                                    removeValue={removeValues}
                                />
                            )
                        })}
                    </ul>
                ) : (
                    <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
                )}
            </section>
        </>
    )
}