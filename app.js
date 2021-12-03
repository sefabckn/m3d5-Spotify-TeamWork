album = [];

const albumList = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const obj = { title: "eminem", album: data.data };
      album.push(obj);
      console.log("album is here", album);
      album.forEach((albumResult) => {
        const data = albumResult.album;
        data.forEach((result) => {
          const title = result.title_short;
          const cover = result.album.cover_medium;
          const id = result.album.id;
          let row = document.querySelector("#recently-played");
          let col = document.createElement("div");
          col.className = "card col-sm-6 col-md-2 px-2 py-2";
          col.innerHTML += ` <img class="card__image" src="${cover}" />
                <div class="card__body">
                <div class="card__meta">
                    <p><strong>${title}</strong><span><br>${id}</span></p>
                </div>
                </div>`;
          row.appendChild(col);
        });
      });
    });
};

window.onload = () => {
  document.querySelector("#album-loader").addEventListener("click", albumList);
};
