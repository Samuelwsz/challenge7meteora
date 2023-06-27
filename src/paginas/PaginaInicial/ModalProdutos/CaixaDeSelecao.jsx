import styled from "@emotion/styled"
import Tipografia from "@/componentes/Tipografia"

const InputEstilizado = styled.input`
  cursor: pointer;
  appearance: none; /* Remove o estilo padrão do checkbox */
  width: 15px;
  height: 15px;
  border: 2px solid ${(props) => props.theme.cores.primarias.cinza};
  border-radius: 50%;
  outline: none; /* Remove a borda ao receber foco */
  margin-right: 8px;

  &:checked {
    border-color: ${(props) =>
      props.theme.cores.primarias.roxo}; /* Cor da borda quando selecionado */
  }
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
