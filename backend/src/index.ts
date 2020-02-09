import app from "./app";

const EXPRESS_PORT = 8000;

app.listen(EXPRESS_PORT, () => {
    console.log(
        "Example app listening at http://localhost:%s",
        EXPRESS_PORT
    );
});