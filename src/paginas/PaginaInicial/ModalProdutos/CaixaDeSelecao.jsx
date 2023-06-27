import styled from "@emotion/styled"
import Tipografia from "@/componentes/Tipografia"

const InputEstilizado = styled.input`
  cursor: pointer;
  border-radius: 50%;
`
const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default function CaixaDeSelecao({ tituloCaixa }) {
  return (
    <>
      <div style={{ margin: "8px 0 0 0" }}>
        <DivEstilizada>
          <label>
            <InputEstilizado type="checkbox" />
          </label>
          <Tipografia variante="legenda" componente="legenda">
            {tituloCaixa}
          </Tipografia>
        </DivEstilizada>
      </div>
    </>
  )
}
