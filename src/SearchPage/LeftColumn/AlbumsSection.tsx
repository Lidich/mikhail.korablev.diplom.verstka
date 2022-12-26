import { Album } from "../../types/ObjectsTypes";
import SearchedAlbum from "./SearchedAlbum";

interface IAlbumsSection {
  data?: Album[];
  text: string;
}

function AlbumsSection(props: IAlbumsSection) {
  const { data, text } = props;
  return (
    <section className="search-content-section">
      <h2 className="text-black search-content-section__header">{text}</h2>
      <div className="content-section__items albums-list">
        {data?.map((item, index) => {
          return <SearchedAlbum key={index} album={item} />;
        })}
      </div>
    </section>
  );
}

export default AlbumsSection;
