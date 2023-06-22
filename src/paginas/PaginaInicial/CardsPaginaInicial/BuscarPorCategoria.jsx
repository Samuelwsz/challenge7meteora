import { Col, Container, Row } from "react-grid-system"
import Tipografia from "@/componentes/Tipografia"

export default function BuscarPorCategoria() {
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
      </Container>
    </>
  )
}
