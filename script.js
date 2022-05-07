async function getChannels() {
  return fetch(
    "https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false"
  )
    .then((response) => response.json())
    .then((data) => data.channels);
}

async function renderChannels() {
  let channels = await getChannels();
  console.log(channels);
  channels.forEach((channel) => {
    createList(
      channel.image,
      channel.liveaudio.id,
      channel.tagline,
      channel.name
    );

    console.log(channel.liveaudio.id);
  });
}

renderChannels();

var playing = false;

function createList(image, idNumber, description, name) {
  const img = document.createElement("img");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const a = document.createElement("a");
  li.setAttribute("class", "tag");
  img.setAttribute("class", "card_img");
  console.log(li);

  if (image) {
    document
      .getElementById("list")
      .appendChild(li)
      .appendChild(img)
      .setAttribute("src", image);
    document
      .getElementById("list")
      .appendChild(li)
      .appendChild(h3)
      .setAttribute("href", "");
    document.getElementById("list").appendChild(li).appendChild(p);
    // document.getElementById("list").appendChild(li).appendChild(a);
    a.textContent = "Alla Program";
    h3.innerText = `${name}`;
    p.innerText = `${description}`;
    li.setAttribute("id", idNumber);
    img.addEventListener("click", function (event) {
      document
        .querySelector(".playlist")
        .setAttribute(
          "src",
          `https://sverigesradio.se/topsy/direkt/srapi/${idNumber}.mp3`
        );

      !playing ? play() : pause();
    });
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

function createProgramLink() {}
