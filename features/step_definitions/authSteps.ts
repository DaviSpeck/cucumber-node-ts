import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { registerUser, loginUser, clearDatabase } from '../../src/auth.js';

Given('o sistema não tem um usuário com o e-mail {string}', async function (email: string) {
  await clearDatabase();
});

Given('o sistema já tem um usuário com o e-mail {string}', async function (email: string) {
  await clearDatabase();
  const result = registerUser(email, 'senha123');
  expect(result).to.equal(true);
});

Given('o sistema já tem um usuário com o e-mail {string} e senha {string}', async function (email: string, password: string) {
  await clearDatabase();
  const result = registerUser(email, password);
  expect(result).to.equal(true);
});

When('o usuário tenta se cadastrar com o e-mail {string} e senha {string}', function (email: string, password: string) {
  this.result = registerUser(email, password);
});

When('o usuário tenta fazer login com o e-mail {string} e senha {string}', function (email: string, password: string) {
  this.result = loginUser(email, password);
});

Then('o cadastro deve ser realizado com sucesso', function () {
  expect(this.result).to.equal(true);
});

Then('o sistema deve informar que o e-mail já está em uso', function () {
  expect(this.result).to.equal(false);
});

Then('o login deve ser realizado com sucesso', function () {
  expect(this.result).to.equal(true);
});

Then('o sistema deve informar que o login falhou', function () {
  expect(this.result).to.equal(false);
});