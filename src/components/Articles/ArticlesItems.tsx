import "./ArticlesItems.css";

type Props = {
  articleTitle: string;
  articleDescription: string;
  arcitleImage: string;
  articleLike: string;
  id: number;
};
const ArticlesItems = ({
  articleTitle,
  articleDescription,
  arcitleImage,
  articleLike,
}: Props) => {
  return (
    <div className="article-container">
      <div className="foto-container"></div>
      <img src={arcitleImage} alt="" className="foto-article" />
      <div className="information-from-decription">
        <h4 className="titel-decription">{articleTitle}</h4>
        <p className="decription-article">{articleDescription}</p>
        <div className="button-and-likes">
          <button className="button-article">SHOP NOW</button>
          <img src={articleLike} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ArticlesItems;
