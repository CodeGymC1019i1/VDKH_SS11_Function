function calc(r) {
    let c = 2 * Math.PI * r;
    let s = Math.PI * Math.pow(r, 2);
    return 'hình tròn đường kính ' + r + ' có chu vi là: ' + c.toFixed(3) + ' và có diện tích là: ' + s.toFixed(3);
}

function main() {
    let r = parseFloat(prompt('nhập vào bán kính của đường tròn bạn muốn tính chu vi và diện tích '));
    document.write(calc(r));
}