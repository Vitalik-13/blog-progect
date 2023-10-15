import Footer from "container/Footer/Footer";
import Header from "container/Header/Header";
import Main from "container/Main/Main";
import "./reset.css";
import { useState } from "react";

type Props = {};
type changeNumber = {
  num: number;
};

const App = (props: Props) => {
  const [changeNumber, setChangeNumber] = useState<changeNumber>({
    num: 0,
  });

  const changeValue = (isIncrement: boolean) => {
    setChangeNumber((prev) => ({
      num: isIncrement ? prev.num + 1 : prev.num - 1,
    }));
  };

  return (
    <>
      <Header changeNumber={changeNumber} />
      <Main changeValue={changeValue} />
      <Footer />
    </>
  );
};

export default App;
