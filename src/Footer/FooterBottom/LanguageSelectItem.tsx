interface ILanguageSelectItem {
  text: string;
}

function LanguageSelectItem(props: ILanguageSelectItem) {
  const { text } = props;
  return (
    <li className="language-selector-item">
      <button type="button" className="text-light language-button">
        {text}
      </button>
    </li>
  );
}

export default LanguageSelectItem;
