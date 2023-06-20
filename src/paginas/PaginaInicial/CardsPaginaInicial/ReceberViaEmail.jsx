import { Col, Container, Row } from "react-grid-system"
import styled from "@emotion/styled"

import Tipografia from "@/componentes/Tipografia"
import Botao from "@/componentes/Botao"

const InputEstilizado = styled.input`
  font-size: 16px;
  color: ${(props) => props.theme.cores.preto};
  width: 50%;
  height: 36px;

  border: 1px solid ${(props) => props.theme.cores.primarias.preto};
`

const DivEstilizada = styled.div`
  text-align: center;
  align-itens: center;
  padding: ${(props) => props.theme.espacamentos.xl};
  border: 2px solid ${(props) => props.theme.cores.primarias.preto};
  margin: ${(props) => props.theme.espacamentos.xl};
`

export default function ReceberViaEmail() {
  return (
    <>
      <DivEstilizada>
        <Container>
          <Row justify="center">
            <Col>
              <Tipografia variante="body" componente="body">
                Quer receber nossas novidades, promoções exclusivas e 10% OFF na
                primeira compra? Cadastre-se!
              </Tipografia>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <div
                style={{
                  margin: "20px",
                }}
              >
                <InputEstilizado placeholder="Digite seu email" />
                <Botao variante="secundaria">Buscar</Botao>
              </div>
            </Col>
          </Row>
        </Container>
      </DivEstilizada>
    </>
  )
}
