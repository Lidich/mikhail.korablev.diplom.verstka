const artistsList = document.querySelector(".item-list__artists"); 
const albumsList = document.querySelector(".item-list__albums"); 
const tracksList = document.querySelector(".track-list__list"); 
const searchInput = document.querySelector(".search-field"); 
const searchInputButton = document.querySelector(".search--image"); 
const searchResultField = document.querySelector(".search-body") 
const searchResultHeader = document.querySelector(".search-header") 

async function start(category = "Top results"){
    const search_text = (new URLSearchParams(location.search)).get("search_text") ?? "";
    if(search_text != ""){
        const fetched_data = await fetchData(search_text);
        showSearchResult(search_text, category, fetched_data);
        if(fetched_data.data_artists.results.artistmatches.artist.length === 0
            && fetched_data.data_albums.results.albummatches.album.length === 0
            && fetched_data.data_tracks.results.trackmatches.track.length === 0
        )
        {
            alert("Nothing was found");
        }
    }  
}

start();

searchInput.addEventListener("keydown", (key) => {
    if(key.code === "Enter"){
        const search_text = searchInput.value;
        window.location.href = `search.html?search_text=${search_text}`;
    }
});

searchInputButton.addEventListener("click", () => {
        const search_text = searchInput.value;
        window.location.href = `search.html?search_text=${search_text}`;
})

function change_category(tab){
    tab.classList.toggle("non-active-category");
    tab.classList.toggle("active-category");
}

function showSearchResult(search_text, categorie_type, fetchedData){

    switch(categorie_type)
    {
        case "Top results":
            showTopResult(search_text, fetchedData);
            break;
        case "Artists":
            showArtistsResult(fetchedData);
            break;
        case "Albums":
            showAlbumsResult(fetchedData);
            break;
        case "Tracks":
            showTracksResult(fetchedData);
            break;
    }
}

function showTopResult(search_text, fetchedData){
    searchResultHeader.textContent = `Search results for "${search_text}"`;
    searchInput.value = search_text;
    showArtistsResult(fetchedData);
    showAlbumsResult(fetchedData);
    showTracksResult(fetchedData);
}

async function showArtistsResult(fetchedData){

    const list = document.querySelector(".item-list__artists");
    fetchedData.data_artists.results.artistmatches.artist.forEach(el => {
        insertDataArtist(list,
                            el.name,
                            el.listeners,
                            el.url,
                            el.image[3]["#text"] === "" ? undefined : el.image[3]["#text"]
        )
    })
}

async function showAlbumsResult(fetchedData){
    const list = document.querySelector(".item-list__albums");
    fetchedData.data_albums.results.albummatches.album.forEach(el => {
        const artist_url = el.url.slice(0, el.url.lastIndexOf("/"));
        insertDataAlbum(list,
                            el.name,
                            el.url,
                            el.artist,
                            artist_url,
                            el.image[3]["#text"] === "" ? undefined : el.image[3]["#text"]
        );

    })

}

async function showTracksResult(fetchedData){
    const list = document.querySelector(".track-list__list");
    fetchedData.data_tracks.results.trackmatches.track.forEach(el => {
        const artist_url = el.url.slice(0, el.url.lastIndexOf("/")-2);
        insertDateTrack(list,
                            el.name,
                            el.url,
                            el.artist,
                            artist_url,
                            el.image[1]["#text"] === "" ? undefined : el.image[1]["#text"]
        );

    })
}

async function fetchData(search_text){
    const result_data = {
        data_artists : undefined,
        data_albums : undefined,
        data_tracks : undefined
    }
    await Promise.all([fetchResult("artist.search", "artist", search_text, 8), fetchResult("album.search", "album", search_text, 8), fetchResult("track.search", "track", search_text, 8)]).then(
        ([data1, data2, data3]) => {
            result_data.data_artists = data1;
            result_data.data_albums = data2;
            result_data.data_tracks = data3;
        }
    )
    return result_data;
}

async function fetchResult(method, category, search_text, amount = 7, api_key = "687f75d4e98de92fbb1997c826992306"){
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=${method}&${category}=${search_text}&api_key=${api_key}&limit=${amount}&format=json`)
    .catch(() => {
        alert("Failed to establish a connection with the server");
    });
    const data = await response.json().catch(() => {
        alert("Failed to parse data from server");
    });
    return data;
}

function insertDataArtist(list, artist_name, listeners_amount, artist_url, img_url = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.jpg"){
    list.insertAdjacentHTML("beforeend", create_image_artist_card(
                                    artist_name,
                                    listeners_amount,
                                    artist_url,
                                    img_url
                                    ))
}

function insertDataAlbum(list, album_name, album_url, artist_name, artist_url, img_url = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.jpg"){
    list.insertAdjacentHTML("beforeend", createAlbumCard(
                                            album_name,
                                            album_url,
                                            artist_name,
                                            artist_url,
                                            img_url
                                        ))
}

function insertDateTrack(list, track_name, track_url, author_name, author_url, img_url = "https://lastfm.freetls.fastly.net/i/u/64s/4128a6eb29f94943c9d206c08e625904.jpg"){
    list.insertAdjacentHTML("beforeend", createTrackCell(
                                            track_name,
                                            track_url,
                                            author_name,
                                            author_url,
                                            img_url
                                        ))
}
