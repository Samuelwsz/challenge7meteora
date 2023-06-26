import { Col, Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import { useState } from "react"

import Tipografia from "@/componentes/Tipografia"
import Botao from "@/componentes/Botao"

import Modal from "@/componentes/Modal"

const InputEstilizado = styled.input`
  font-size: ${(props) => props.theme.espacamentos.s};
  color: ${(props) => props.theme.cores.preto};
  width: 50%;
  height: 37px;
  outline: none;

  border: 1px solid ${(props) => props.theme.cores.primarias.preto};
`

const DivEstilizada = styled.div`
  text-align: center;
  align-itens: center;
  padding: ${(props) => props.theme.espacamentos.xl};
  border: 2px solid ${(props) => props.theme.cores.primarias.preto};
  margin: ${(props) => props.theme.espacamentos.xl};
`

export default function ReceberViaEmail() {
  const [email, setEmail] = useState("")
  const [msgAlerta, setMsgAlerta] = useState("")

  const trocarEmail = (event) => {
    setEmail(event.target.value)
  }

  const assinarNewsletter = () => {
    validarEmail(email)
      ? setMsgAlerta(
          `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`
        )
      : setMsgAlerta("Por favor, insira um e-mail válido.")
  }

  const validarEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }


  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <DivEstilizada>
        <Container>
          <Row justify="center">
            <Col>
              <Tipografia variante="body" componente="body">
                Quer receber nossas novidades, promoções exclusivas e 10% OFF na
                primeira compra? Cadastre-se!
              </Tipografia>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <div style={{ margin: "20px" }}>
                <InputEstilizado
                  type="text"
                  value={email}
                  onChange={trocarEmail}
                  placeholder="Digite seu email"
                />
                <Botao
                  variante="secundaria"
                  onClick={() => {
                    assinarNewsletter(), openModal()
                  }}
                >
                  Enviar
                </Botao>
                <div>
                  <Modal isOpen={modalIsOpen} onClose={closeModal}>
                    {msgAlerta && <div>{msgAlerta}</div>}
                  </Modal>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </DivEstilizada>
    </>
  )
}
