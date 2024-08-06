import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const CalculadoraContext = createContext({});

function CalculadoraProvider({ children }) {
  const [currency, setCurrency] = useState([]);
  const [moeda, setMoeda] = useState("BRL");
  const [destino, setDestino] = useState("USD");
  const [valor, setValor] = useState(1);
  const [historico, setHistorico] = useState([]);
  const [historicoErros, setHistoricoErros] = useState([]);

 

  useEffect(() => {
    axios.get(`https://api.exchangerate-api.com/v4/latest/${moeda}`)
    .then((response) => {
      setCurrency(Object.keys(response.data.rates));
      setHistorico(JSON.parse(localStorage.getItem("historico")) || []);

    })
    .catch((erro)=>{
      gravarHistoricoLocalStorage(erro);

    })

  }, []);

  useEffect(() => {
  }, []);

  function converter() {
    axios.get(`https://api.exchangerate-api.com/v4/latest/${moeda}`)
    .then((response) => {
      const cotacao = response.data.rates;
      console.log(cotacao);
      const result = (valor * cotacao[destino]);
    
      
      gravarHistoricoLocalStorage(result);

    })
    .catch((error) => {
      gravarHistoricoErrosLocalStorage(error);
    });
  }



  function gravarHistoricoErrosLocalStorage(error)
  {
    let historicoErros = JSON.parse(localStorage.getItem("historicoErros")) || [];
    historicoErros.unshift({
      moeda: moeda,
      destino: destino,
      valor: valor,
      erro: error.message
    });
    setHistoricoErros(historicoErros);
    localStorage.setItem("historicoErros", JSON.stringify(historicoErros));
  }

  function gravarHistoricoLocalStorage(result)
  {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    historico.unshift({
      moeda: moeda,
      destino: destino,
      valor: valor,
      resultado: result
    });

    setHistorico(historico);
    localStorage.setItem("historico", JSON.stringify(historico));
  }


  return (
    <CalculadoraContext.Provider value={{ currency, moeda, setDestino, setMoeda, valor, setValor, converter, historico, historicoErros  }}>
      {children}
    </CalculadoraContext.Provider>
  );
}

export default CalculadoraProvider;


