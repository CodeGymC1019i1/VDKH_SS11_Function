let a = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let b = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
function search(n) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == n) {
            return 'ngôi sao ' + n + ' thuộc chòm sao ' + b[i];
        }
    }
    return 'không tìm thấy ngôi sao ' + n;
}