import { LicenseData } from "../../types/FooterTypes";

import LicenseItem from "./LicenseItem";

const licenseDataItems: LicenseData[] = [
  {
    href: "#",
    mainText: "CBS Interactive",
    postText: "© 2022 Last.fm Ltd. All rights reserved",
  },
  { href: "#", mainText: "Terms of Use", postText: "" },
  { href: "#", mainText: "Privacy Policy", postText: "" },
  { href: "#", mainText: "Legal Policies", postText: "" },
  { href: "#", mainText: "Cookies Policy", postText: "" },
  { href: "#", mainText: "Do Not Sell My Personal Information", postText: "" },
  { href: "#", mainText: "Jobs at ViacomCBS", postText: "" },
  { href: "#", mainText: "Last.fm Music", postText: "" },
  {
    href: "https://www.flaticon.com/free-icons/private-account",
    mainText: "Person picture",
    postText: "",
  },
  {
    href: "https://www.flaticon.com/authors/those-icons",
    mainText: "Search picture",
    postText: "",
  },
  {
    href: "https://www.flaticon.com/authors/octopocto",
    mainText: "Music player picture",
    postText: "",
  },
  {
    href: "https://www.flaticon.com/authors/nawicon",
    mainText: "Music player picture",
    postText: "",
  },
  {
    href: "https://www.flaticon.com/authors/nawicon",
    mainText: "Music player picture",
    postText: "",
  },
  {
    href: "https://www.flaticon.com/free-icons/heart",
    mainText: "Heart picture",
    postText: "",
  },
  {
    href: "https://www.flaticon.com/free-icons/close",
    mainText: "Cross picture",
    postText: "",
  },
];

function License() {
  return (
    <ul className="footer-bottom__license">
      {licenseDataItems.map((item, index) => {
        return (
          <LicenseItem
            key={index}
            link={item.href}
            mainText={item.mainText}
            postText={item.postText}
          />
        );
      })}
    </ul>
  );
}

export default License;
