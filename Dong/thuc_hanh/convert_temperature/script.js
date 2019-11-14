function temperatureConverter(temp) {
    temp = parseFloat(temp);
    document.getElementById("tempCel").innerHTML = (temp-32) / 1.8;
}