import { tags } from "../../util/util";

import "./index.css";

export default function TagCloud() {
  const sortedTags = tags.sort((tag1, tag2) => tag2.count - tag1.count);
  return (
    <div className="TagCloud">
      {sortedTags.map((tag) => {
        return (
          <div className="Tag" key={tag.id}>
            <span className="TagName">{tag.name}</span>
            <span className="TagPostCount">
              {tag.count}{" "}
              {String(tag.count).slice(-1) === "1" ? "Post" : "Posts"}
            </span>
          </div>
        );
      })}
    </div>
  );
}
