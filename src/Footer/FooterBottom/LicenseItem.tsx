interface ILicenseItem {
  link: string;
  mainText: string;
  postText: string;
}

function LicenseItem(props: ILicenseItem) {
  const { link, mainText, postText } = props;
  return (
    <li className="text-light footer-bottom__license-item">
      <a href={link} className="text-light footer-bottom__license-item-link">
        {mainText}
      </a>
      {postText}
    </li>
  );
}

export default LicenseItem;
