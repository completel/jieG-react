let arr = [
    { a: true, b: '123' },
    { a: true, b: '456' },
    { a: false, b: '789' },
    { a: true, b: 'abc' }
]

const result = arr.filter(item => !item.a);

console.log(result);