
window.onload = () => {
    loadAlbums('pink floyd', '#recently-played')
    loadAlbums('slipknot', "#best-of-2020")
    loadAlbums('slayer', "#shows-to-try")
}

const loadAlbums = (query, queryselector) => {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
        "method": "GET",
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        albums = []
        const obj = {title:query, album: data.data.slice(0,6)}
        albums.push(obj)
        console.log("album is here", albums)
        for(i = 0; i<albums.length; i++){
            
            //console.log(albums[i].album)
            const data = albums[i].album;
            data.forEach(result => {
                const title = result.title_short;
                const cover = result.album.cover_medium;
                const id = result.album.id;
                const link = result.artist.link
                let row = document.querySelector(queryselector)
                let col = document.createElement('div')
                col.className = 'card col-sm-6 col-md-2 px-2 py-2'
                col.innerHTML +=
                ` <img class="card__image" src="${cover}"  onclick ="window.location.assign('./album.html?albumId='+ ${id})"/>
                <div class="card__body">
                <div class="card__meta">
                    <p><strong>${title}</strong><span><br>${id}</span></p>
                </div>
                </div>
                `
                row.appendChild(col)
            });
        }
        /* albums.forEach((albumResult, i) => {
            const data = albumResult[i].album;
            console.log(data)
            data.forEach((result) =>{
                const title = result.title_short;
                const cover = result.album.cover_medium;
                const id = result.album.id;
                let row = document.querySelector(queryselector)
                let col = document.createElement('div')
                col.className = 'card col-sm-6 col-md-2 px-2 py-2'
                col.innerHTML +=
                ` <img class="card__image" src="${cover}" />
                <div class="card__body">
                <div class="card__meta">
                    <p><strong>${title}</strong><span><br>${id}</span></p>
                </div>
                </div>
                `
                row.appendChild(col)
            })
        }) */
    })
}
const goToAlbumPage =(loadAlbums, event)=>{
    let cardGrabber = document.querySelector('.card')
    cardGrabber.addEventListener(click, (event) =>{
        let searchParams = new URLSearchParams(window.location.search)
        loadAlbums()
        window.location.assign(picture.photographer_url)
    })

}