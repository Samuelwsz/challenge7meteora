import React, { useState } from "react"
import Botao from "../Botao"
import styled from "@emotion/styled"
import { FaArrowUp } from "react-icons/fa"

const DivEstilizada = styled.div`
  text-align: right;
`

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 20 
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15) 
  }

  window.addEventListener("scroll", toggleVisibility)

  return (
    <DivEstilizada>
      {isVisible && (
        <Botao variante="secundaria" onClick={scrollToTop}>
          <FaArrowUp />
        </Botao>
      )}
    </DivEstilizada>
  )
}
