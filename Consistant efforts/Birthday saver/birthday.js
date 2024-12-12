 
function saveBirthday(){

    let Name = document.getElementById('name').value;
let Birthday= document.getElementById('birthday').value;

if( Name==="" || Birthday ===""){
    alert ("Please enter a value");
return; 
}

    let birthdayList= JSON.parse(localStorage.getItem('birthdayList'))||[];

    birthdayList.push({Name:Name, Birthday:Birthday});
    
    localStorage.setItem('birthdayList', JSON.stringify(birthdayList));

    document.getElementById('name').value ='';
    document.getElementById('birthday').value='';
 
    alert("birthday saved");
}

function displayBirthday(){
    let birthdayList = JSON.parse(localStorage.getItem('birthdayList')) || [];
    let display= document.getElementById('birthdayDisplay');
   


    let displayText= '';  
    
    if (birthdayList.length === 0) {
        display.innerHTML = "No birthdays saved.";
        return;
    }



    birthdayList.forEach(entry =>{
displayText += `Name: ${entry.Name}, Birthday: ${entry.Birthday}<br>`;
    });

    display.innerHTML= displayText;

}


   

  




 