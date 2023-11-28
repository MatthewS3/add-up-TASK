function addNumbers() {
    let numbers = [];
    numbers.push(parseFloat(document.getElementById('num1').value));
    numbers.push(parseFloat(document.getElementById('num2').value));
  
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (!isNaN(numbers[i])) {
        sum += numbers[i];
      }
    }
  
    if (!isNaN(sum)) {
      document.getElementById('result').innerText = 'Result: ' + sum;
    } else {
      document.getElementById('result').innerText = 'Please enter valid numbers';
    }
}
