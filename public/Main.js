const hotList = document.querySelector(".hot"); 
const popularTracksList = document.querySelector(".popular-tracks"); 


startMain();

async function startMain(){
    const fetchedData = await fetchAllHotData();
    fillHotArtists(fetchedData.data_hot_artists, fetchedData.artist_tags_datas);
    fillHotTracks(fetchedData.data_hot_tracks, fetchedData.track_tags_datas);
}

async function fetchAllData(method, artist, track, limit = 7, api_key = "687f75d4e98de92fbb1997c826992306"){
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${api_key}&artist=${artist}&track=${track}&autocorrect[1]&format=json&limit=${limit}`).catch(() => {
        alert("Failed to establish a connection with the server");
    });
    const data = await response.json().catch(() => {
        alert("Failed to parse data from server");
    });
    return data;
}

async function fetchAllHotData(){
    const result_data = {
        data_hot_artists : undefined,
        data_hot_tracks : undefined,
        artist_tags_datas : undefined,
        track_tags_datas : undefined
    }
    await Promise.all([fetchAllData("chart.gettopartists"), fetchAllData("chart.gettoptracks")]).then(
        ([data1, data2]) => {
            result_data.data_hot_artists = data1;
            result_data.data_hot_tracks = data2;
        }
    )
    const promises_artists_tags = result_data.data_hot_artists.artists.artist.map((artist) => fetchAllData("artist.gettoptags", artist.name));
    const promises_tracks_tags = result_data.data_hot_tracks.tracks.track.map((track) => fetchAllData("track.gettoptags", track.artist.name, track.name));
    await Promise.all([...promises_artists_tags, ...promises_tracks_tags]).then(
        (data1 = []) => {
            result_data.artist_tags_datas = data1.slice(0, promises_artists_tags.length);
            result_data.track_tags_datas = data1.slice(promises_artists_tags.length, promises_artists_tags.length + promises_tracks_tags.length);
        }
    )
    return result_data;
}

function fillHotArtists(data_hot_artists, artist_tags_datas){
    for(let i = 0; i < data_hot_artists.artists.artist.length; i++){
        showInfoArtists(data_hot_artists.artists.artist[i], artist_tags_datas[i])
    }
}

function fillHotTracks(data_hot_tracks, track_tags_datas){
    for(let i = 0; i < data_hot_tracks.tracks.track.length; i++){
        showTrackInfo(data_hot_tracks.tracks.track[i], track_tags_datas[i])
    }
}

function showInfoArtists(artist, artist_tags_data){
    appendArtistCard(
        artist.name,
        artist.url,
        artist.image[3]["#text"],
        artist_tags_data.toptags.tag.slice(0, 3)
    )
}

function showTrackInfo(track, track_tags_data){
    try{
        let img_url = track?.image[1]["#text"] ?? "https://lastfm.freetls.fastly.net/i/u/300x300/4128a6eb29f94943c9d206c08e625904.jpg";
    appendTrackCard(
        track.name,
        track.url,
        track.artist.name,
        track.artist.url,
        img_url,
        track_tags_data.toptags.tag.slice(0,3)
    )
    }
    catch{}
}