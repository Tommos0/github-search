import express from "express";
import GithubClient from "./GithubClient";

const app = express();

app.get('/', (req, res) => {
    // list all registered routes

    // _router has no type info
    res.send(
        app._router.stack
            .filter((s: any) => s.route)
            .map((s: any) => s.route.path)
    );
});

app.get('/users', async (req, res) => {
    const { q, ...options } = req.query;
    const client = new GithubClient();
    try {
        const result = await client.users(q, options);
        res.send(result.items);
    } catch (e) {
        res.status(400);
        res.send(e.toString());
    }
});

export default app;