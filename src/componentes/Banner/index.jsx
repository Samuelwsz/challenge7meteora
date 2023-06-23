import { Col, Row } from "react-grid-system"
import styled from "@emotion/styled"

import Banner1 from "./Banner carousel 1 _ 1440 (1).png"
import Banner2 from "./Banner carousel 2 _ 1440 (1).png"
import Banner3 from "./Banner carousel 3 _ 1440 (1).png"

const ImgEstilizado = styled.img`
  width: 100%;
`
/*
 @media (min-width: 500px) and (max-width: 800px) {
    background-image: url(${Banner3});
  }*/

const FigureEstilizada = styled.div`
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
`

export default function Banner() {
  return (
    <Row>
      <Col>
        <FigureEstilizada>
          <ImgEstilizado src={Banner1} />
        </FigureEstilizada>
      </Col>
    </Row>
  )
}
