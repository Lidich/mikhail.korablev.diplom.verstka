import { Artist } from "../../types/ObjectsTypes";

interface ISearchedArtist {
  artist: Artist;
}

function SearchedArtist(props: ISearchedArtist) {
  const { artist } = props;
  return (
    <div className="image-card">
      <img
        className="image-card-img"
        src={
          artist.images![3]["#text"] == ""
            ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
            : artist.images![3]["#text"]
        }
      />
      <div className="card-details">
        <a href={artist.url} className="text-light image-card-info-name">
          {artist.name}
        </a>
        <p className="text-light image-card-info-listeners">
          {artist.listeners} listeners
        </p>
      </div>
    </div>
  );
}

export default SearchedArtist;
