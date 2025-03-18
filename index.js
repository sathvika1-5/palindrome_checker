document.addEventListener('DOMContentLoaded', function() {
    const checkPalindromeBtn = document.getElementById('check-palindrome-btn');
    const inputNumbers = document.getElementById('input-numbers');
    const palindromeResult = document.getElementById('palindrome-result');
    
    checkPalindromeBtn.addEventListener('click', function() {
        checkPalindromeInput();
    });
    
    inputNumbers.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPalindromeBtn.click();
        }
    });
    
    function checkPalindromeInput() {
        const numberString = inputNumbers.value.trim();
        
        if (numberString === '') {
            displayResult('Please enter a series of numbers.', 'error');
            return;
        }
        
        if (!/^\d+$/.test(numberString)) {
            displayResult('Please enter only numbers.', 'error');
            return;
        }
        
        const isPalindrome = checkPalindrome(numberString);
        
        if (isPalindrome) {
            displayResult(`${numberString} is a palindrome!`, 'success');
        } else {
            displayResult(`${numberString} is not a palindrome.`, 'error');
        }
    }
    
    function checkPalindrome(str) {
        const cleanStr = str.replace(/\s/g, '').toLowerCase();
        
        const reversed = cleanStr.split('').reverse().join('');
        return cleanStr === reversed;
    }
    
    function displayResult(message, type) {
        palindromeResult.textContent = message;
        
        if (type === 'success') {
            palindromeResult.style.color = '#27ae60';
            palindromeResult.style.backgroundColor = '#e8f7f0';
        } else {
            palindromeResult.style.color = '#e74c3c';
            palindromeResult.style.backgroundColor = '#fdf0ed';
        }
        
        animateResult(palindromeResult);
    }
    
    function animateResult(element) {
        element.style.transition = 'none';
        element.style.transform = 'scale(1.03)';
        
        setTimeout(() => {
            element.style.transition = 'transform 0.5s ease';
            element.style.transform = 'scale(1)';
        }, 10);
    }
});