import HeaderMusicPlayerControl from "./HeaderMusicPlayerControl";

const playerControlsImgLinks : string[] = ["img/prev-button.png", "img/play-button.png", "img/next-button.png"]

function HeaderMusicPlayer() {
    return (
        <div className="top-bar__music-player flex-block">
            <img
              className="top-bar__music-player-img"
              src="https://www.last.fm/static/images/defaults/player_default_album.430223706b14.png"
            />
            {playerControlsImgLinks.map((item, index) => {
                return <HeaderMusicPlayerControl key={index} imgLink={item}/>
            })}
            <button
              type="button"
              className="top-bar__music-player-button top-bar__love-button"
            >
              <img
                className="top-bar__music-player-button-img"
                src="img/heart-white.png"
                alt=""
              />
            </button>А
          </div>
    );
}


export default HeaderMusicPlayer;