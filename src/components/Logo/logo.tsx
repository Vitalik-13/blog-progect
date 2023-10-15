import Logo from "assets/logo.webp";
type Props = {};
const logo = (props: Props) => {
  return (
    <div className="logo">
      <img src={Logo} alt="" className="foto-logo" />
    </div>
  );
};
export default logo;
