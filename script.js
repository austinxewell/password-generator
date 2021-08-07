// Assignment code here

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbol
  };
  
  // Generator functions
  
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }
  
  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  
  
  // On Click Generator
  
  function promptMe(){
    var passwordLength = prompt("Pick a length between 8-128");
  
    if (passwordLength < 8 || passwordLength >128) {
      alert("invalid entry, please try again.");
      promptMe();
    }
  
    else {
  
      var lower = confirm("Do you want to include lower case letters?");
      var upper = confirm("Do you want to include upper case letters?");
      var number = confirm("Do you want to include numbers?");
      var symbols = confirm("Do you want to include special characters?");
   
  
      let generatedPassword = '';
  
      const typesCount = lower + upper + number + symbols;
  
      //console.log('typesCount: ', typesCount);
  
      const typesArr = [{lower}, {upper}, {number}, {symbols}].filter (
        item =>Object.values(item)[0]
      );
  
      //console.log('typesArr: ', typesArr);
  
        if (typesCount === 0) {
          promptMe();
        }   
       
       //console.log(randomFunc.lower())