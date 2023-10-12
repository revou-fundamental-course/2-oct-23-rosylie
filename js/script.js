const celsiusTab = document.getElementById('celsius-tab');
const fahrenheitTab = document.getElementById('fahrenheit-tab');
const celsiusContent = document.getElementById('celsius-content');
const fahrenheitContent = document.getElementById('fahrenheit-content');
const celsiusTemperatureInput = document.getElementById('celsius-temperature');
const fahrenheitTemperatureInput = document.getElementById('fahrenheit-temperature');
const celsiusResultContainer = document.getElementById('celsius-result');
const fahrenheitResultContainer = document.getElementById('fahrenheit-result');

celsiusTab.addEventListener('click', () => {
    celsiusContent.classList.add('active');
    fahrenheitContent.classList.remove('active');
    celsiusTab.classList.add('active');
    fahrenheitTab.classList.remove('active');
    clearResults();
});

fahrenheitTab.addEventListener('click', () => {
    fahrenheitContent.classList.add('active');
    celsiusContent.classList.remove('active');
    fahrenheitTab.classList.add('active');
    celsiusTab.classList.remove('active');
    clearResults();
});

document.getElementById('convert-celsius-btn').addEventListener('click', () => {
    const celsiusTemperature = parseFloat(celsiusTemperatureInput.value);
    if (!isNaN(celsiusTemperature)) {
        const convertedTemperature = (celsiusTemperature * 9/5) + 32;
        displayResult(celsiusTemperature, convertedTemperature, 'Fahrenheit');
    } else {
        displayError('Input nilai salah. Masukkan nilai suhu');
    }
});

document.getElementById('convert-fahrenheit-btn').addEventListener('click', () => {
    const fahrenheitTemperature = parseFloat(fahrenheitTemperatureInput.value);
    if (!isNaN(fahrenheitTemperature)) {
        const convertedTemperature = (fahrenheitTemperature - 32) * 5/9;
        displayResult(fahrenheitTemperature, convertedTemperature, 'Celsius');
    } else {
        displayError('Input nilai salah. Masukkan nilai suhu');
    }
});

function displayResult(inputTemperature, convertedTemperature, unit) {
    clearResults();
    convertedTemperature = convertedTemperature.toFixed(2);
    if (unit === 'Fahrenheit') {
        celsiusResultContainer.textContent = `9/5 * ${inputTemperature} Celcius + 32 = ${convertedTemperature} Fahrenheit.`;
    } else {
        fahrenheitResultContainer.textContent = `5/9 * (${inputTemperature} Fahrenheit - 32) = ${convertedTemperature} Celsius.`;
    }
}

function displayError(message) {
    clearResults();
    if (celsiusContent.classList.contains('active')) {
        celsiusResultContainer.textContent = message;
    } else {
        fahrenheitResultContainer.textContent = message;
    }
}

function clearResults() {
    celsiusResultContainer.textContent = '';
    fahrenheitResultContainer.textContent = '';
}



