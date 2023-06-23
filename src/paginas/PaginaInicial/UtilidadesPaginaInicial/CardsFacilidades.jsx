import { Col } from "react-grid-system"

import Tipografia from "@/componentes/Tipografia"
import styled from "@emotion/styled"

const DivFacilidade = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.espacamentos.s};
`

export default function CardsFacilidades({ imagem, titulo, legenda }) {
  return (
    <>
      <Col xs={12} sm={12} md={4} lg={4}>
        <DivFacilidade>
          <img src={imagem} alt="" />
          <div>
            <Tipografia variante="body2Bold" componente="body2Bold">
              {titulo}
            </Tipografia>
            <Tipografia variante="legenda" componente="legenda">
              {legenda}
            </Tipografia>
          </div>
        </DivFacilidade>
      </Col>
    </>
  )
}
