import { createContext, useState } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [filtroProduto, setFiltroProduto] = useState("")

  return (
    <AppContext.Provider
      value={{
        filtroProduto,
        setFiltroProduto,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
