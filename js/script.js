function calculate() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Masukkan panjang sisi dengan angka!");
        return;
    }

    var perimeter = sideA + sideB + sideC;
    var s = perimeter / 2; // semi-perimeter
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById("resultArea").innerText = area.toFixed(2);
    document.getElementById("resultPerimeter").innerText = perimeter.toFixed(2);
}


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    var button = document.getElementById('toggleDarkMode');
    button.innerText = document.body.classList.contains('dark-mode') ? 'White Mode' : 'Dark Mode';
}
document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);

function reset() {
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
    document.getElementById("resultArea").innerText = "";
    document.getElementById("resultPerimeter").innerText = "";
}
document.getElementById('resetButton').addEventListener('click', reset);