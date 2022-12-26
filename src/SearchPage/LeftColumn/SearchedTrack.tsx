import { Track } from "../../types/ObjectsTypes";

interface ISearchedTrack {
  track: Track;
}

function SearchedTrack(props: ISearchedTrack) {
  const { track } = props;
  return (
    <div className="line-music-card flex-block">
      <button className="line-music-card__button">
        <img
          className="line-music-card__button-img"
          src="https://www.last.fm/static/images/icons/play_dark_16.e469e7d1482a.png"
        />
      </button>
      <a href={track.url}>
        <img
          className="line-music-card__img"
          src={
            track.images![3]["#text"] == ""
              ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
              : track.images![3]["#text"]
          }
          alt=""
        />
      </a>
      <button className="line-music-card__button">
        <img className="line-music-card__button-img" src="/img/heart.png" />
      </button>
      <div className="line-music-card__track-name">
        <a
          href={track.url}
          className="text-black line-music-card__track-name-link"
        >
          {track.name}
        </a>
      </div>
      <div className="line-music-card__track-author">
        <a
          href={track.artist.url}
          className="text-black line-music-card__track-author-link"
        >
          {track.artist.name}
        </a>
      </div>
      <div className="line-music-card-track-time">
        <p className="text-black line-music-card-track-time-text"></p>
      </div>
    </div>
  );
}

export default SearchedTrack;
