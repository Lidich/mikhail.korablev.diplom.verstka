import { Album } from "../../types/ObjectsTypes";

interface ISearchedAlbum {
  album: Album;
}

function SearchedAlbum(props: ISearchedAlbum) {
  const { album } = props;
  return (
    <div className="image-card">
      <img
        className="image-card-img"
        src={
          album.images![3]["#text"] == ""
            ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
            : album.images![3]["#text"]
        }
      />
      <div className="card-details">
        <a href={album.url} className="text-light image-card-info-name">
          {album.name}
        </a>
        <a
          href={album.artist.url}
          className="text-light image-card-info-artist"
        >
          {album.artist.name}
        </a>
      </div>
    </div>
  );
}

export default SearchedAlbum;
