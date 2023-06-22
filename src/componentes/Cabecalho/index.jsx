import styled from "@emotion/styled"

import { Col, Row } from "react-grid-system"
import Tipografia from "../Tipografia"
import Botao from "../Botao"

import img from "./Logodesktop.png"

const Header = styled.header`
  background: ${(props) => props.theme.cores.primarias.preto};
  color: ${(props) => props.theme.cores.branco};
  overflow-x: hidden;
`
const InputEstilizado = styled.input`
  font-size: 16px;
  color: ${(props) => props.theme.cores.primarias.preto};
  width: 180px;
  height: 36px;
  margin-right: 28px;
  border: 1px solid ${(props) => props.theme.cores.primarias.preto};
`
const ListaMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`

const ImgEstilizada = styled.img`
  margin: 20px;
`

export default function Cabecalho() {
  return (
    <>
      <Header>
        <Row>
          <Col xs={12} sm={2} md={2} lg={2}>
            <ImgEstilizada src={img} alt="" />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <ListaMenu>
              <Tipografia variante="body2" componente="body2">
                Home
              </Tipografia>
              <Tipografia variante="body2" componente="body2">
                Nossas lojas
              </Tipografia>
              <Tipografia variante="body2" componente="body2">
                Novidades
              </Tipografia>
              <Tipografia variante="body2" componente="body2">
                Promoções
              </Tipografia>
            </ListaMenu>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div
              style={{
                textAlign: "right",
                margin: "20px",
              }}
            >
              <InputEstilizado placeholder="Digite o produto" />
              <Botao>Buscar</Botao>
            </div>
          </Col>
        </Row>
      </Header>
    </>
  )
}
