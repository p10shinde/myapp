const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


// nameless or anonymous fuction
var f1 = function() {
  console.log('test');
}
f1();


//globla variables
console.log(__filename);
console.log(__dirname);


function timeoutFunction() {
  console.log('tiemmout function')
}

// setTimeout(timeoutFunction,2000)




//calc square

var Question = function() {
  var count = 0;
  var getInput = function() {
    count++;
    if (count <= 5) {
        readline.question(`Enter number...`, (number) => {
          calcSquare(number);
          setTimeout(getInput, 1000);
        });
    } else {
      readline.close()
    }
  }
  var calcSquare = function(num) {
    console.log(num*num);
  }
  getInput();


}

Question();
