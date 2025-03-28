function checkrequirements(){


    let confirm = document.getElementById('confirmpassword').value;
    
    let Newpassword = pass;// saving values entered in pass and showing its a new password
    
    localStorage.setItem('New',Newpassword); //password is saved in Newpassword "New will be used to retrieve it"
    
    if(confirm!==pass){
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
    