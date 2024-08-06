import React from "react";
import { render } from "@testing-library/react";
import Resultados from "./components/Resultados";
import { CalculadoraContext } from "./contexts/calculadora";

describe("Resultados", () => {
  
  test("renders component with historical data", () => {
    const historico = [
      { moeda: "USD", destino: "BRL", valor: 100, resultado: 500 },
      { moeda: "EUR", destino: "JPY", valor: 200, resultado: 30000 },
    ];

    const { getByText } = render(
      <CalculadoraContext.Provider value={{ historico }}>
        <Resultados />
      </CalculadoraContext.Provider>
    );

    expect(getByText("Resultados")).toBeInTheDocument();
    expect(getByText("De USD para BRL - Valor: 100 - Resultado: 500")).toBeInTheDocument();
    expect(getByText("De EUR para JPY - Valor: 200 - Resultado: 30000")).toBeInTheDocument();
  });

  
  test("matches snapshot", () => {
    const historico = [
      { moeda: "USD", destino: "BRL", valor: 100, resultado: 500 },
      { moeda: "EUR", destino: "JPY", valor: 200, resultado: 30000 },
    ];

    const { container } = render(
      <CalculadoraContext.Provider value={{ historico }}>
        <Resultados />
      </CalculadoraContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});