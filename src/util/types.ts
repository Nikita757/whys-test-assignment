export type LoadState = {
  articleLoaded: boolean;
  commentsLoaded: boolean;
  buttonLoaded: boolean;
}

export type ArticleType = {
  author: string;
  date: string;
  text: string;
};

export type CommentType = {
  id: number;
  author: string;
  text: string;
  date: string;
};

export type PostType = {
  article: ArticleType;
  comments: Array<CommentType>;
};

export interface DocWithVar extends Document {
  __article: ArticleType;
  __comments: Array<CommentType>;
  __moreComments: Array<CommentType>;
}
