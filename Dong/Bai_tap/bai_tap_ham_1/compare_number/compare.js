function compare(n, m) {
    if (n> m){
        return ('số '+n+' lớn hơn số '+m);
    }else {
        return 'tổng 2 số vừa nhập là: '+n +m;
    }
}
function main() {
    let n = parseFloat(prompt('nhập vào số thứ nhất: '));
    let m = parseFloat(prompt('nhập vào số thứ 2'));
    alert(compare(n ,m));
}