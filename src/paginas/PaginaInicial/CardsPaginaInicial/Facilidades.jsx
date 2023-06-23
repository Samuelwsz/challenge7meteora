import { Col, Container, Row } from "react-grid-system"

import Tipografia from "@/componentes/Tipografia"
import styled from "@emotion/styled"

import ImgEsquerda from "/imagens/Ícones/x-diamond (2).png"
import ImgMeio from "/imagens/Ícones/arrow-repeat (2).png"
import ImgDireita from "/imagens//Ícones/flower1 (3).png"
import CardsFacilidades from "../UtilidadesPaginaInicial/CardsFacilidades"

const DivEstilizada = styled.div`
  color: ${(props) => props.theme.cores.branco};
  background: ${(props) => props.theme.cores.primarias.preto};
  padding: ${(props) => props.theme.espacamentos.s};
`

export default function Facilidades() {
  return (
    <>
      <DivEstilizada>
        <Container>
          <Row justify="center">
            <Col style={{ textAlign: "center" }}>
              <Tipografia variante="h1" componente="h1">
                Conheça todas as nossas facilidades
              </Tipografia>
            </Col>
          </Row>
          <Row style={{ color: "#DAFF01", padding: "30px" }} justify="center">
            <CardsFacilidades
              imagem={ImgEsquerda}
              titulo="PAGUE PELO PIX"
              legenda="Ganhe 5% OFF em pagamentos via PIX"
            />
            <CardsFacilidades
              imagem={ImgMeio}
              titulo="TROCA GRÁTIS"
              legenda="Fique livre para trocar em até 30 dias."
            />
            <CardsFacilidades
              imagem={ImgDireita}
              titulo="SUSTENTABILIDADE"
              legenda="Moda responsável, que respeita o meio ambiente."
            />
          </Row>
        </Container>
      </DivEstilizada>
    </>
  )
}
