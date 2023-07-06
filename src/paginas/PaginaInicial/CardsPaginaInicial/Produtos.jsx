import { Col, Container, Row } from "react-grid-system"

import Tipografia from "@/componentes/Tipografia"

import CardsProdutos from "../UtilidadesPaginaInicial/CardsProdutos"
import Botao from "@/componentes/Botao"
import { useContext, useState } from "react"
import ModalProdutos from "../ModalProdutos/modalcardprodutos"

import produtosAPI from "@/json/produtos.json"
import AppContext from "../../../contexto/AppContext"

export default function Produtos() {
  const { filtroProduto } = useContext(AppContext)

  const produtosFiltrados = produtosAPI.filter((produto) =>
    produto.titulo.toLowerCase().includes(filtroProduto.toLowerCase())
  )
  /*
  const produtosFiltrados = produtosAPI.filter((produto) => {
    if (filtroCategoria && filtroProduto) {
      return (
        produto.categoria === filtroCategoria &&
        produto.titulo.toLowerCase().includes(filtroProduto.toLowerCase())
      )
    } else if (filtroCategoria) {
      return produto.categoria === filtroCategoria
    } else if (filtroProduto) {
      return produto.titulo.toLowerCase().includes(filtroProduto.toLowerCase())
    }
    return true
  })
*/
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
