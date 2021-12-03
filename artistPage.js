let obj = {};

const profile = (query) => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + query)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const h1 = document.getElementById("header-head");
      h1.innerHTML = data.name;

      const imgContainer = document.getElementById("backgroundImage");
      imgContainer.style.backgroundImage = `url(${data.picture_xl})`;
    })
    .catch((err) => console.log(err));
};

const getSongs = (query) => {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
      query +
      "/top?limit=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const artist = data.data;
      console.log(artist);

      const row = document.createElement("div");

      for (let i = 0; i < artist.length; i++) {
        const artistDetails = artist[i];

        row.classList.add = "col-8";

        row.innerHTML += ` <div class="row artist-song1">
      <div class="col-1 py-4"> <i id="play-icon2" class="fas fa-play d-none"></i><span
      class="row-number">${i + 1}</span></div>
        <div class="col-6 py-3">
        <img src=${artistDetails.album.cover_medium} alt="${
          artistDetails.title
        }" height="40px" />
        <small> ${artistDetails.title_short}
        <strong>
        </strong></small>
        </div>
        <div class="col-4 py-4">
        <small>${artistDetails.id}</small>
        </div>
        <div class="col-1 py-4">
        <small>${artistDetails.duration}</small>
        </div>
        </div>`;
        const parent = document.getElementById("insert-before").parentNode;
        let insertbef = document.getElementById("insert-before");
        parent.insertBefore(row, insertbef);
      }
    })
    .catch((err) => console.log(err));
};

window.onload = () => {
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("songId");
  console.log(data);

  profile("412");
  getSongs("412");
};
