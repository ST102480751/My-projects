function calculateChange(){
   /*1*/  let Restriction= document.getElementById('Budget').value;
        let Use = document.getElementById('expense').value;
        let change= document.getElementById('Change');


   /*2*/  Restriction = parseFloat(Restriction);
            Use = parseFloat(Use);


  /*3*/   if(isNaN (Restriction)|| isNaN(Use)){
        alert ("Please enter a value");
        }else{
 /*4*/ change = Restriction-Use;
 /*5*/ document.getElementById('Change').value= change.toFixed(2);
    }
}

/*Define the Function

1)Retrieve the user inputs (budget and expense) from the HTML form.
2)Convert the input values from strings to numbers.
3)Check if the input values are valid numbers (i.e., ensure the user entered valid numbers).
4)Calculate the difference between the budget and expense.
5)Display the result (remaining budget) in the "Change" input field.*/
