import { useEffect, useState } from "react";

import Post from "../../Post";
import {
  DocWithVar,
  ArticleType,
  CommentType,
  LoadState,
} from "../../../util/types";
import { delay } from "../../../util/util";
import CommentSection from "../../CommentSection";
import CommentsButton from "../../CommentsButton";
import { LoadingContext } from "../../../Context";
import "./index.css";

export default function PostPage() {
  const [article, setArticle] = useState<ArticleType | undefined>(undefined);
  const [comments, setComments] = useState<Array<CommentType>>([]);
  const [showMore, setShowMore] = useState(false);
  const [isLoaded, setIsLoaded] = useState<LoadState>({
    articleLoaded: false,
    commentsLoaded: false,
    buttonLoaded: false,
  });

  useEffect(() => {
    async function fetchData() {
      const curDoc = document as DocWithVar;

      await delay(1000);

      const article = curDoc.__article;
      const commentsRaw = curDoc.__comments;
      const comments = commentsRaw.map((comment) => ({
        ...comment,
        date: new Date(comment.date),
      }));
      comments.sort(
        (com1, com2) =>
          Number(new Date(com2.date)) - Number(new Date(com1.date))
      );
      setArticle({ ...article, date: new Date(article.date).toLocaleString() });
      setIsLoaded({
        ...isLoaded,
        articleLoaded: true,
      });

      await delay(1000);

      setComments(
        comments.map((comment) => ({
          ...comment,
          date: new Date(comment.date).toLocaleString(),
        }))
      );
      setIsLoaded((newState) => {
        return {
          ...newState,
          commentsLoaded: true,
        };
      });

      await delay(100);

      setIsLoaded((newState) => {
        return {
          ...newState,
          buttonLoaded: true,
        };
      });
    }

    fetchData();
  }, []);

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

  return (
    <div className="PostPage">
      <div className="PostPageHeader">
        <img
          className="PostPageHeaderBack"
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
        />
        <div className="PostPageTitleWrapper">
          <span className="PostPageTitle">Post Title</span>
        </div>
      </div>
      <LoadingContext.Provider value={isLoaded}>
        <Post {...article!} />
        <CommentSection showMore={showMore} comments={comments} />
        <CommentsButton handleOnClick={handleShowMore} showMore={showMore} />
      </LoadingContext.Provider>
    </div>
  );
}
