import "./Main.css";
import Articles from "components/Articles/Articles";
type Props = { changeValue: (isIncrement: boolean) => void };
const Main = ({ changeValue }: Props) => {
  return (
    <div className="main-container">
      <div className="main-content-whith-article">
        <Articles changeValue={changeValue} />
      </div>
    </div>
  );
};
export default Main;
