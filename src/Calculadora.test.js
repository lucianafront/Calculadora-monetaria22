import React from "react";
import { render, screen } from "@testing-library/react";
import { CalculadoraContext } from "./contexts/calculadora";
import Calculadora from "./components/Calculadora";

describe("Calculadora", () => {
  
  test("renders component with selected currency", () => {
    const currency = ["USD", "BRL", "EUR", "JPY", "GBP"];
    const moeda = "USD";
    const setMoeda = jest.fn();

    render(
      <CalculadoraContext.Provider value={{ currency, moeda, setMoeda }}>
        <Calculadora />
      </CalculadoraContext.Provider>
    );

    expect(screen.getByText("Calculadora")).toBeInTheDocument();
    expect(screen.getByText("Selecione moeda origem")).toBeInTheDocument();
    //expect(screen.getByLabelText("Select Currency")).toBeInTheDocument();
  });


});
