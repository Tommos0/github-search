import GithubClient from "./GithubClient";

describe('GithubClient', () => {
    test('search/tommos0', async () => {
        const client = new GithubClient();
        const response = await client.users('tommos0');
        expect(response.items[0].login).toEqual('Tommos0');
    });
    describe('limits',() => {
        const client = new GithubClient();
        test.each([5, 10, 15])('limit of %p', async (limit) => {
            const response = await client.users('a', {
                per_page: limit
            });
            expect(response.items).toHaveLength(limit);
        })
    });
    test('page & per_page work', async () => {
        const client = new GithubClient();
        const resp1 = await client.users('a', {
            page: 1,
            per_page: 10,
        });
        const resp2 = await client.users('a', {
            page: 2,
            per_page: 5,
        });
        // test `login` property, `score` returns something different each call
        const logins1 = resp1.items.map(item => item.login);
        const logins2 = resp2.items.map(item => item.login);
        expect(logins1.slice(5)).toEqual(logins2);
    });
    test('user/tommos0', async () => {
        const client = new GithubClient();
        const resp = await client.user('tommos0');
        expect(resp.login).toBe('Tommos0');
    });
});
