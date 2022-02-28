id = [132, 163, 164, 213, 223, 205, 210, 212, 220, 200];
iterateId();

function iterateId(){
  console.log(id, " id");
  id.forEach(id => {
    console.log(id + " iterated id")
  });
  
}


  fetch(`http://api.sr.se/api/v2/programs/index?channelid=${id}&pagination=false&format=json`)
    .then(response => response.json())
    .then(data =>  showTheTitle(data));


function showTheTitle(data){

    console.log(data, " data in showTheTitle")
    const tracks = document.getElementById("tracks")


    for (i = 0; i<data.programs.length; i++){
      const playlistItem = document.createElement('div');
      playlistItem.classList.add('playlist-item')

      const playlistItemImg = document.createElement('img')
      playlistItemImg.classList.add('playlist-item-img')
      playlistItemImg.setAttribute('src', data.programs[i].programimage.toString())
      console.log(data.programs[i].programimage.toString())
    
    tracks.appendChild(playlistItem);
    playlistItem.appendChild(playlistItemImg);
    }
}
 



//132 P1
//163 P2
//164 P3
//213 P4 Blekinge
//223 P4 Dalarna
//205 P4 Gotland
//210 P4 Gävleborg
//212 P4 Göteborg
//220 P4 Halland
//200 P4 Jämtland




