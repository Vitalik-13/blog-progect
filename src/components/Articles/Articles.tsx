import ArticlesItems from "./ArticlesItems";
import "./ArticlesItems.css";
import articleList from "utils/ArrayArticle";
type Props = {};
const Articles = (props: Props) => {
  return (
    <>
      {articleList.map(
        ({
          id,
          arcitleImage,
          articleTitle,
          articleDescription,
          articleLike,
        }) => (
          <ArticlesItems
            key={id}
            articleLike={articleLike}
            articleTitle={articleTitle}
            articleDescription={articleDescription}
            arcitleImage={arcitleImage}
            id={id}
          />
        )
      )}
    </>
  );
};
export default Articles;
