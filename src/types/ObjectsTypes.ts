import { type } from "os";

export type Tag = {
  name: string;
  url: string;
};

export type OwnedTags = {
  ownerName: string;
  tags: Tag[];
};

export type Image = {
  [key: string]: string;
};

export type Album = {
  name: string;
  url: string;
  artist: Artist;
  images?: Image[];
};

export type Artist = {
  name: string;
  url: string;
  listeners?: number;
  tags?: Tag[];
  images?: Image[];
};

export type Track = {
  name: string;
  url: string;
  artist: Artist;
  tags?: Tag[];
  images?: Image[];
};

export type fetchedData = {
  hotArtists: Artist[];
  hotTracks: Track[];
};

export type fetchedSearchData = {
  searchArtists: Artist[];
  searchAlbums: Album[];
  searchTracks: Track[];
};
