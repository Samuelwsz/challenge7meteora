import React, { createContext, useState } from "react"

const AppContextCategoria = createContext()

export const AppProviderCategoria = ({ children }) => {
  const [filtroCategoria, setFiltroCategoria] = useState("")

  const atualizarFiltroCategoria = (categoria) => {
    setFiltroCategoria(categoria)
  }

  return (
    <AppContextCategoria.Provider value={{ filtroCategoria, atualizarFiltroCategoria }}>
      {children}
    </AppContextCategoria.Provider>
  )
}

export default AppContextCategoria
