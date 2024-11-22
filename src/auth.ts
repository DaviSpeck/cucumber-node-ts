import { addUser, findUser } from './userDatabase.js';

export function registerUser(email: string, password: string): boolean {
  return addUser({ email, password });
}

export function loginUser(email: string, password: string): boolean {
  return findUser(email, password);
}

export async function clearDatabase(): Promise<void> {
    const { clearDatabase } = await import('./userDatabase.js');
    clearDatabase();
}