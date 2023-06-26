import React from "react"
import ModalCardProduto from "./modalcard"
import styled from "@emotion/styled"
import { AiOutlineClose } from "react-icons/ai"

import ImgChecked from "/imagens/Ícones/check-circle.png"

const DivTopo = styled.header`
  background-color: black;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const IconeTopo = styled.span`
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
`

const SpanIcone = styled.span`
  cursor: pointer;
  margin-top: -10px;
  margin-right: -10px;

  display: flex;
  justify-content: flex-end;
`

const ModalProdutos = ({ isOpen, closeModal, produto }) => {
  if (!produto) {
    return null // Não exibe o modal se não houver produto selecionado
  }

  return (
    <ModalCardProduto isOpen={isOpen} onRequestClose={closeModal}>
      <DivTopo>
        <img src={ImgChecked} alt="" />
        Confira detalhes sobre o produto
        <IconeTopo onClick={closeModal}>
          <AiOutlineClose />
        </IconeTopo>
      </DivTopo>

      <img src={produto.imagem} alt={produto.titulo} />
      <h2>{produto.titulo}</h2>
      <p>{produto.legenda}</p>
      <p>{produto.preco}</p>
    </ModalCardProduto>
  )
}

export default ModalProdutos
