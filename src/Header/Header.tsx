import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMusicPlayer from "./MusicPlayer/HeaderMusicPlayer";
import HeaderSearchField from "./HeaderSearchField";
import HeaderUserControls from "./UserControls/HeaderUserControls";

function Header() {
  const [mount, setMount] = useState<boolean>(false);

  const showSearchField = (mount: boolean) => setMount(mount);

  const handleRequest = () => {
    setMount(!mount);
  };
  return (
    <header className="header">
      <section className="top-bar">
        <HeaderMusicPlayer />

        <HeaderLogo />

        <HeaderUserControls mount={mount} onLensClick={showSearchField} />
      </section>
      {mount && <HeaderSearchField onRequest={handleRequest} />}
    </header>
  );
}

export default Header;
