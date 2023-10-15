import Basket from "assets/icons8-корзина-17.png";
import Heard from "assets/icons8-сердце-15.png";
import Arrow from "assets/icons8-данные-в-обоих-направлениях-15.png";

type Props = {};
const CardIcons = (props: Props) => {
  return (
    <div className="navigation-image">
      <div className="image-container">
        <img src={Basket} alt="Basket" className="nav-icon basket" />
      </div>
      <div className="image-container">
        <img src={Heard} alt="Likes" className="nav-icon likes" />
      </div>
      <div className="image-container">
        <img src={Arrow} alt="arrows" className="nav-icon arrows" />
      </div>
    </div>
  );
};
export default CardIcons;
