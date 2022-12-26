import React from "react";
interface ISearchContext {
  searchRequest: string;
  handleSearchRequest: (value: string) => void;
}

export const SearchContext = React.createContext<ISearchContext>({
  searchRequest: "",
  handleSearchRequest: (value: string) => {
    return;
  },
});
