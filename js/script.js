function generateKey (len, char) {
    let randomParameter = '';
    for (let i = 0; i<len; i++) {
    randomParameter += char[Math.floor(Math.random() * char.length)];
    }
    return randomParameter
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);   