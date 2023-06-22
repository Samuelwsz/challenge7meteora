import Tipografia from "@/componentes/Tipografia"
import ReceberViaEmail from "./CardsPaginaInicial/ReceberViaEmail"
import Facilidades from "./CardsPaginaInicial/Facilidades"
import Banner from "../../componentes/Banner"
import BuscarPorCategoria from "./CardsPaginaInicial/BuscarPorCategoria"

export default function PaginaInicial() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Banner />
        <BuscarPorCategoria />
        <Facilidades />
        <ReceberViaEmail />
      </div>
    </>
  )
}
