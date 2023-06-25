import { Col, Row } from "react-grid-system"
import styled from "@emotion/styled"
import { useState, useEffect } from "react"

import Banner1 from "./Banner carousel 1 _ 1440 (1).png"
import Banner1Tablet from "./Banner1Tablet.png"
import Banner1Celular from "./Banner1Celular.png"

const ImgEstilizado = styled.img`
  width: 100%;
`

const FigureEstilizada = styled.div`
  margin: 0;
`

export default function Banner() {
  const [bannerImage, setBannerImage] = useState("")

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      if (screenWidth >= 1200) {
        setBannerImage(Banner1)
      } else if (screenWidth >= 768) {
        setBannerImage(Banner1Tablet)
      } else {
        setBannerImage(Banner1Celular)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Row>
      <Col>
        <FigureEstilizada>
          <ImgEstilizado src={bannerImage} />
        </FigureEstilizada>
      </Col>
    </Row>
  )
}
