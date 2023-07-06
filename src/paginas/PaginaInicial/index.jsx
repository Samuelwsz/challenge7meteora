import ReceberViaEmail from "./CardsPaginaInicial/ReceberViaEmail"
import Facilidades from "./CardsPaginaInicial/Facilidades"
import Banner from "@/componentes/Banner"
import BuscarPorCategoria from "./CardsPaginaInicial/BuscarPorCategoria"
import Produtos from "./CardsPaginaInicial/Produtos"
import ScrollToTop from "@/componentes/ScrollToTop"
import { AppProviderCategoria } from "../../contexto/FiltrarCategoria"

export default function PaginaInicial() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Banner />
        <AppProviderCategoria>
          <BuscarPorCategoria />
          <Produtos />
        </AppProviderCategoria>
        <Facilidades />
        <ReceberViaEmail />
        <ScrollToTop />
      </div>
    </>
  )
}
