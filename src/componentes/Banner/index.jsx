import React, { useState, useEffect } from "react"
import { Col, Row } from "react-grid-system"
import styled from "@emotion/styled"
import { Swiper, SwiperSlide } from "swiper/react"
import { register } from "swiper/element/bundle"

import Banner1 from "./ImagensTelasGrandes/Banner carousel 1 _ 1440 (1).png"
import Banner2 from "./ImagensTelasGrandes/Banner carousel 2 _ 1440 (1).png"
import Banner3 from "./ImagensTelasGrandes/Banner carousel 3 _ 1440 (1).png"

import Banner1Tablet from "./ImagensTablets/Banner1Tablet.png"
import Banner2Tablet from "./ImagensTablets/Banner2Tablet.png"
import Banner3Tablet from "./ImagensTablets/Banner3Tablet.png"

import Banner1Celular from "./ImagensCelulares/Banner1Celular.png"
import Banner2Celular from "./ImagensCelulares/Banner2Celular.png"
import Banner3Celular from "./ImagensCelulares/Banner3Celular.png"

const BannerImages = [
  {
    id: 1,
    imagem: Banner1,
  },
  {
    id: 2,
    imagem: Banner2,
    frase: "Estilo e qualidade para durar. ",
  },
  {
    id: 3,
    imagem: Banner3,
    frase: "Alto impacto visual, baixo impacto ambiental!",
  },
]
const BannerImagesTablet = [
  {
    id: 1,
    imagem: Banner1Tablet,
  },
  {
    id: 2,
    imagem: Banner2Tablet,
    frase: "Estilo e qualidade para durar. ",
  },
  {
    id: 3,
    imagem: Banner3Tablet,
    frase: "Alto impacto visual, baixo impacto ambiental!",
  },
]
const BannerImagesCelular = [
  {
    id: 1,
    imagem: Banner1Celular,
  },
  {
    id: 2,
    imagem: Banner2Celular,
    frase: "Estilo e qualidade para durar. ",
  },
  {
    id: 3,
    imagem: Banner3Celular,
    frase: "Alto impacto visual, baixo impacto ambiental!",
  },
]
const ImgEstilizado = styled.img`
  width: 100%;
  object-fit: cover;
  position: relative;
`
const FraseImagem = styled.p`
  position: absolute;
  top: 50%;
  color: ${(props) => props.theme.cores.branco};
  font-size: ${(props) => props.theme.espacamentos.m};
  padding: 10px 20px;
  right: 90px;
  transform: translateY(-50%);
`

const FraseImagem3 = styled.p`
  position: absolute;
  top: 50%;
  color: ${(props) => props.theme.cores.branco};
  font-size: ${(props) => props.theme.espacamentos.m};
  padding: 10px 20px;
  left: 90px;
  transform: translateY(-50%);
`

register()
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

export default function Banner() {
  const [bannerImages, setBannerImages] = useState(BannerImages)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width <= 1200)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (isMobile) {
      setBannerImages(BannerImagesCelular)
    } else if (isTablet) {
      setBannerImages(BannerImagesTablet)
    } else {
      setBannerImages(BannerImages)
    }
  }, [isMobile, isTablet])

  return (
    <Row>
      <Col>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "10px",
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation
        >
          {bannerImages.map((item) => (
            <SwiperSlide key={item.id}>
              <ImgEstilizado src={item.imagem} />
              {item.id === 2 && <FraseImagem>{item.frase}</FraseImagem>}
              {item.id === 3 && <FraseImagem3>{item.frase}</FraseImagem3>}
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  )
}
