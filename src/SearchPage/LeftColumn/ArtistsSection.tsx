import { Artist } from "../../types/ObjectsTypes";
import SearchedArtist from "./SerchedArtist";

interface IArtistsSection {
  data?: Artist[];
  text: string;
}

function ArtistsSection(props: IArtistsSection) {
  const { data, text } = props;
  return (
    <section className="search-content-section">
      <h2 className="text-black search-content-section__header">{text}</h2>
      <div className="content-section__items artists-list">
        {data?.map((item, index) => {
          return <SearchedArtist key={index} artist={item} />;
        })}
      </div>
    </section>
  );
}

export default ArtistsSection;
