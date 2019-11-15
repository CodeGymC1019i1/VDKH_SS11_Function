function calcSquare(n) {
    return Math.pow(n,2);
}
function main() {
    let n = parseFloat(prompt('nhập vào số bạn muốn tính '));
    document.write('bình phương của  là số '+ n +' là '+calcSquare(n).toFixed(3));
}