import { useContext, useEffect, useState } from "react";
import { fetchAllSearchData } from "../../api";
import { SearchContext } from "../../context";
import { fetchedSearchData } from "../../types/ObjectsTypes";
import Categories from "../Categories/Categories";
import RightColumn from "../RightColumn/RightColumn";

import LeftColumn from "./LeftColumn";

function SearchPage() {
  const { searchRequest, handleSearchRequest } = useContext(SearchContext);
  const [active, setActive] = useState<string>("Top results");
  const [artistsActive, setArtistsActive] = useState<boolean>(true);
  const [albumsActive, setAlbumsActive] = useState<boolean>(true);
  const [tracksActive, setTracksActive] = useState<boolean>(true);
  const [data, setData] = useState<fetchedSearchData>();
  useEffect(() => {
    fetchAllSearchData(searchRequest).then((result) => setData(result));
  }, [searchRequest]);

  const handleActivity = (value: string) => {
    setActiveSections(value);
    setActive(value);
  };
  const setActiveSections = (value: string) => {
    switch (value) {
      case "Top results": {
        setArtistsActive(true);
        setAlbumsActive(true);
        setTracksActive(true);
        break;
      }
      case "Artists": {
        setArtistsActive(true);
        setAlbumsActive(false);
        setTracksActive(false);
        break;
      }
      case "Albums": {
        setArtistsActive(false);
        setAlbumsActive(true);
        setTracksActive(false);
        break;
      }
      case "Tracks": {
        setArtistsActive(false);
        setAlbumsActive(false);
        setTracksActive(true);
        break;
      }
    }
  };

  return (
    <div>
      <main>
        <div className="header-content search-header-content">
          <div className="container">
            <h2 className="text-black search-header">
              Search results for "{searchRequest}"
            </h2>
            <Categories onActivity={handleActivity} activeCategory={active} />
          </div>
        </div>
        <div className="page-content">
          <div className="container search-content">
            <LeftColumn
              data={data}
              artistsActive={artistsActive}
              albumsActive={albumsActive}
              tracksActive={tracksActive}
            />
            <RightColumn />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchPage;
