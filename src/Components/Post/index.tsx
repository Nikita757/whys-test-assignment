import { useContext, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

import { LoadingContext } from "../../Context";
import { ArticleType, DocWithVar, LoadState } from "../../util/types";
import { delay } from "../../util/util";
import "./index.css";

export default function Post() {
  const {loadState, setIsLoaded} = useContext(LoadingContext);
  const [article, setArticle] = useState<ArticleType | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const curDoc = document as DocWithVar;

      await delay(1000);

      const article = curDoc.__article;
      setArticle({ ...article, date: new Date(article.date).toLocaleString() });
      setIsLoaded((newState: LoadState) => {
        return {
          ...newState,
          articleLoaded: true,
        };
      });
    }

    fetchData();
  }, []);


  return loadState.articleLoaded ? (
    <div className="Article">
      <div className="Author">{article!.author}</div>
      <div className="Content">{article!.text}</div>
      <div className="Date">{article!.date}</div>
    </div>
  ) : (
    <Skeleton className="ArticleSkeleton" variant="rounded" width="100%">
      <div style={{ paddingTop: "20%" }} />
    </Skeleton>
  );
}
