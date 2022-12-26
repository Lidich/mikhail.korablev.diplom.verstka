import { Track } from "../../types/ObjectsTypes";
import GenreItem from "../GenreItem";

interface IHotTrackItem {
  track: Track;
}

function HotTrackItem(props: IHotTrackItem) {
  const { track } = props;
  return (
    <div className="small-card">
      <a href={track.url}>
        <img
          className="small-card__image"
          src={
            track.images![3]["#text"] ??
            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
          }
        />
      </a>
      <div className="small-card__info">
        <a href={track.url} className="text-black small-card__song-name">
          {track.name}
        </a>
        <a href={track.artist.url} className="text-black small-card__author">
          {track.artist.name}
        </a>
        <ul className="card-genre">
          {track.tags!.map((item, index) => {
            return <GenreItem key={index} text={item.name} url={item.url} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default HotTrackItem;
