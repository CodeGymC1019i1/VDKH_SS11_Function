function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Good function";
    }else {
        result = "please try again";
    }
    return result;
}
let confirmAnswer = confirm("What do you think this function ?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);