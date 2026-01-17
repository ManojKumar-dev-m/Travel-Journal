import globe from "../assets/Globe.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header-img" src={globe} alt="Globe" />
      <span className="header-span">My TravelJournal</span>
    </header>
  );
}
