import styled from "@emotion/styled"

const BotaoPrimario = styled.button`
  background: ${(props) => props.theme.cores.primarias.preto};
  color: ${(props) => props.theme.cores.branco};
  padding: ${(props) => props.theme.espacamentos.xs}
    ${(props) => props.theme.espacamentos.s};
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.cores.branco};
`

export default function Botao({ children }) {
  return (
    <>
      <BotaoPrimario>{children}</BotaoPrimario>
    </>
  )
}
