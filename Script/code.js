document.getElementById('celInput').addEventListener('input', function (e) {
    let cel = e.target.value;
    document.getElementById('celToFar').innerHTML = ((cel * 1.8) + 32).toFixed(2);
    document.getElementById('celToKel').innerHTML = ((cel * 1) + 273.15).toFixed(2);
});
