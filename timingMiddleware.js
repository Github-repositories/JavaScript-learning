import express from 'express';
const app = express();
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
    res.send('Hello there...');
});

app.listen(3000, () => console.log('Server is running on port 3000'));