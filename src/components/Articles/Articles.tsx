import ArticlesItems from "./ArticlesItems";
import "./ArticlesItems.css";
import articleList from "utils/ArrayArticle";
type Props = { changeValue: (isIncrement: boolean) => void };
const Articles = ({ changeValue }: Props) => {
  return (
    <>
      {articleList.map(
        ({ id, arcitleImage, articleTitle, articleDescription, likeImage }) => (
          <ArticlesItems
            changeValue={changeValue}
            key={id}
            likeImage={likeImage}
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
