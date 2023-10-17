import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en archivo 02-template-string' , () => {
    test('getSaludo deberia retornar un texto con el nombre', () => {
        const name = "Juan";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    })
})