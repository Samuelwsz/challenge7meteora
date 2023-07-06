import { Col, Container, Row } from "react-grid-system"
import Tipografia from "@/componentes/Tipografia"

import Botao from "@/componentes/Botao"
import CardsBuscarCategoria from "../UtilidadesPaginaInicial/CardsBuscarCategoria"
import categoriaJson from "@/json/categoria.json"
import AppContextCategoria from "@/contexto/FiltrarCategoria"
import { useContext } from "react"
import AppContext from '@/contexto/AppContext'

export default function BuscarPorCategoria() {
  const { atualizarFiltroCategoria } = useContext(AppContextCategoria)
  const { setFiltroProduto } = useContext(AppContext)

  const filtrarPorCategoria = (categoria) => {
    atualizarFiltroCategoria(categoria)
  }

  const resetarFiltros = () => {
    atualizarFiltroCategoria("") // Limpa o filtro de categoria
    setFiltroProduto("") // Limpa o filtro de produto
  }

  return (
    <>
      <Container>
        <Row justify="center">
          <Col style={{ textAlign: "center" }}>
            <Tipografia variante="h2" componente="h2">
              Busque por categoria:
            </Tipografia>
          </Col>
        </Row>
        <Row>
          {categoriaJson.map((card) => {
            return (
              <CardsBuscarCategoria
                key={card.id}
                {...card}
                onClick={() => filtrarPorCategoria(card.titulo)}
              />
            )
          })}
        </Row>
        <Row justify="center" style={{ textAlign: "center" }}>
          <Botao onClick={resetarFiltros}>Limpar</Botao>
        </Row>
      </Container>
    </>
  )
}
