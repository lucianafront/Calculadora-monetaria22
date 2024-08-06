import { useContext } from "react";
import { CalculadoraContext } from "../contexts/calculadora";

function Resultados() {
  const { historico } = useContext(CalculadoraContext);

  return (
    <div className="resultados">
      <h1>Resultados: Qtd#{historico.length}</h1>
      <ul>
        {historico.map((item, index) => (
          <li key={index}>
            De {item.moeda} para {item.destino} - Valor: {item.valor} -
            Resultado: {item.resultado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resultados;
