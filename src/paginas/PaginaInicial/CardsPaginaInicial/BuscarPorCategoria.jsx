import { Col, Container, Row } from "react-grid-system"
import Tipografia from "@/componentes/Tipografia"

import CardsBuscarCategoria from "../UtilidadesPaginaInicial/CardsBuscarCategoria"

import categoriaJson from "@/json/categoria.json"

export default function BuscarPorCategoria() {
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
            return <CardsBuscarCategoria key={card.id} {...card} />
          })}
        </Row>
      </Container>
    </>
  )
}

/*
 <CardsBuscarCategoria imagem={ImgCamiseta} titulo="Camiseta" />
          <CardsBuscarCategoria imagem={ImgBolsa} titulo="Bolsas" />
          <CardsBuscarCategoria imagem={ImgCalcados} titulo="Calçados" />
          <CardsBuscarCategoria imagem={ImgCalcas} titulo="Calças" />
          <CardsBuscarCategoria imagem={ImgCasacos} titulo="Casacos" />
          <CardsBuscarCategoria imagem={ImgOculos} titulo="Óculos" />


          
import ImgCamiseta from "/imagens/Categorias/Categoria camiseta.png"
import ImgBolsa from "/imagens/Categorias/Categoria Bolsa.png"
import ImgCalcados from "/imagens/Categorias/Categoria Calçados.png"
import ImgCalcas from "/imagens/Categorias/Categoria calça.png"
import ImgCasacos from "/imagens/Categorias/Categoria casacos.png"
import ImgOculos from "/imagens/Categorias/Categoria óculos.png"
*/
