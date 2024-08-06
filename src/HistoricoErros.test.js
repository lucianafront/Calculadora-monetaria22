import React from "react";
import { render } from "@testing-library/react";
import { CalculadoraContext } from "./contexts/calculadora";
import HistoricoErros from "./components/HistoricoErros";

describe("HistoricoErros", () => {
  test("renders component with historical errors", () => {
    const historicoErros = [
      {
        moeda: "USD",
        destino: "BRL",
        valor: 100,
        erro: "Invalid currency",
      },
      {
        moeda: "EUR",
        destino: "JPY",
        valor: 50,
        erro: "Conversion rate not available",
      },
    ];

    const { getByText } = render(
      <CalculadoraContext.Provider value={{ historicoErros}}>
      <HistoricoErros/>
    </CalculadoraContext.Provider>
    );

    expect(getByText("Histórico de Erros")).toBeInTheDocument();
    expect(getByText("De USD para BRL - Valor: 100 - Erro: Invalid currency")).toBeInTheDocument();
    expect(getByText("De EUR para JPY - Valor: 50 - Erro: Conversion rate not available")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const historicoErros = [
      {
        moeda: "USD",
        destino: "BRL",
        valor: 100,
        erro: "Invalid currency",
      },
      {
        moeda: "EUR",
        destino: "JPY",
        valor: 50,
        erro: "Conversion rate not available",
      },
    ];

    const { container } = render(
      <CalculadoraContext.Provider value={{ historicoErros}}>
      <HistoricoErros/>
    </CalculadoraContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});