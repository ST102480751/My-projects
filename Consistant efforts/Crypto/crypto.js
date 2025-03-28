document.getElementById("Getbitcoin").addEventListener("click",async function(){ //declaring the button
let search = document.getElementById("cryptosearch").value.trim().toLowerCase(); //declaring the search input box
let cryptoutcum = document.getElementById("displaycrypto"); //declaring the display tag
 
    let endpoint= "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,zar"; //declaring the API
    try{
        let request = await fetch(endpoint); // Requesting to get the data from the API
        if(request.ok){

            let data= await request.json();// parses the raw JSON response from the API into a JavaScript object 

            if (search && !["bitcoin"].includes(search)) {
                alert("Invalid currency. Please enter Bitcoin "); // checks if the seached value matches with whats on the API
            }
                cryptoutcum.innerHTML = 
                `<h2>Cryptocurrency Prices</h2>
                 <p>Bitcoin (BTC): $${data.bitcoin.usd} | ZAR ${data.bitcoin.zar}</p> `//displays the outcome on the webpage
         

        }else{
            alert("Error fetching data");   // 
        }
        
    }catch(error)
    {  console.error("Network error or other issue:", error); //an error happens in the catch.
  
   
}});


document.getElementById("Getetherum").addEventListener("click",async function(){ //declaring the button
    
    let cryptoutcum = document.getElementById("displaycrypto"); //declaring the display tag
     
        let endpoint= "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,zar"; //declaring the API
        try{ 
            let request = await fetch(endpoint); // Requesting to get the data from the API
            if(request.ok){
    
                let data= await request.json();// parses the raw JSON response from the API into a JavaScript object 
    
                if (search && ![ "ethereum"].includes(search)) {
                    alert("Invalid currency. Please enter Ethereum."); // checks if the seached value matches with whats on the API
                }
                    cryptoutcum.innerHTML = 
                    `<h2>Cryptocurrency Prices</h2>
                     <p>Ethereum (ETH): $${data.ethereum.usd}|ZAR ${data.ethereum.zar}</p>`; // displays the outcome on the webpage
             
    
            }else{
                alert("Error fetching data");   // 
            }
            
        }catch(error)
        {  console.error("Network error or other issue:", error); //an error happens in the catch.
      
       }
    
    });


    const myObject = {
        city: "Madrid",
        greet() {
          console.log(`Greetings from ${this.city}`);
        },
      };
      
      myObject.greet(); 



