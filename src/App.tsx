import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { SearchContext } from "./context";
import SearchPage from "./SearchPage/LeftColumn/SearchPage";

function App() {
  const [searchRequest, setSearchRequest] = useState<string>("");

  useEffect(() => {
    const request = localStorage.getItem("request") || "";
    setSearchRequest(request);
  }, []);

  useEffect(() => {
    localStorage.setItem("request", searchRequest);
  }, [searchRequest]);

  const handleSearchRequest = (value: string) => {
    setSearchRequest(value);
  };
  return (
    <div>
      <SearchContext.Provider value={{ searchRequest, handleSearchRequest }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="searchPage" element={<SearchPage />} />
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
