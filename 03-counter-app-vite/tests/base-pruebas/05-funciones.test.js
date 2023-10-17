import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
            }
        const user = getUser();
        console.log(user);

        expect(testUser).toEqual(user);
    });

    test('getUsuario debe retornar un objeto', () => {
        const nombre = "Juan Lara";

        const usuario = getUsuarioActivo(nombre);
        console.log(usuario);
        expect(nombre).toEqual(usuario.username);
    });
});