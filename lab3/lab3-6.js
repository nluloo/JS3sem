function pattern(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - i - 1);
        let stars = '*'.repeat(i * 2 + 1);
        result += spaces + stars + '\n';
    }
    return result;
}

console.log(pattern(5));
