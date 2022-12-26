interface IFooterTopColumnNavItem {
  itemText: string;
}

function FooterTopColumnNavItem(props: IFooterTopColumnNavItem) {
  const { itemText } = props;
  return (
    <li className="footer-top__column-nav-item">
      <a className="text-light footer-top__column-nav-link" href="#">
        {itemText}
      </a>
    </li>
  );
}

export default FooterTopColumnNavItem;
