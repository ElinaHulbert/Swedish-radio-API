fetch('https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false')
  .then(response => response.json())
  .then(data => showTheTitle(data));
 

  let currentlyActive

 function showTheTitle(data){
   console.log(data)
   const tracks = document.getElementById("tracks")


   for (i = 0; i<data.channels.length; i++){
    // console.log(data.programs[i])

// IMAGE
    const playlistItem = document.createElement('div');
    playlistItem.classList.add('playlist-item')

    const playlistItemImg = document.createElement('img')
    playlistItemImg.classList.add('playlist-item-img')
    playlistItemImg.setAttribute('src', data.channels[i].image.toString())
   //  console.log(playlistItemImg)

   //  document.getElementById("cover-image").src=data.channels[6].image
   tracks.appendChild(playlistItem);
   playlistItem.appendChild(playlistItemImg);
//AUDIO
    // const audioSrc = document.getElementById("mp3")
    // audioSrc.setAttribute("src", data.channels[i].liveaudio.url)
   
    const audioPlayer = document.getElementById("player")
    playlistItem.addEventListener('click', () =>{
        if(currentlyActive === data.channels[i].liveaudio){
          audioPlayer.pause()
          currentlyActive=null;
          playlistItem.classList.remove('active')
        } else {
          if(currentlyActive){
            document
            .querySelector('.active').classList.remove('active')
          }
          currentlyActive = data.channels[i].liveaudio
          playlistItem.classList.add('active')
        //Play preview if available
          if(data.channels[i].liveaudio){
            audioPlayer.setAttribute('src', data.channels[i].liveaudio.url.toString())
            audioPlayer.play()
          } else{
            audioPlayer.pause()
          }
          console.log(audioSrc)
        }
      })
      
   }
  
   
  

}