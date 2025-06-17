import express from 'express';
const loggerMiddleware = (req, res, next) => {
    const app = express();
    const timestamp = new date().toISOString();
    const { method, url } = req;
    console.log(`${timestamp}  ${method}  ${url}`);
    next();
}

app.use(loggerMiddleware);

app.get('/test', (req, res) => {
    res.send('Hello world');
})
const port = 3000;
app.listen(port, () => {
    console.log(`server is running on the port ${port}`)
});