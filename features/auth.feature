Feature: Cadastro e autenticação de usuários

  Scenario: Cadastro de usuário com sucesso
    Given o sistema não tem um usuário com o e-mail "usuario@example.com"
    When o usuário tenta se cadastrar com o e-mail "usuario@example.com" e senha "senha123"
    Then o cadastro deve ser realizado com sucesso

  Scenario: Cadastro com e-mail já existente
    Given o sistema já tem um usuário com o e-mail "usuario@example.com"
    When o usuário tenta se cadastrar com o e-mail "usuario@example.com" e senha "senha123"
    Then o sistema deve informar que o e-mail já está em uso

  Scenario: Login com sucesso
    Given o sistema já tem um usuário com o e-mail "usuario@example.com" e senha "senha123"
    When o usuário tenta fazer login com o e-mail "usuario@example.com" e senha "senha123"
    Then o login deve ser realizado com sucesso

  Scenario: Login com credenciais inválidas
    Given o sistema já tem um usuário com o e-mail "usuario@example.com" e senha "senha123"
    When o usuário tenta fazer login com o e-mail "usuario@example.com" e senha "senha_errada"
    Then o sistema deve informar que o login falhou