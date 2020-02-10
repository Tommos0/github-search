import app from "./app";
import request from "supertest";

describe('app', () => {
    test('/ lists routes', async () => {
        const response = await request(app).get('/');
        const expectedResponse = ['/', '/users', '/user/:username'];
        expect(response.body).toEqual(expectedResponse);
    });
    test('/users without query errors', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toEqual(400);
    });
    test('/users?q=tommos0', async () => {
        const response = await request(app).get('/users?q=tommos0');
        expect(response.status).toEqual(200);
        expect(response.body[0].login).toEqual('Tommos0');
    });
    test('/user/tommos0', async () => {
        const response = await request(app).get('/user/tommos0');
        expect(response.status).toEqual(200);
        expect(response.body.login).toEqual('Tommos0');
    });
});
