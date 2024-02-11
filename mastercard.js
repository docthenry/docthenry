function validateMastercard(cardNumber) {
        const mastercardRegex = /^(5[1-5]\d{14})$/;
  
        return mastercardRegex.test(cardNumber);
  }
  
  // example
  console.log(validateMastercard('5123456789012345')); // true (is a Mastercard number)
  console.log(validateMastercard('6011123456789012')); // false (not a Mastercard number)
  
/*
Explanation for the ^(5[1-5]\d{14})$ regular expression pattern

^: Asserts the start of the string
5: indicates number must start with '5'
[1-5]: Matches any digit between '1' and '5' after the initial '5'
\d{14}: 14 digits after the first two digits
$: Asserts the end of the string 
*/