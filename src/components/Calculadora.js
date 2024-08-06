import { useContext } from "react";
import { CalculadoraContext } from "../contexts/calculadora";

function Calculadora() {
    const {currency, setMoeda, setDestino, valor, setValor, converter} = useContext(CalculadoraContext);
    
    return (
        <div className="calculadora">
            <h1>Conversor de moedas</h1>
            <div>
                <label htmlFor="valor">Valor para conversão</label>
                <input type="number"  id="valor" value={valor} onChange={(e) => setValor(e.target.value)} />
            </div>
            <div>
                <label htmlFor="currency">Selecione moeda origem</label>
                <select onChange={(e) => setMoeda(e.target.value)}>
                    {currency.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))} 
                </select>
            </div>

            <div>
                <label htmlFor="currency">Selecione moeda destino</label>
                <select onChange={(e) => setDestino(e.target.value)}>
                    {currency.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))} 
                </select>
            </div>
            <div>
                <button onClick={converter} >Converter</button>
            </div>

        </div>
    );
}

export default Calculadora;