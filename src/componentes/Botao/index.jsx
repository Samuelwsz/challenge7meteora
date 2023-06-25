import styled from "@emotion/styled"

const BotaoPrimario = styled.button`
  background: ${(props) => props.theme.cores.primarias.preto};
  color: ${(props) => props.theme.cores.branco};
  padding: ${(props) => props.theme.espacamentos.xs};
  ${(props) => props.theme.espacamentos.s};
  box-sizing: border-box;
  font-size: ${(props) => props.theme.espacamentos.s};
  line-height: ${(props) => props.theme.espacamentos.s};
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.cores.branco};
`

const BotaoSecundario = styled.button`
  background: ${(props) => props.theme.cores.primarias.roxo};
  color: ${(props) => props.theme.cores.branco};
  padding: ${(props) => props.theme.espacamentos.xs};
  ${(props) => props.theme.espacamentos.s};
  box-sizing: border-box;
  font-size: ${(props) => props.theme.espacamentos.s};
  line-height: ${(props) => props.theme.espacamentos.m};
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.cores.primarias.roxo};
`

export default function Botao({ children, variante = "primaria", onClick }) {
  if (variante === "primaria") {
    return <BotaoPrimario onClick={onClick}>{children}</BotaoPrimario>
  }
  return <BotaoSecundario onClick={onClick}>{children}</BotaoSecundario>
}
