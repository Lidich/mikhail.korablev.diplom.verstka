import { Track } from "../../types/ObjectsTypes";
import SearchedTrack from "./SearchedTrack";

interface ITracksSection {
  data?: Track[];
  text: string;
}

function TracksSection(props: ITracksSection) {
  const { data, text } = props;
  return (
    <section className="search-content-section">
      <h2 className="text-black search-content-section__header">{text}</h2>
      <div className="tracks-list">
        {data?.map((item, index) => {
          return <SearchedTrack key={index} track={item} />;
        })}
      </div>
    </section>
  );
}

export default TracksSection;
