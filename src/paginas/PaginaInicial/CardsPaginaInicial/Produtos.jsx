import { Col, Container, Row } from "react-grid-system"

import Tipografia from "@/componentes/Tipografia"

import CardsProdutos from "../UtilidadesPaginaInicial/CardsProdutos"
import Botao from "@/componentes/Botao"
import { useContext, useState } from "react"
import ModalProdutos from "../ModalProdutos/modalcardprodutos"

import produtosAPI from "@/json/produtos.json"
import AppContext from "@/contexto/AppContext"
import AppContextCategoria from "@/contexto/FiltrarCategoria"

export default function Produtos() {
  const { filtroProduto } = useContext(AppContext)
  const { filtroCategoria } = useContext(AppContextCategoria)

  const produtosFiltrados = produtosAPI.filter(
    (produto) =>
      (filtroProduto
        ? produto.titulo.toLowerCase().includes(filtroProduto.toLowerCase())
        : true) &&
      (filtroCategoria
        ? produto.titulo &&
          produto.titulo.toLowerCase().includes(filtroCategoria.toLowerCase())
        : true)
  )
  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto)
    setModalIsOpen(true)
  }

  return (
    <>
      <Container>
        <div style={{ margin: "0 0 80px 0" }}>
          <Row justify="center">
            <Col style={{ textAlign: "center" }}>
              <Tipografia variante="h2" componente="h2">
                Produtos que estão bombando!
              </Tipografia>
            </Col>
          </Row>
          <Row>
            {produtosFiltrados.map((produto) => {
              return (
                <CardsProdutos key={produto.id} {...produto}>
                  <div style={{ margin: "10px 0 0 0" }}>
                    <Botao
                      variante="secundaria"
                      onClick={() =>
                        abrirModal({
                          imagem: produto.imagem,
                          titulo: produto.titulo,
                          legenda: produto.legenda,
                          preco: produto.preco,
                        })
                      }
                    >
                      Ver mais
                    </Botao>
                  </div>
                </CardsProdutos>
              )
            })}
          </Row>
        </div>
      </Container>

      <ModalProdutos
        isOpen={modalIsOpen}
        closeModal={closeModal}
        produto={produtoSelecionado}
      />
    </>
  )
}
