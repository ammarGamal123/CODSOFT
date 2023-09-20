function calculate() {
    // Get user inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = 'Please enter valid numbers.';
      return;
    }

    // Perform the selected operation


    let answer;
    if (operation === 'add'){
        answer = num1 + num2;
    }
    else if (operation === 'subtract'){
        answer = num1 - num2;
    }
    else if (operation === 'multiply'){
        answer = num1 * num2;
    }
    else if (operation === 'divide'){
        if (num2 === 0){
            answer = 'Division by zero is now allowed.';
        }
        else answer = num1 / num2;
    }
    else {
        answer = 'Invalid operation selected'
    }
    
    document.getElementById('result').textContent = answer;
  }