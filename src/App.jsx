import Cabecalho from "./componentes/Cabecalho"
import Estilos from "./componentes/EstilosGlobais"
import ProvedorTema from "./componentes/ProvedorTema"
import Rodape from "./componentes/Rodape"
import { AppProvider } from "./contexto/AppContext"
import PaginaInicial from "./paginas/PaginaInicial"

export default function App() {
  return (
    <>
      <AppProvider>
        <ProvedorTema>
          <Estilos />
          <Cabecalho />
          <PaginaInicial />
          <Rodape />
        </ProvedorTema>
      </AppProvider>
    </>
  )
}
