import { Button } from "@material-ui/core";
import { Skeleton } from "@mui/material";
import React, { useContext } from "react";
import { MouseEventHandler } from "react";
import { LoadingContext } from "../../Context";
import "./index.css";

export default function CommentsButton({
  handleOnClick,
  showMore,
}: {
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
  showMore: boolean;
}) {
  const isLoaded = useContext(LoadingContext);

  return isLoaded.buttonLoaded ? (
    <div className="CommentsButtonContainer">
      <Button
        style={{ background: "#fff", borderRadius: "0.8rem", border: "none" }}
        variant="outlined"
        className="Button"
        onClick={handleOnClick}
      >
        Show {showMore ? "Less" : "More"}
      </Button>
    </div>
  ) : (
    <Skeleton className="CommentSkeleton" variant="rounded" width="100%">
      <div
        style={{
          paddingTop: "5%",
          width: "100%",
          margin: "1rem auto 0 auto",
        }}
      />
    </Skeleton>
  );
}
