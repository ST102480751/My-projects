function showMessage(messagediv) {
    let message = document.createElement('div'); // Create a new div element for the message
    message.textContent = messagediv; // Set the text content of the message to the provided message
    message.style.backgroundColor = "red"; // Set the background color of the message div to light blue
    
    message.style.padding = '10px'; // Add padding to the message div (note: there’s a typo; it should be 'padding')
    message.style.margin = '10px'; // Add vertical margin above and below the message (another typo; extra semicolon here)
    
    document.getElementById('messageContainer').appendChild(message); // Add the message div to the container with ID 'messageContainer'
    
    setTimeout(() => {
        message.remove(); // Remove the message after 3 seconds
    }, 3000);
}

function checkrequirements(){
  let PPassword=document.getElementById('password').value;

  let confirm = document.getElementById('confirmpassword').value;
  
  let Newpassword = PPassword;// saving values entered in PPassword and showing its a new password.
  
  localStorage.setItem('New',PPassword); //password is saved in Newpassword "New will be used to retrieve it."
  
  if(confirm!==PPassword){
      showMessage("Incorrect confirmation");
  }else{
    showMessage("Password is set");
  
  }
      
}
    
  document.getElementById('password').addEventListener('keydown',function(event){
      if(event.key === 'Enter'){
        let PPassword=document.getElementById('password').value;
       
        if(PPassword.length<8){
           showMessage("Password must be atleast 8 characters");
        }else{
           document.getElementById('confirmpassword').focus();    
        }
  
    
      }});
      document.getElementById('confirmpassword').addEventListener('keydown',function(event){
          if(event.key === 'Enter'){
        
        
    checkrequirements();  
  }});

 function updateCheckboxes(password) {

  let letterCheckboxes= document.getElementById('include-letter');

  let numberCheckbox= document.getElementById('include-number');
  
  let symbolCheckbox= document.getElementById('include-symbol');

  let hasLetters= /[a-zA-Z]/.test(password);
  let hasNumbers = /\d/.test(password); // Regular expression to check for numbers
  let hasSymbols= /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  letterCheckboxes.checked = hasLetters;
  numberCheckbox.checked = hasNumbers;
  symbolCheckbox.checked = hasSymbols;
} 





 document.getElementById('password').addEventListener('input', function() {
  let password = this.value;
  updateCheckboxes(password);
});

