import "./Header.css";
import Logo from "components/Logo/logo";
import Nav from "components/Nav/Nav";
import CardIcons from "components/CardIcons/CardIcons";
type Props = {};
const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <Nav />
          <CardIcons />
        </div>
      </div>
    </header>
  );
};
export default Header;
