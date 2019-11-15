let character = prompt('nhập character');

function checkDataType(character) {
    return isNaN(character);
}

function main() {
    if (checkDataType(character) === true) {
        alert('không phải kiểu số');
    } else {
        alert('là kiểu số');
    }
}