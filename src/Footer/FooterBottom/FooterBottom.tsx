import LanguageSelect from "./LanguageSelect";
import License from "./License";
import TimeZone from "./TimeZone";

const languageSelectData = [
  "English",
  "Deutsch",
  "Español",
  "Français",
  "Italiano",
  "日本語",
  "Polski",
  "Português",
  "Русский",
  "Svenska",
  "Türkçe",
  "简体中文",
];

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="flex-block">
        <div className="footer-bottom__left-column">
          <LanguageSelect languageTextItems={languageSelectData} />
          <TimeZone />
          <License />
        </div>
        <div className="footer-bottom__right-column">
          <p className="text-light footer-bottom__right-column-text">
            Audioscrobbler
          </p>
          <img
            className="footer-logo"
            src="https://www.last.fm/static/images/footer_logo@2x.49ca51948b0a.png"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
