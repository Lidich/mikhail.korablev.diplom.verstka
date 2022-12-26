import LanguageSelectItem from "./LanguageSelectItem";

interface ILanguageSelect {
  languageTextItems: string[];
}

function LanguageSelect(props: ILanguageSelect) {
  const { languageTextItems } = props;
  return (
    <ul className="language-selector">
      {languageTextItems.map((text, index) => {
        return <LanguageSelectItem key={index} text={text} />;
      })}
    </ul>
  );
}

export default LanguageSelect;
