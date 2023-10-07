function toggleConversion() {
    updateResult();
  }

  function updateResult() {
    const temperatureInput = document.getElementById('temperature');
    const resultInput = document.getElementById('result');
    const unitLabel = document.getElementById('unit');
    const switchCheckbox = document.getElementById('switch');
  
    const temperatureValue = parseFloat(temperatureInput.value);
    if (isNaN(temperatureValue)) {
      resultInput.value = '';
      return;
    }
  
    if (switchCheckbox.checked) {
      // Convert to Celsius
      const celsiusValue = (temperatureValue - 32) * (5 / 9);
      resultInput.value = celsiusValue.toFixed(2);
      unitLabel.innerText = 'Fahrenheit to Celsius';
    } else {

              // Convert to Fahrenheit
      const fahrenheitValue = (temperatureValue * 9/5) + 32;
      resultInput.value = fahrenheitValue.toFixed(2);
      unitLabel.innerText = 'Celsius to Fahrenheit';

    }
  }
  
  const temperatureInput = document.getElementById('temperature');
  temperatureInput.addEventListener('input', updateResult);

  updateResult();