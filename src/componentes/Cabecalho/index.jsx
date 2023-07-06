import styled from "@emotion/styled"
import { useContext } from "react"
import { Col, Row } from "react-grid-system"
import Tipografia from "../Tipografia"
import Botao from "../Botao"

import img from "./Logodesktop.png"
import AppContext from "@/contexto/AppContext"

const Header = styled.header`
  background: ${(props) => props.theme.cores.primarias.preto};
  color: ${(props) => props.theme.cores.branco};
  overflow-x: hidden;
`
const InputEstilizado = styled.input`
  font-size: ${(props) => props.theme.espacamentos.s};
  color: ${(props) => props.theme.cores.primarias.preto};
  width: 180px;
  height: ${(props) => props.theme.espacamentos.l};
  margin-right: ${(props) => props.theme.espacamentos.m};
  border: 1px solid ${(props) => props.theme.cores.primarias.preto};
`
const ListaMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: ${(props) => props.theme.espacamentos.m};

  li:hover {
    color: ${(props) => props.theme.cores.primarias.amarelo};
    cursor: pointer;
  }
`
const ImgEstilizada = styled.img`
  margin: 20px;
`

export default function Cabecalho() {
  const { filtroProduto, setFiltroProduto } = useContext(AppContext)

  const handleInputChange = (e) => {
    setFiltroProduto(e.target.value)
  }
  return (
    <>
      <Header>
        <Row>
          <Col xs={1} sm={3} md={3} lg={2}>
            <ImgEstilizada src={img} alt="" />
          </Col>
          <Col xs={12} sm={8} md={8} lg={3}>
            <ListaMenu>
              <li>
                <Tipografia variante="body2" componente="body2">
                  Home
                </Tipografia>
              </li>
              <li>
                <Tipografia variante="body2" componente="body2">
                  Nossas lojas
                </Tipografia>
              </li>
              <li>
                <Tipografia variante="body2" componente="body2">
                  Novidades
                </Tipografia>
              </li>
              <li>
                <Tipografia variante="body2" componente="body2">
                  Promoções
                </Tipografia>
              </li>
            </ListaMenu>
          </Col>
          <Col xs={10} sm={9} md={8} lg={7}>
            <div
              style={{
                textAlign: "right",
                margin: "20px",
              }}
            >
              <InputEstilizado
                placeholder="Digite o produto"
                type="text"
                value={filtroProduto}
                onChange={handleInputChange}
              />
              <Botao>Buscar</Botao>
            </div>
          </Col>
        </Row>
      </Header>
    </>
  )
}
