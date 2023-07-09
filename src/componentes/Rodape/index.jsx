import styled from "@emotion/styled"
import { Col, Row } from "react-grid-system"
import Tipografia from "../Tipografia"

const Footer = styled.footer`
  background: ${(props) => props.theme.cores.primarias.preto};
  padding: ${(props) => props.theme.espacamentos.s};
  color: ${(props) => props.theme.cores.branco};
`

export default function Rodape() {
  return (
    <>
      <Footer>
        <Row align="center">
          <Col style={{ textAlign: "center" }}>
            <Tipografia variante="body2" componente="body2">
              2023 © Desenvolvido por Samuel / Alura | Projeto fictício sem fins
              comerciais.
            </Tipografia>
          </Col>
        </Row>
      </Footer>
    </>
  )
}
