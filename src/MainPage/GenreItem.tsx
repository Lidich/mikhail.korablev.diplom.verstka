interface IGenreItem {
  text: string;
  url: string;
}

function GenreItem(props: IGenreItem) {
  const { text, url } = props;
  return (
    <li className="text-black card-genre-item">
      <a href={url} className="text-black card-genre-item-link">
        {text}
      </a>
    </li>
  );
}

export default GenreItem;
