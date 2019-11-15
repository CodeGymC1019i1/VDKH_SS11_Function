function calcFactorial(number) {
    let result =1;
    if (number < 1) {
        return 'số bạn vừa nhập không có giai thừa';
    } else {
        for (let i = 1; i <= number; i++) {
            result = result * i;

        }
        return 'số ' + number + ' có giai thừa là ' + result;s
    }
}

function main() {
    let number = parseInt(prompt('nhập vào số bạn cần tính giai thừa'));
    console.log(typeof number);
    document.write(calcFactorial(number));
}