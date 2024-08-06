import { useContext } from "react";
import { CalculadoraContext } from "../contexts/calculadora";

function HistoricoErros() {
    const { historicoErros } = useContext(CalculadoraContext);
    
    return (
        <div className="erros">
        <h1>Histórico de Erros: Qtd#{historicoErros.length}</h1>
        <ul>
            {historicoErros.map((item, index) => (
            <li key={index}>
                De {item.moeda} para {item.destino} - Valor: {item.valor} -
                Erro: {item.erro}
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default HistoricoErros;