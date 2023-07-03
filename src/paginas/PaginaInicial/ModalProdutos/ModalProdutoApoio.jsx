import styled from "@emotion/styled"

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`

const ModalContainer = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 4px;
  overflow-y: auto;
  max-height: calc(100vh - 40px);
`

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`

const ModalCardProduto = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <ModalWrapper>
      <ModalContainer>{children}</ModalContainer>
      <ModalBackdrop onClick={onRequestClose} />
    </ModalWrapper>
  )
}

export default ModalProdutos
