import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaInicial from "@/paginas/PaginaInicial"

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
