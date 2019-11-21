const celciusInput  = document.querySelector('input');
const fahrenheitOutput = document.querySelector('#output > h1');

celciusInput.addEventListener('input', function() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) +32;
    
    function roundNum(num) {
        return Math.round(fTemp*100) /100; 
    }

    fahrenheitOutput.innerHTML = roundNum(fTemp) + '°F';

    if(isNaN(fTemp)) {
        return fahrenheitOutput.innerHTML = '-' + ' ' + '°F';
    } else {
        null;
    }
});