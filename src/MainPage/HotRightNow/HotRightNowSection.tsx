import { Artist, Track } from "../../types/ObjectsTypes";
import HotArtistItem from "./HotArtistItem";
import HotTrackItem from "../PopularTracks/HotTrackItem";

interface IHotRightNowSection {
  data?: Artist[];
}

function HotRightNowSection(props: IHotRightNowSection) {
  const { data } = props;
  return (
    <section className="content-section">
      <h3 className="text-black content-section__header">Hot right now</h3>
      <div className="content-section__items hot-list">
        {data?.map((item, index) => {
          return <HotArtistItem key={index} artist={item} />;
        })}
      </div>
    </section>
  );
}

export default HotRightNowSection;
