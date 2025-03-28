document.getElementById('Search').addEventListener("click", async function () {
    let searchQuery = document.getElementById('searchSong').value.trim().toLowerCase();
    let track = document.getElementById('SongTitle');

 
let endPoint =`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`; 
    try {
        let request = await fetch(endPoint);

        if (request.ok) {
            let tune = await request.json();

            // Check for API errors
            if (tune.error) {
                throw new Error(`Sportify API Error: ${data.error.message}`);
            }

            // Check if there are songs in the response
            if (!tune.data || tune.data.length === 0) {
                alert("No music found. Please try a different search.");
                return;
            }

            // Use filter to find all matching songs
            let matchedSongs = tune.data.filter(song => song.title.toLowerCase().includes(searchQuery));

            if (matchedSongs.length > 0) {
                let firstSong = matchedSongs[0]; // Get the first matched song

                track.innerHTML = `🎵 <strong>Song Title:</strong> ${firstSong.title} <br>
                                   🎤 <strong>Artist:</strong> ${firstSong.artist.name}`;
            } else {
                alert("No exact match found. Please try a different search.");
            }
        } else {
            throw new Error("Failed to fetch data from Spotify API.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});


/* *
async function mylyrics(){
let getLyrics= document.getElementById('lyrics');
 
let lyricsEndpoint =`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(songTitle)}`;

try{
    let Please = await fetch(lyricsEndpoint);

    if(Please.ok){
        let Lyrics = await request.json(); // creates an object


        if (Lyrics.error) {
            throw new Error(`Deezer API Error: ${data.error.message}`);  
        }
    if(data.Lyrics){
  // Display results
  getLyrics.innerHTML = `

  <p>${Lyrics}</p>`;}  
   
    }

}catch(error){
console.error("Error fetching data:",error);
}}**/
