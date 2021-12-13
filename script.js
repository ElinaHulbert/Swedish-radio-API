fetch('https://api.sr.se/api/v2/channels?format=json')
  .then(response => response.json())
  .then(data => showTheTitle(data));
 

 function showTheTitle(data){

    for (i = 0; i<data.channels.length; i++){
    console.log(data.channels[i])
   }
}

// const arrayOfId=[132, 163, 164, 213, 223, 205, 210, 212, 220, 200]
// for (const id of arrayOfId){
//     const response = await fetch('https://api.sr.se/api/v2/channels?format=json')
// }

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




