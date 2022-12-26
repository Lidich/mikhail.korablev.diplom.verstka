import {
  Artist,
  fetchedData,
  fetchedSearchData,
  Tag,
} from "./types/ObjectsTypes";

/**
 * Извлечение данных
 * @param {string} method Метод извлечения данных
 * @param {string} artist Имя артиста
 * @param {string} track Название трека
 * @param {number} limit Предельное количество объектов
 * @param {string} api_key Апи ключ
 * @returns Результат извлечения данных
 */
async function fetchData(
  method: string,
  artist: string = "",
  track: string = "",
  limit = 7,
  api_key = "687f75d4e98de92fbb1997c826992306"
) {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${api_key}&artist=${artist}&track=${track}&autocorrect[1]&format=json&limit=${limit}`
  );
  const data = await response.json();
  return data;
}

/**
 * Функция для сбора всей инофрмации
 */
export async function fetchAllHotData() {
  const result: fetchedData = {
    hotArtists: [],
    hotTracks: [],
  };

  await Promise.all([
    fetchData("chart.gettopartists"),
    fetchData("chart.gettoptracks"),
  ]).then(([data1, data2]) => {
    data1.artists.artist.map((item: any) => {
      result.hotArtists.push({
        name: item.name,
        url: item.url,
        listeners: item.listeners,
        images: item.image,
      });
    });

    data2.tracks.track.map((item: any) => {
      result.hotTracks.push({
        name: item.name,
        url: item.url,
        artist: { name: item.artist.name, url: item.artist.url },
        images: item.image,
      });
    });
  });
  const promises_artists_tags = result.hotArtists.map((artist: Artist) =>
    fetchData("artist.gettoptags", artist.name)
  );

  const promises_tracks_tags = result.hotTracks.map((track) =>
    fetchData("track.gettoptags", track.artist.name, track.name)
  );
  let tempStorageArtistTags: { toptags: { tag: Tag[] } }[] = [];
  let tempStorageTrackTags: { toptags: { tag: Tag[] } }[] = [];
  await Promise.all([...promises_artists_tags, ...promises_tracks_tags]).then(
    (data1 = []) => {
      tempStorageArtistTags = data1.slice(0, promises_artists_tags.length);

      tempStorageTrackTags = data1.slice(
        promises_artists_tags.length,
        promises_artists_tags.length + promises_tracks_tags.length
      );
    }
  );
  for (let i = 0; i < result.hotArtists.length; i++) {
    result.hotArtists[i].tags = tempStorageArtistTags[i].toptags.tag.slice(
      0,
      3
    );
  }

  for (let i = 0; i < result.hotTracks.length; i++) {
    try {
      result.hotTracks[i].tags = tempStorageTrackTags[i].toptags.tag.slice(
        0,
        3
      );
    } catch {
      result.hotTracks[i].tags = [];
    }
  }

  return result;
}

/**
 * Извлечение всей необходимой информации по поиску
 * @param {string} search_text Текст поиска
 */
export async function fetchAllSearchData(searchText: string) {
  const result: fetchedSearchData = {
    searchArtists: [],
    searchAlbums: [],
    searchTracks: [],
  };

  await Promise.all([
    fetchSearchData("artist.search", "artist", searchText, 8),
    fetchSearchData("album.search", "album", searchText, 8),
    fetchSearchData("track.search", "track", searchText, 8),
  ]).then(([data1, data2, data3]) => {
    data1.results.artistmatches.artist.map((item: any) => {
      result.searchArtists.push({
        name: item.name,
        url: item.url,
        listeners: item.listeners,
        images: item.image,
      });
    });
    data2.results.albummatches.album.map((item: any) => {
      result.searchAlbums.push({
        name: item.name,
        url: item.url,
        artist: {
          name: item.artist,
          url: item.url.slice(0, item.url.lastIndexOf("/")),
        },
        images: item.image,
      });
    });
    data3.results.trackmatches.track.map((item: any) => {
      result.searchTracks.push({
        name: item.name,
        url: item.url,
        artist: {
          name: item.artist,
          url: item.url.slice(0, item.url.lastIndexOf("/") - 2),
        },
        images: item.image,
      });
    });
  });
  return result;
}
/**
 * Извлечение данных
 * @param {string} method Метод извлечения данных
 * @param {string} category Категория поиска
 * @param {string} search_text Текст поиска
 * @param {number} amount Предельное количество объектов
 * @param {string} api_key Апи ключ
 * @returns
 */
async function fetchSearchData(
  method: string,
  category: string,
  search_text: string,
  amount = 7,
  api_key = "687f75d4e98de92fbb1997c826992306"
) {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=${method}&${category}=${search_text}&api_key=${api_key}&limit=${amount}&format=json`
  );
  const data = await response.json().catch(() => {
    alert("Failed to parse data from server");
  });
  return data;
}
