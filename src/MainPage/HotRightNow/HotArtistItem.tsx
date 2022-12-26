import { Artist, Tag } from "../../types/ObjectsTypes";
import GenreItem from "../GenreItem";

interface IHotArtistItem {
  artist: Artist;
}

function HotArtistItem(props: IHotArtistItem) {
  const { artist } = props;
  return (
    <div className="big-card">
      <a href={artist.url}>
        <img
          className="big-card__image"
          src={
            artist.images![3]["#text"] ??
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
          }
        />
      </a>

      <a className="text-black big-card__author" href={artist.url}>
        {artist.name}
      </a>
      <ul className="card-genre">
        {artist.tags!.map((item, index) => {
          return <GenreItem key={index} text={item.name} url={item.url} />;
        })}
      </ul>
    </div>
  );
}

export default HotArtistItem;
