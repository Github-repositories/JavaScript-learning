class taskQueue {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }
    addTask(task) {
        this.queue.push(task);
        this.processQueue();
    }
    async processQueue() {
        if (this.isProcessing) return;
        this.isProcessing = true;

        while (this.queue.length > 0) {
            const task = this.queue.shift();
            await this.addTask(task);
        }

        this.isProcessing = false;
    }
}
const taskQ = new taskQueue();
const data = [{ type: 'email', content: 'Hello, this is a test email.' },
    { type: 'sms', content: 'Hello, this is a test SMS.' }];
    data.forEach(item => {
        setTimeout(() => {
            taskQ.addTask(item);
        }, 5000);
        console.log(`Task added: ${item.type}`);
    });