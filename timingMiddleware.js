import express from 'express';
const app = express();
// import helmet from 'helmet'; //to use this we must do npm install helmet
// app.use(helmet());
app.use((req, res, next) => {
    const startTime = Date.now();
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`Server response time is ${duration}`);
    });
    next();
})

app.get('/', (req, res) => {
    res.send('Hello there...I am learning node js');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server is running on the port ${port}`)
});