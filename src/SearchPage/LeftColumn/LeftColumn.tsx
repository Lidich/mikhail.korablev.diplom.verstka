import { fetchedSearchData } from "../../types/ObjectsTypes";
import AlbumsSection from "./AlbumsSection";
import ArtistsSection from "./ArtistsSection";
import SearchField from "./SearchField";
import TracksSection from "./TracksSection";

interface ILeftColummn {
  data?: fetchedSearchData;
  artistsActive: boolean;
  albumsActive: boolean;
  tracksActive: boolean;
}

function LeftColumn(props: ILeftColummn) {
  const { data, artistsActive, albumsActive, tracksActive } = props;

  return (
    <div className="search-left-column">
      <SearchField />

      {artistsActive && (
        <ArtistsSection text="Artists" data={data?.searchArtists} />
      )}

      {albumsActive && (
        <AlbumsSection text="Albums" data={data?.searchAlbums} />
      )}

      {tracksActive && (
        <TracksSection text="Tracks" data={data?.searchTracks} />
      )}
    </div>
  );
}

export default LeftColumn;
