// ArticlesItems.tsx
import "./ArticlesItems.css";
import { useState } from "react";

type Props = {
  articleTitle: string;
  articleDescription: string;
  arcitleImage: string;
  likeImage: string;
  id: number;
  changeValue: (isIncrement: boolean) => void;
};

const ArticlesItems = ({
  articleTitle,
  articleDescription,
  arcitleImage,
  changeValue,
}: Props) => {
  let [likeImage, setLikeImage] = useState<string>(
    "/images/icons8-лайк-с-заливкой-30.png"
  );

  const changeColor = () => {
    if (likeImage === "/images/icons8-лайк-с-заливкой-30.png") {
      setLikeImage("/images/icons8-лайк-с-заливкойs-30.png");
      changeValue(true);
    } else {
      setLikeImage("/images/icons8-лайк-с-заливкой-30.png");
      changeValue(false);
    }
  };

  return (
    <div className="article-container">
      <div className="foto-container">
        <img src={arcitleImage} alt="" className="foto-article" />
      </div>
      <div className="information-from-decription">
        <h4 className="titel-decription">{articleTitle}</h4>
        <p className="decription-article">{articleDescription}</p>
        <div className="button-and-likes">
          <button className="button-article">LERN MORE</button>
          <img src={likeImage} onClick={changeColor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ArticlesItems;
