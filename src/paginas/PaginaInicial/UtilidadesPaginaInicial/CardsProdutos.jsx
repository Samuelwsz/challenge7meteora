import styled from "@emotion/styled"
import Tipografia from "@/componentes/Tipografia"
import { Col } from "react-grid-system"

const DivCard = styled.div`
  width: 360px;
  background-color: ${(props) => props.theme.cores.branco};
  margin: auto;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.cores.primarias.cinza};
`

const ImgCard = styled.img`
  width: 100%;
  height: auto;
`

const TituloDiv = styled.div`
  text-align: left;
  color: ${(props) => props.theme.cores.primarias.preto};
  padding: ${(props) => props.theme.espacamentos.s};
`

export default function CardsProdutos({
  imagem,
  titulo,
  legenda,
  preco,
  children,
}) {
  return (
    <>
      <Col xs={12} sm={12} md={6} lg={6} xl={4}>
        <DivCard>
          <ImgCard src={imagem} />
          <TituloDiv>
            <Tipografia variante="body2Bold" componente="body2Bold">
              {titulo}
            </Tipografia>
            <Tipografia variante="legenda" componente="legenda">
              {legenda}
            </Tipografia>
            <Tipografia variante="body2Bold" componente="body2Bold">
              {preco}
            </Tipografia>
            {children}
          </TituloDiv>
        </DivCard>
      </Col>
    </>
  )
}
