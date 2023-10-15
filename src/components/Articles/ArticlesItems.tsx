import "./ArticlesItems.css";

type Props = {};
const ArticlesItems = (props: Props) => {
  return (
    <div className="article-container">
      <div className="foto-container"></div>

      <div className="information-from-decription">
        <h4 className="titel-decription">How To Buy</h4>
        <p className="decription-article">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere
        </p>
        <button className="button-article">SHOP NOW</button>
      </div>
    </div>
  );
};
export default ArticlesItems;
