type User = {
    email: string;
    password: string;
};

const database: User[] = [];

export function addUser(user: User): boolean {
    if (database.some(existingUser => existingUser.email === user.email)) {
        return false;
    }
    database.push(user);
    return true;
}

export function findUser(email: string, password: string): boolean {
    return database.some(user => user.email === email && user.password === password);
}

export function clearDatabase(): void {
    database.length = 0;
}