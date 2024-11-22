# Cucumber Node.js TypeScript Project

Este projeto utiliza **Node.js**, **TypeScript**, **Mocha** e **Cucumber.js** para exemplificar os conceitos de **Test Driven Development (TDD)** e **Behavior Driven Development (BDD)**. 

## **Funcionalidades**
- Cadastro de usuários com verificação de e-mails duplicados.
- Login de usuários com credenciais válidas.
- Cálculo de descontos em compras com base no valor total.
- Testes unitários com **Mocha** e **Chai**.
- Testes de integração e comportamentais com **Cucumber.js**.

## **Pré-requisitos**
- Node.js v20.9.0 ou superior.
- Docker e Docker Compose (opcional para rodar em contêiner).

## **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cucumber-node-ts.git
   cd cucumber-node-ts
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute os testes unitários e de integração:
- Testes unitários (Mocha):
   ```bash
   npm run test:mocha
   ```
- Testes comportamentais (Cucumber):
   ```bash
   npm run test:cucumber
   ```

## Estrutura do Projeto
   ```bash
   cucumber-node-ts/
├── src/                        # Código principal
│   ├── auth.ts                 # Funções de autenticação
│   ├── discount.ts             # Função de cálculo de desconto
│   └── userDatabase.ts         # Banco de dados fictício
├── test/                       # Testes unitários
│   ├── auth.test.ts            # Testes de autenticação
│   ├── discount.test.ts        # Testes de cálculo de desconto
│   └── mocha-config.json       # Configuração do Mocha
├── features/                   # Testes BDD
│   ├── auth.feature            # Cenários de autenticação
│   ├── discount.feature        # Cenários de desconto
│   └── step_definitions/       # Implementações dos passos
├── tsconfig.json               # Configuração do TypeScript
├── cucumber.tsconfig.json      # Configuração específica para Cucumber
├── package.json                # Dependências e scripts
├── Dockerfile                  # Configuração do Docker
└── docker-compose.yml          # Configuração do Docker Compose
   ```

## Uso com Docker

1. Construa e execute o contêiner:
   ```bash
   docker-compose up
   ```

2. O resultado dos testes será exibido no terminal

3. Para encerrar:
   ```bash
   docker-compose down
   ```

## Tecnologias Utilizadas
- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **TypeScript**: Superset de JavaScript com tipagem estática.
- **Mocha e Chai**: Ferramentas para testes unitários.
- **Cucumber.js**: Framework para BDD.
- **Docker**: Contêiner para isolamento do ambiente