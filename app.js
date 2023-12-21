var buttons = document.querySelectorAll('.btn') //Buttons
var screen = document.querySelector('.screen') //UpperScreen
var clear = document.querySelector('.btn-clear') //ClearButton
var equal = document.querySelector('.btn-equal') //Equal button


//======================================Clicking Function ==============================================

//Display of buttons 
buttons.forEach(function(buttons){
    buttons.addEventListener('click',function(){       //function(event)
        var value = this.dataset.num;             // this >>> event.target
        screen.value+=value;  //append value to (value)

    });

});



//Equal button
equal.addEventListener('click',function(){
    if (screen.value == ""){     //If the screen having any value
        screen.value = ""         //Clears up the screen ("  ")
    }
    else{
        var answer = eval(screen.value); //Does the calculation
        screen.value = answer ;
    }
});


//Clear Button
clear.addEventListener('click',function(){
        screen.value= "" //Directy Clear the value ("  ")
    });



//================================ Key Press function ==============================================
document.addEventListener('keypress', function(event) {
    var key = event.key;
    if (!isNaN(parseInt(key)) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
      screen.value += key;
    } else if (key === 'Enter') {
      // Handle pressing Enter key (Equal functionality)
      if (screen.value === "") {
        screen.value = "";
      } else {
        var answer = eval(screen.value);
        screen.value = answer;
      }
    } else if (key === 'c' || key === 'C') {
      // Handle pressing 'C' key (Clear functionality)
      screen.value = "";
    }
  });    






