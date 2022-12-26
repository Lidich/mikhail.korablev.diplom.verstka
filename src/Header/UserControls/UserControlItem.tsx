import { Link } from "react-router-dom";

interface IUserControlItem {
  text: string;
  link: string;
}

function UserControlItem(props: IUserControlItem) {
  const { text, link } = props;
  return (
    <li className="top-bar__nav-item">
      <Link to={link} className="text-light top-bar__nav-link">
        {text}
      </Link>
    </li>
  );
}

export default UserControlItem;
