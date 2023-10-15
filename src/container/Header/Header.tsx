import "./Header.css";
import Logo from "components/Logo/logo";
import Nav from "components/Nav/Nav";
import CardIcons from "components/CardIcons/CardIcons";
type Props = {
  changeNumber: {
    num: number;
  };
};
const Header = ({ changeNumber }: Props) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <Nav />
          <CardIcons changeNumber={changeNumber} />
        </div>
      </div>
    </header>
  );
};
export default Header;
