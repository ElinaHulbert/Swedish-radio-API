// fetch('https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false')
//   .then(response => response.json())
//   .then(data => showTheTitle(data));

//   let currentlyActive
 
//  function showTheTitle(data){
  
//    console.log(data)
//    const audioSrc = document.getElementById("mp3")
//    const tracks = document.getElementById("tracks")
//    const audioPlayer = document.getElementById("player")

 
//    for (i = 0; i<data.channels.length; i++){
//     // console.log(data.programs[i])
//     console.log(data.channels[i].liveaudio.url)
    
// // IMAGES
//     const playlistItem = document.createElement('div');
//     playlistItem.classList.add('playlist-item')

//     const playlistItemImg = document.createElement('img')
//     playlistItemImg.classList.add('playlist-item-img')
//     playlistItemImg.setAttribute('src', data.channels[i].image.toString())
//     tracks.appendChild(playlistItem);
//     playlistItem.appendChild(playlistItemImg);
// //AUDIO
    
//     // audioSrc.setAttribute("src", data.channels[i].liveaudio.url)
//     playlistItem.addEventListener('click', (element) => {
//       console.log("ELEMENT", element);
    
//       if(currentlyActive === data.channels[i].liveaudio){
//         audioPlayer.pause()
//         currentlyActive=null;
//         playlistItem.classList.remove('active')
//       } else {
//         if(currentlyActive){
//           document
//           .querySelector('.active').classList.remove('active')
//         }
//         currentlyActive = data.channels[i].liveaudio
//         playlistItem.classList.add('active')
      
//         if(data.channels[i].liveaudio){
//           audioPlayer.setAttribute('src', data.channels[i].liveaudio.url)
//           audioPlayer.play()
//         } else{
//           audioPlayer.pause()
//         }
//         console.log(audioSrc)
//       }
//     })      
//   }
// } 

// allChannels.push(data.channels.liveaudio.url)
// console.log("20", allChannels)

async function getChannels(){
  return fetch('https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false')
    .then(response => response.json())
    .then(data => (data.channels));
}


async function renderChannels(){
  let channels = await getChannels()
  console.log(channels)
  channels.forEach(channel => {
  createList(channel.image, channel.liveaudio.id, channel.tagline, channel.name)
  
  console.log(channel.liveaudio.id)
  });
  
  
}

renderChannels()

var playing = false;


function createList(image, idNumber, description, name){
  const img = document.createElement("img")
  const li = document.createElement("li") 
  const h3 = document.createElement("h3")
  const p = document.createElement("p")
  const a = document.createElement("a")
  li.setAttribute("class", "tag")
  console.log(li)
  
  if (image){
  document.getElementById("list").appendChild(li).appendChild(img).setAttribute('src', image)
  document.getElementById("list").appendChild(li).appendChild(a).setAttribute("href", "")
  document.getElementById("list").appendChild(li).appendChild(h3)
  document.getElementById("list").appendChild(li).appendChild(p)
  a.textContent = 'All Programs';
  h3.innerText = `${name}`;
  p.innerText = `${description}`;
  li.setAttribute('id', idNumber)
  img.addEventListener("click", function (event){
  document.querySelector(".playlist").setAttribute("src", `https://sverigesradio.se/topsy/direkt/srapi/${idNumber}.mp3`)
    if(!playing) {
      play();
      img.setAttribute("class", "active")
  } else {
    pause()
  }
  img.removeAttribute("class", "active")
  })
}
}




function play() {
   document.querySelector(".playlist").load();
   document.querySelector(".playlist").play();
   playing = true;
}

function pause() {
  document.querySelector(".playlist").pause();
   playing = false;
}

// function createAudio(idNumber){
//   let image = document.querySelector("img")
  
  
// }



//   .then(response => response.json())

function createProgramLink(){
 
  
}