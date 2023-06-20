import Cabecalho from "./componentes/Cabecalho"
import Estilos from "./componentes/EstilosGlobais"
import ProvedorTema from "./componentes/ProvedorTema"
import Tipografia from "./componentes/Tipografia"
import AppRoutes from "./routes/routes"

export default function App() {
  return (
    <>
      <ProvedorTema>
        <Estilos />
        <Cabecalho />
        <AppRoutes />
      </ProvedorTema>
    </>
  )
}
