import Footer from "container/Footer/Footer";
import Header from "container/Header/Header";
import Main from "container/Main/Main";
import "./reset.css";

type Props = {};
const App = (props: Props) => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
export default App;