import { Skeleton } from "@mui/material";
import React, { useContext } from "react";
import { LoadingContext } from "../../Context";
import { ArticleType, PostType } from "../../util/types";
import "./index.css";

export default function Post({ author, date, text }: ArticleType) {
  const isLoaded = useContext(LoadingContext);

  return isLoaded.articleLoaded ? (
    <div className="Article">
      <div className="Author">{author}</div>
      <div className="Content">{text}</div>
      <div className="Date">{date}</div>
    </div>
  ) : (
    <Skeleton className="ArticleSkeleton" variant="rounded" width="100%">
      <div style={{ paddingTop: "20%" }} />
    </Skeleton>
  );
}
