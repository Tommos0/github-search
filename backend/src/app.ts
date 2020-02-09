import express from "express";

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

app.get('/test', (req, res) => {
    res.send(req.query)
});

export default app;