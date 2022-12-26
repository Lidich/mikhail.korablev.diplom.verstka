import { Track } from "../../types/ObjectsTypes";
import HotTrackItem from "./HotTrackItem";

interface IPopularTracksSection {
  data?: Track[];
}

function PopularTracksSection(props: IPopularTracksSection) {
  const { data } = props;
  return (
    <section className="content-section">
      <h3 className="text-black content-section__header">Popular tracks</h3>
      <div className="content-section__items popular-tracks-list">
        {data?.map((item, index) => {
          return <HotTrackItem key={index} track={item} />;
        })}
      </div>
    </section>
  );
}

export default PopularTracksSection;
