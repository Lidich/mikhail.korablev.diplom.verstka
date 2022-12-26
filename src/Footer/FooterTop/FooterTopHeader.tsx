interface IFooterTopHeader {
  headerText: string;
}

function FooterTopHeader(props: IFooterTopHeader) {
  const { headerText } = props;
  return <p className="text-light footer-top__column-header">{headerText}</p>;
}

export default FooterTopHeader;
