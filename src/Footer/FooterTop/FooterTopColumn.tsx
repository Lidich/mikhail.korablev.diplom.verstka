import FooterTopColumnNavItem from "./FooterTopColumnNavItem";
import FooterTopHeader from "./FooterTopHeader";

interface IFooterTopColumn {
  headerText: string;
  headerColumnTextItems: string[];
}

function FooterTopColumn(props: IFooterTopColumn) {
  const { headerText, headerColumnTextItems } = props;
  return (
    <div className="footer-top__column">
      <FooterTopHeader headerText={headerText} />
      <div className=".footer-top__column-nav">
        <ul className="footer-top__column-nav-items">
          {headerColumnTextItems.map((textItem, index) => {
            return <FooterTopColumnNavItem key={index} itemText={textItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default FooterTopColumn;
