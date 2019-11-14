function isPrime(n) {
    if (n <= 1) {
        return 0;
    }
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
}

function getResult(n) {
    if (isPrime(n) === 1) {
        document.write(n + ' là số nguyên tố')
    } else {
        document.write(n + ' không phải số nguyên tố')
    }
}

let n = prompt('input number need check is prime');
getResult(n);