import "./Main.css";
import Articles from "components/Articles/Articles";
type Props = {};
const Main = (props: Props) => {
  return (
    <div className="main-container">
      <div className="main-content-whith-article">
        <Articles />
      </div>
    </div>
  );
};
export default Main;
