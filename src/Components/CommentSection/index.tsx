import { useContext, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import Comment from "../Comment";
import { CommentType, DocWithVar, LoadState } from "../../util/types";
import { delay } from "../../util/util";
import { LoadingContext } from "../../Context";
import CommentsButton from "../CommentsButton";

export default function CommentSection() {
  const {loadState, setIsLoaded} = useContext(LoadingContext);
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState<Array<CommentType>>([]);

  useEffect(() => {
    async function fetchData() {
      const curDoc = document as DocWithVar;

      await delay(1000);

      const commentsRaw = curDoc.__comments;
      const comments = commentsRaw.map((comment) => ({
        ...comment,
        date: new Date(comment.date),
      }));
      comments.sort(
        (com1, com2) =>
          Number(new Date(com2.date)) - Number(new Date(com1.date))
      );

      setComments(
        comments.map((comment) => ({
          ...comment,
          date: new Date(comment.date).toLocaleString(),
        }))
      );
      setIsLoaded((newState: LoadState) => {
        return {
          ...newState,
          commentsLoaded: true,
        };
      });

      await delay(100);

      setIsLoaded((newState: LoadState) => {
        return {
          ...newState,
          buttonLoaded: true,
        };
      });
    }

    fetchData();
  }, [])

  async function handleShowMore() {
    if (showMore) {
      setShowMore(!showMore);
      return;
    }
    const curDoc = document as DocWithVar;

    await delay(600);

    const allCommentsRaw = [...curDoc.__comments, ...curDoc.__moreComments];
    const allComments = allCommentsRaw.map((comment) => ({
      ...comment,
      date: new Date(comment.date),
    }));
    allComments.sort((com1, com2) => Number(com2.date) - Number(com1.date));
    setComments(
      allComments.map((comment) => ({
        ...comment,
        date: comment.date.toLocaleString(),
      }))
    );
    setShowMore(!showMore);
  }

  const commentsToRender = showMore ? comments : [...comments].splice(0, 2);

  return loadState.commentsLoaded ? (
  <>
    <div>
      {commentsToRender.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
    <CommentsButton handleOnClick={handleShowMore} showMore={showMore} />
  </>
  ) : ( 
  <Skeleton className="CommentSkeleton" variant="rounded" width="100%">
    <div style={{ paddingTop: "15%", marginTop: "1rem" }} />
  </Skeleton>
  )
}
