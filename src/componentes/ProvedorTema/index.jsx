import { ThemeProvider } from "@emotion/react"

const tema = {
  cores: {
    branco: "#FFF",
    primarias: {
      preto: "#000000",
      cinza: "#CCCCCC",
      amarelo: "#DAFF01",
      roxo: "#9353ff",
    },
    secundarias: {
      avermelhado: "#EE6471",
      laranja: "#F87F46",
    },
  },
  espacamentos: {
    s: "16px",
    l: "32px",
    m: "24px",
    xs: "8px",
    xl: "48px",
    xxl: "64px",
  },
  fontFamily: "'Inter', sans-serif;",
}

export default function ProvedorTema({ children }) {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>
}
