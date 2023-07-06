import styled from "@emotion/styled"

import { AiOutlineClose } from "react-icons/ai"

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
  z-index: 1;
`

const DivModal = styled.div`
  background-color: ${(props) => props.theme.cores.branco};
  width: 400px;
  padding: ${(props) => props.theme.espacamentos.m};
  border-radius: 4px;
`
const SpanIcone = styled.span`
  cursor: pointer;
  margin-top: -10px;
  margin-right: -10px;

  display: flex;
  justify-content: flex-end;
`

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <>
      <ModalOverlay>
        <DivModal>
          <SpanIcone onClick={onClose}>
            <AiOutlineClose />
          </SpanIcone>
          {children}
        </DivModal>
      </ModalOverlay>
    </>
  )
}
