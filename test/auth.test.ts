import { expect } from 'chai';
import { registerUser, loginUser, clearDatabase } from '../src/auth.js';

describe('Auth Module', () => {
    beforeEach(() => {
        clearDatabase();
    });

    it('deve cadastrar um novo usuário', () => {
        const result = registerUser('usuario@example.com', 'senha123');
        expect(result).to.equal(true);
    });

    it('não deve permitir cadastro com e-mail duplicado', () => {
        registerUser('usuario@example.com', 'senha123');
        const result = registerUser('usuario@example.com', 'senha456');
        expect(result).to.equal(false);
    });

    it('deve permitir login com credenciais válidas', () => {
        registerUser('usuario@example.com', 'senha123');
        const result = loginUser('usuario@example.com', 'senha123');
        expect(result).to.equal(true);
    });

    it('deve negar login com credenciais inválidas', () => {
        registerUser('usuario@example.com', 'senha123');
        const result = loginUser('usuario@example.com', 'senha_errada');
        expect(result).to.equal(false);
    });
});