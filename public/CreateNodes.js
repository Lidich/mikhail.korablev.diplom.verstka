
function appendArtistCard(name, name_url, img_url, genres){
    let card = document.createElement("div");
    card.classList.add("artist-card");

    let link_with_img = document.createElement("a");
    link_with_img.href = name_url;

    let card_image = document.createElement("img");
    card_image.src = img_url;
    card_image.className = "artist-card--photo";

    link_with_img.appendChild(card_image);

    card.appendChild(link_with_img);

    let artist_name = document.createElement("h3");

    let link_with_name = createLink(name, name_url, "text-black", "artist-card--header");

    artist_name.appendChild(link_with_name)

    card.appendChild(artist_name);

    let genres_list = document.createElement("ul");
    genres_list.className = "artist-card--description";

    genres.forEach(element => {
        genres_list.appendChild(createTag(element.name, element.url));
    });

    card.appendChild(genres_list);

    hotList.append(card)
}

 function appendTrackCard(track_name, track_url, artist_name, artist_url, img_url, genres){
    let card = document.createElement("div");
    card.classList.add("track-card");

    let link_with_img = document.createElement("a");
    link_with_img.href = track_url;

    let card_image = document.createElement("img");
    card_image.src = img_url;
    card_image.className = "track-card--image";

    link_with_img.appendChild(card_image);

    card.appendChild(link_with_img);

    let link_with_track_name = createLink(track_name, track_url, "text-black", "track-card--header");

    let link_with_artist_name = createLink(artist_name, artist_url, "text-black", "track-card--artist");



    let genres_list = document.createElement("ul");
    genres_list.className = "track-card--description";

    genres.slice(0, 3).forEach(element => {
        genres_list.appendChild(createTag(element.name, element.url));
    });


    card.appendChild(link_with_track_name);
    card.appendChild(link_with_artist_name);
    card.appendChild(genres_list)
    popularTracksList.append(card)
}

function createLink(text, url, ...classes){
    let link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    link.classList.add(...classes);

    return link;
}

function createTag(text, url){
    let list_child = document.createElement("li");
    list_child.classList.add("text-black", "card-genre-item");
    let list_child_link = createLink(text, url, "text-black", "card-genre-item-link");
    list_child.appendChild(list_child_link);
    return list_child;
}

function create_image_artist_card(artist_name, listeners_amount, artist_url, img_url){
    let template = `<div class="image-card">
    <img class="image-card-img" src=${img_url}>
    <div class="card-details">
      <a href=${artist_url} class="text-light image-card-info-name">${artist_name}</a>
      <p class="text-light image-card-info-listeners">${listeners_amount} listeners</p>
    </div>
  </div>`
    return template
}

function createAlbumCard(album_name, album_url, artist_name, artist_url, img_url){
    let template = `<div class="image-card">
    <img class="image-card-img" src=${img_url}>
    <div class="card-details">
      <a href=${album_url} class="text-light image-card-info-name">${album_name}</a>
      <a href=${artist_url} class="text-light image-card-info-artist">${artist_name}</a>
    </div>
  </div>`
    return template
}

function createTrackCell(track_name, track_url, author_name, author_url, img_url){
    let template = `<div class="track-list__cell">
    <img class="track-list--play-image" src="https://www.last.fm/static/images/icons/play_dark_16.e469e7d1482a.png">
    <a href=${track_url}><img class="track-list--image" src=${img_url} alt=""></a>
    <img class="track-list--like-image" src="like-button.png"> 
    <div class="track-list--track-link"><a href=${track_url} class="text-black line-music-card__track-name-link">${track_name}</a></div>
    <div class="track-list--artist-link"><a href=${author_url} class="text-black line-music-card__track-author-link">${author_name}</a></div>
  </div>`
    return template;
}

function createHeaderSearchField(){
    const template = `<section class="header-search-field hidden">
    <input type="text" class="text-black header-search-input" placeholder="Input search">
    <button type="button" class="search-button header-cross"> <img class="search-button-img" src="https://www.last.fm/static/images/icons/clear_field_16.4768b21c62e1.png"> </button>
    <button type="button" class="search-button header-search-lens"> <img class="search-button-img" src="https://www.last.fm/static/images/icons/search_16.bde37072495a.png"> </button>
  </section>`;
  return template;
}