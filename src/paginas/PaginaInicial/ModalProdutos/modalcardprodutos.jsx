import React from "react"
import styled from "@emotion/styled"
import { AiOutlineClose } from "react-icons/ai"

import ModalCardProduto from "./modalcard"
import ImgChecked from "/imagens/Ícones/check-circle.png"
import { Col, Row } from "react-grid-system"
import Botao from "@/componentes/Botao"
import CaixaDeSelecao from "./CaixaDeSelecao"
import Tipografia from "@/componentes/Tipografia"

const DivTopo = styled.header`
  background-color: ${(props) => props.theme.cores.primarias.preto};
  color: ${(props) => props.theme.cores.branco};
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
const ImgTopo = styled.img`
  width: ${(props) => props.theme.espacamentos.m};
  margin: 10px;
`
const ImgEstilizada = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`
const AreaConteudo = styled.div`
  padding: 10px;
`
const DivSelecao = styled.div`
  display: flex;
  gap: 10px;
`

const ModalProdutos = ({ isOpen, closeModal, produto }) => {
  if (!produto) {
    return null // Não exibe o modal se não houver produto selecionado
  }

  return (
    <ModalCardProduto isOpen={isOpen} onRequestClose={closeModal}>
      <DivTopo>
        <ImgTopo src={ImgChecked} />
        <Tipografia variante="body" componente="h1">
          Confira detalhes sobre o produto
        </Tipografia>
        <IconeTopo onClick={closeModal}>
          <AiOutlineClose />
        </IconeTopo>
      </DivTopo>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <ImgEstilizada src={produto.imagem} alt={produto.titulo} />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <AreaConteudo>
            <Tipografia variante="bodyBold" componente="h1">
              {produto.titulo}
            </Tipografia>
            <Tipografia variante="legenda" componente="legenda">
              {produto.legenda}
            </Tipografia>
            <hr style={{ border: "1px solid black" }} />
            <Tipografia variante="body" componente="body">
              {produto.preco}
            </Tipografia>
            <div style={{ color: "#CCCCCC" }}>
              <Tipografia variante="legenda" componente="legenda">
                Vendido e entregue por Riachuelo
              </Tipografia>
            </div>
            <hr style={{ border: "1px solid #CCCCCC" }} />
            <Tipografia variante="legenda" componente="legenda">
              Cores:
            </Tipografia>
            <DivSelecao>
              <CaixaDeSelecao tituloCaixa="Azul claro" />
              <CaixaDeSelecao tituloCaixa="Offwhite" />
              <CaixaDeSelecao tituloCaixa="Preto" />
            </DivSelecao>
            <Tipografia variante="legenda" componente="legenda">
              Tamanho:
            </Tipografia>
            <DivSelecao>
              <CaixaDeSelecao tituloCaixa="P" />
              <CaixaDeSelecao tituloCaixa="PP" />
              <CaixaDeSelecao tituloCaixa="M" />
              <CaixaDeSelecao tituloCaixa="G" />
              <CaixaDeSelecao tituloCaixa="GG" />
            </DivSelecao>
            <Botao variante="secundaria">Adicionar à sacola</Botao>
          </AreaConteudo>
        </Col>
      </Row>
    </ModalCardProduto>
  )
}

export default ModalProdutos
