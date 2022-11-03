import { useState } from "react";

import Post from "../../Post";
import {
  LoadState
} from "../../../util/types";
import CommentSection from "../../CommentSection";
import { LoadingContext } from "../../../Context";
import "./index.css";

export default function PostPage() {
  const [isLoaded, setIsLoaded] = useState<LoadState>({
    articleLoaded: false,
    commentsLoaded: false,
    buttonLoaded: false
  });

  return (
    <div className="PostPage">
      <div className="PostPageHeader">
        <img
          className="PostPageHeaderBack"
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
          alt="Go Back"
        />
        <div className="PostPageTitleWrapper">
          <span className="PostPageTitle">Post Title</span>
        </div>
      </div>
      <LoadingContext.Provider value={{loadState: isLoaded, setIsLoaded: setIsLoaded}}>
        <Post />
        <CommentSection />
      </LoadingContext.Provider>
    </div>
  );
}
