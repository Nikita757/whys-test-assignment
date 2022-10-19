import { Box } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { CommentType } from "../../util/types";
import "./index.css";

export default function Comment({ author, text, date }: CommentType) {
  return (
    <div className="Comment">
      <div className="Author">{author}</div>
      <div className="Content">{text}</div>
      <div className="Date">{date}</div>
    </div>
  );
}
