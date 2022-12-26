import { useState } from "react";
import { Link } from "react-router-dom";
import UserControlItem from "./UserControlItem";

type userControlItemData = {
  text: string;
  link: string;
};

const userControlsData: userControlItemData[] = [
  { text: "Home", link: "/" },
  { text: "Live", link: "/" },
  { text: "Music", link: "/" },
  { text: "Charts", link: "/" },
  { text: "Events", link: "/" },
  { text: "Features", link: "/" },
];

interface IHeaderUserControls {
  mount: boolean;
  onLensClick: (value: boolean) => void;
}

function HeaderUserControls(props: IHeaderUserControls) {
  const { mount, onLensClick } = props;

  const handleLensClick = () => {
    onLensClick(!mount);
  };

  return (
    <div className="top-bar__controlls flex-block">
      <button
        type="button"
        onClick={handleLensClick}
        className="top-bar__header-start-search-button"
      >
        <img
          className="search-button-img"
          src="https://www.last.fm/static/images/icons/search_16.bde37072495a.png"
        />
      </button>
      <nav className="top-bar__nav">
        <ul className="top-bar__nav-items flex-block">
          {userControlsData.map((item, index) => {
            return (
              <UserControlItem key={index} text={item.text} link={item.link} />
            );
          })}
        </ul>
      </nav>

      <Link to={window.location.href}>
        <img
          className="top-bar__icon"
          src="https://lastfm.freetls.fastly.net/i/u/avatar42s/818148bf682d429dc215c1705eb27b98.png"
        />
      </Link>
    </div>
  );
}

export default HeaderUserControls;
