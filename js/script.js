function generateKey (a,b) {
    let randomParameter = '';
    for (let i = 0; i<=a; i++) {
    randomParameter += b[Math.floor(Math.random() * b.length)];
    }
    return randomParameter
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);   