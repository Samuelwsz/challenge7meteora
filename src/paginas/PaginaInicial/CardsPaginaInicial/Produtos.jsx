import { Col, Container, Row } from "react-grid-system"

import Tipografia from "@/componentes/Tipografia"

import ImgCamiseta from "/imagens/Imagens Cards/Camiseta.png"
import ImgCalca from "/imagens/Imagens Cards/Calça.png"
import ImgTenis from "/imagens/Imagens Cards/Tenis.png"
import ImgJaqueta from "/imagens/Imagens Cards/Jaqueta.png"
import ImgOculos from "/imagens/Imagens Cards/óculos.png"
import ImgBolsa from "/imagens/Imagens Cards/Bolsa.png"

import CardsProdutos from "../UtilidadesPaginaInicial/CardsProdutos"

export default function Produtos() {
  return (
    <>
      <Container>
        <Row justify="center">
          <Col style={{ textAlign: "center" }}>
            <Tipografia variante="h2" componente="h2">
              Produtos que estão bombando!
            </Tipografia>
          </Col>
        </Row>
        <Row>
          <CardsProdutos
            imagem={ImgCamiseta}
            titulo="Camiseta Conforto"
            legenda="Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex."
            preco="R$ 70,00"
          />
          <CardsProdutos
            imagem={ImgCalca}
            titulo="Calça Alfaiataria"
            legenda="Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!"
            preco="R$ 180,00"
          />
          <CardsProdutos
            imagem={ImgTenis}
            titulo="Tênis Chunky"
            legenda="Snicker casual com solado mais alto e modelagem robusta. Modelo unissex."
            preco="R$ 250,00"
          />
          <CardsProdutos
            imagem={ImgJaqueta}
            titulo="Jaqueta Jeans"
            legenda="Modelo unissex oversized com gola de camurça. Atemporal e autêntica!"
            preco="R$ 150,00"
          />
          <CardsProdutos
            imagem={ImgOculos}
            titulo="Óculos Redondo"
            legenda="Armação metálica em grafite com lentes arredondadas. Sem erro!"
            preco="R$ 120,00"
          />
          <CardsProdutos
            imagem={ImgBolsa}
            titulo="Bolsa coringa"
            legenda="Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!"
            preco="R$ 120,00"
          />
        </Row>
      </Container>
    </>
  )
}
