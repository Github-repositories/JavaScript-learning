const person = { name: 'Alice', age: 30 };
console.log('Using for...in loop:=====>');
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
        if(person[key] === 'Alice') {
            let value = [];
            value.push(key);
            console.log('Value pushed:', value);
        }
    }
    console.log('Using for...of loop:======>');
    const colors = ['red', 'green', 'blue'];
    for (const color of colors) {
        if(color === 'green') {
            let value = [];
            value.push(color);
            console.log('Value pushed:', value);
        }
    }