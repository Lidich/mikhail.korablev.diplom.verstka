import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../../context";

function SearchField() {
  const { searchRequest, handleSearchRequest } = useContext(SearchContext);
  const searchField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchField.current!.value = searchRequest;
  }, [searchRequest]);

  const handleRequest = () => {
    handleSearchRequest(searchField.current!.value);
  };

  const handleKeyPress = (key: React.KeyboardEvent) => {
    if (key.code == "Enter") {
      handleSearchRequest(searchField.current!.value);
    }
  };

  const onClear = () => {
    searchField.current!.value = "";
  };
  return (
    <div className="search-field">
      <input
        type="text"
        className="text-black search-input"
        ref={searchField}
        onKeyPress={handleKeyPress}
      />
      <button type="button" className="search-button cross" onClick={onClear}>
        <img
          className="search-button-img"
          src="https://www.last.fm/static/images/icons/clear_field_16.4768b21c62e1.png"
        />
      </button>
      <button
        type="button"
        className="search-button search-lens"
        onClick={handleRequest}
      >
        <img
          className="search-button-img"
          src="https://www.last.fm/static/images/icons/search_232323_16.fd4564f92909.png"
        />
      </button>
    </div>
  );
}

export default SearchField;
