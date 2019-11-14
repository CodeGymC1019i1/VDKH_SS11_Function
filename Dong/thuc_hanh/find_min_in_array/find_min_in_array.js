let a = [];
let min = a[0];

function inputArray(n) {
    for (let i = 0; i < n; i++) {
        a[i] = prompt('input element i: ' + i);
    }
}

inputArray(6);

function minArray(arr) {
    let flag = 0;
    if (arr.length == 0) {
        alert('array is null.');
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            flag = i;

        }
    }
    document.write('min = ' + min + "<br>");
    document.write('index of min: ' + flag);
}

minArray(a);
