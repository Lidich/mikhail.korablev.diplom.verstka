import { useEffect, useState } from "react";
import { fetchAllHotData } from "../api";
import { fetchedData } from "../types/ObjectsTypes";
import HotRightNowSection from "./HotRightNow/HotRightNowSection";
import PopularTracksSection from "./PopularTracks/PopularTracksSection";

function MainPage() {
  const [data, setData] = useState<fetchedData>();

  useEffect(() => {
    fetchAllHotData().then((result) => setData(result));
  }, []);

  return (
    <div>
      <main>
        <div>
          <div className="container">
            <h1 className="text-black page-header">Music</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <HotRightNowSection data={data?.hotArtists} />

            <PopularTracksSection data={data?.hotTracks} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
