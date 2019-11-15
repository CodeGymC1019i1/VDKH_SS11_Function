function augmentNumber(n) {
        return n += 1;
}

function main() {
    let n = parseFloat(prompt('input your number'));
    document.write(' ' + augmentNumber(n));
}
