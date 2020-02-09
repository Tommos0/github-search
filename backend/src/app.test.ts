import app from "./app";
import request from "supertest";

describe('app', () => {
    test('/ lists routes', async () => {
        const response = await request(app).get('/');
        const expectedResponse = ['/', '/test'];
        expect(response.body).toEqual(expectedResponse);
    });
});
