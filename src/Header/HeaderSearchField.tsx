import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context";

interface IHeaderSearchField {
  onRequest: () => void;
}

function HeaderSearchField(props: IHeaderSearchField) {
  const navigate = useNavigate();
  const { onRequest } = props;
  const { handleSearchRequest } = useContext(SearchContext);
  const searchField = useRef<HTMLInputElement>(null);
  const handleRequest = () => {
    onRequest();
    handleSearchRequest(searchField.current!.value);
  };
  const handleKeyPress = (key: React.KeyboardEvent) => {
    if (key.code == "Enter") {
      onRequest();
      handleSearchRequest(searchField.current!.value);
      navigate("/searchPage");
    }
  };
  const onClear = () => {
    searchField.current!.value = "";
  };
  return (
    <section className="header-search-field">
      <input
        type="text"
        className="text-black header-search-input"
        placeholder="Input search"
        onKeyPress={handleKeyPress}
        ref={searchField}
      />
      <button
        type="button"
        className="search-button header-cross"
        onClick={onClear}
      >
        <img
          className="search-button-img"
          src="https://www.last.fm/static/images/icons/clear_field_16.4768b21c62e1.png"
        />
      </button>
      <Link
        to="/searchPage"
        className="search-button header-search-lens"
        onClick={handleRequest}
      >
        <img
          className="search-button-img"
          src="https://www.last.fm/static/images/icons/search_16.bde37072495a.png"
        />
      </Link>
    </section>
  );
}

export default HeaderSearchField;
