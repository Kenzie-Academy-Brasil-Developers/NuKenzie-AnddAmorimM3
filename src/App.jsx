import { useState } from "react"
import { Header } from "./Components/Header/Header"
import { SectionForm } from "./Components/SectionForm/SectionForm"
import { SectionValues } from "./Components/SectionValues/SectionValues"
import { RenderCards } from "./Components/SectionList/SectionList"
const App = () => {
  const [listValues, setListValues] = useState([])

  const addNewValues = (values) => {
    const newValues = { ...values }
    setListValues([...listValues, newValues])
  }
  const removeValues = (removeCard) => {
    const removeItem = listValues.filter((_, index) => index !== removeCard)
    setListValues(removeItem)
  }

  return (
    <>
      <Header />
      <div className="div_container">
        <SectionForm addNewValues={addNewValues} />
        <RenderCards listValues={listValues} removeValues={removeValues} />
      </div>

      <SectionValues listValues={listValues} />

    </>
  )
}

export default App