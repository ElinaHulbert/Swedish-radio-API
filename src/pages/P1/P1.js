fetch('http://api.sr.se/api/v2/programs/index?channelid=132&pagination=false&format=json')
  .then(response => response.json())
  .then(data => showTheTitle(data));

  function showTheTitle(data){
    console.log(data)
    const tracks = document.getElementById("tracks")

    for (i = 0; i<data.programs.length; i++){
      // console.log(data.programs[i])


      const playlistItem = document.createElement('div');
      playlistItem.classList.add('playlist-item')

      const playlistItemImg = document.createElement('img')
      playlistItemImg.classList.add('playlist-item-img')
      playlistItemImg.setAttribute('src', data.programs[i].programimage.toString())
    //  console.log(playlistItemImg)

    //  document.getElementById("cover-image").src=data.channels[6].image
    tracks.appendChild(playlistItem);
    playlistItem.appendChild(playlistItemImg);
  }
}

// const arrayOfId=[132, 163, 164, 213, 223, 205, 210, 212, 220, 200]

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




