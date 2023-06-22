import { Col, Container, Row } from "react-grid-system"

import Tipografia from "@/componentes/Tipografia"
import styled from "@emotion/styled"

import ImgEsquerda from "/imagens/Ícones/x-diamond (2).png"
import ImgMeio from "/imagens/Ícones/arrow-repeat (2).png"
import ImgDireita from "/imagens//Ícones/flower1 (3).png"

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
            <Col xs={12} sm={12} md={3} lg={3}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <img src={ImgEsquerda} alt="" />
                <div>
                  <Tipografia variante="body2Bold" componente="body2Bold">
                    PAGUE PELO PIX
                  </Tipografia>
                  <Tipografia variante="legenda" componente="legenda">
                    Ganhe 5% OFF em pagamentos via PIX
                  </Tipografia>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <img src={ImgMeio} alt="" />
                <div>
                  <Tipografia variante="body2Bold" componente="body2Bold">
                    TROCA GRÁTIS
                  </Tipografia>
                  <Tipografia variante="legenda" componente="legenda">
                    Fique livre para trocar em até 30 dias.
                  </Tipografia>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <img src={ImgDireita} alt="" />
                <div>
                  <Tipografia variante="body2Bold" componente="body2Bold">
                    SUSTENTABILIDADE
                  </Tipografia>
                  <Tipografia variante="legenda" componente="legenda">
                    Moda responsável, que respeita o meio ambiente.
                  </Tipografia>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </DivEstilizada>
    </>
  )
}
