import styled from "@emotion/styled"

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const DivModal = styled.div`
  background-color: ${(props) => props.theme.cores.branco};
  width: 700px;
`

export default function ModalCardProduto({ isOpen, children }) {
  if (!isOpen) return null

  return (
    <>
      <ModalOverlay>
        <DivModal>{children}</DivModal>
      </ModalOverlay>
    </>
  )
}
