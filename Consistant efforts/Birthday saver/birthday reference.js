function saveBirthday(){
    let text= document.getElementById('Birthday').value;
    Date.parse(text);
    if(isNaN (text)){
        alert("Please enter a date"); 
    }else{
    localStorage.setItem('savedBirthday',text);

    
    }
}

function displayBirthday(){
    
let display= document.getElementById('birthdayDisplay');
   let savedBirthday= localStorage.getItem('savedBirthday');
  document.getElementById('birthdayDisplay').innerText =savedBirthday;
}