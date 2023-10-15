type Props = {};
const Nav = (props: Props) => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <button className="button-link">Home</button>
        </li>

        <li>
          <button className="button-link">Shop</button>
        </li>
        <li>
          <button className="button-link">About Me</button>
        </li>
        <li>
          <button className="button-link">Contact Me</button>
        </li>
        <li>
          <button className="button-link">Blog</button>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
