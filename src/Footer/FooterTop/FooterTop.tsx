import { footerColumnData } from "../../types/FooterTypes";
import FooterTopColumn from "./FooterTopColumn";

const footerTopData: footerColumnData[] = [
  { header: "COMPANY", navTexts: ["About Last.fm", "Contact Us", "Jobs"] },
  {
    header: "HELP",
    navTexts: [
      "Track My Music",
      "Community Support",
      "Community Guidelines",
      "Help",
    ],
  },
  {
    header: "GOODIES",
    navTexts: [
      "Download Scrobbler",
      "Developer API",
      "Free Music Downloads",
      "Merchandise",
    ],
  },
  {
    header: "ACCOUNT",
    navTexts: ["Inbox", "Settings", "Last.fm Pro", "Logout"],
  },
  {
    header: "FOLLOW US",
    navTexts: ["Facebook", "Twitter", "Instagram", "YouTube"],
  },
];

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="flex-block">
        {footerTopData.map((column, index) => {
          return (
            <FooterTopColumn
              key={index}
              headerText={column.header}
              headerColumnTextItems={column.navTexts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FooterTop;
