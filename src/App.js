import Calculadora from './components/Calculadora';
import HistoricoErros from './components/HistoricoErros';
import Resultados from './components/Resultados';
import CalculadoraProvider from './contexts/calculadora';

import './App.css';

function App() {
  return (
    <CalculadoraProvider>
      <Calculadora/>
      <Resultados/>
      <HistoricoErros/>
    </CalculadoraProvider>
  );
}

export default App;
