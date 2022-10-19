import React, { useContext } from "react";
import Comment from "../Comment";
import { CommentType } from "../../util/types";
import { LoadingContext } from "../../Context";
import { Skeleton } from "@mui/material";

export default function CommentSection({
  showMore,
  comments,
}: {
  showMore: boolean;
  comments: Array<CommentType>;
}) {
  const isLoaded = useContext(LoadingContext);

  const commentsToRender = showMore ? comments : [...comments].splice(0, 2);
  return isLoaded.commentsLoaded ? (
    <div className="CommentSection">
      {commentsToRender.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  ) : (
    <Skeleton className="CommentSkeleton" variant="rounded" width="100%">
      <div style={{ paddingTop: "15%", marginTop: "1rem" }} />
    </Skeleton>
  );
}
