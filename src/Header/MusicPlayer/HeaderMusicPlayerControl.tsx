interface IHeaderMusicPlayerControl {
  imgLink: string;
}

function HeaderMusicPlayerControl(props: IHeaderMusicPlayerControl) {
  const { imgLink } = props;
  return (
    <button type="button" className="top-bar__music-player-button">
      <img
        className="top-bar__music-player-button-img"
        src={imgLink}
        alt="None"
      />
    </button>
  );
}

export default HeaderMusicPlayerControl;
