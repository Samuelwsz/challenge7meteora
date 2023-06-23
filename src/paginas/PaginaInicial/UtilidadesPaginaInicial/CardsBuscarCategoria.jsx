import styled from "@emotion/styled"
import Tipografia from "@/componentes/Tipografia"
import { Col } from "react-grid-system"
import { Link } from "react-router-dom"

const DivCard = styled.div`
  width: 180px;
  background-color: ${(props) => props.theme.cores.primarias.preto};
  margin: auto;
  overflow: hidden;
  margin-bottom: 20px;
`

const ImgCard = styled.img`
  width: 100%;
  height: auto;
`

const TituloDiv = styled.div`
  text-align: center;
  color: ${(props) => props.theme.cores.branco};
`

export default function CardsBuscarCategoria({ imagem, titulo }) {
  return (
    <>
      <Col xs={12} sm={6} md={4} lg={4} xl={2}>
        <DivCard>
          <Link>
            <ImgCard src={imagem} />
            <TituloDiv>
              <Tipografia variante="body2" componente="body2">
                {titulo}
              </Tipografia>
            </TituloDiv>
          </Link>
        </DivCard>
      </Col>
    </>
  )
}
