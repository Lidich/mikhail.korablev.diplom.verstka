import { useState } from "react";
import Category from "./Catrgory";

const categoriesData: string[] = ["Top results", "Artists", "Albums", "Tracks"];

interface ICategories {
  activeCategory: string;
  onActivity: (value: string) => void;
}

function Categories(props: ICategories) {
  const { activeCategory, onActivity } = props;
  const [active, setActive] = useState<string>(activeCategory);

  const handleActivity = (value: string) => {
    if (active !== value) {
      onActivity(value);
      setActive(value);
    }
  };
  return (
    <div className="search-categories flex-block">
      {categoriesData.map((text, index) => {
        return (
          <Category
            key={index}
            text={text}
            onActive={handleActivity}
            active={active === text}
          />
        );
      })}
    </div>
  );
}

export default Categories;
