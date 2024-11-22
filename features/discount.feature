Feature: Calcular desconto

  Scenario: Aplicar desconto em compras acima de 100
    Given o cliente tem uma compra de valor 150
    When o sistema calcula o desconto
    Then o valor final deve ser 135

  Scenario: Não aplicar desconto em compras abaixo de 100
    Given o cliente tem uma compra de valor 50
    When o sistema calcula o desconto
    Then o valor final deve ser 50