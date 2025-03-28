async function getweather(){
let search = document.getElementById('searchInput').value;

let outcomeWeather= document.getElementById('Show weather');

let apiKey= 'eb225d1025cc4e80916214334251501';

let apiEndpoint = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}&days=10&aqi=yes&alerts=yes`;



try{
let response = await fetch(apiEndpoint);

if(response.ok){
    let data= await response.json();
 
if(data.location.name.toLowerCase() !== search.toLowerCase()){
    alert("invalid place");
}else{

    outcomeWeather.innerHTML= 
                `<h2>Weather for ${data.location.name}</h2>
                 <p>Temperature: ${data.current.temp_c} °C</p>
                 <p>Condition: ${data.current.condition.text}</p>`;
}
    
}else{
    alert("Error fetching data");  
}

} catch (error){
    console.error("Network error or other issue:", error);
}
}




