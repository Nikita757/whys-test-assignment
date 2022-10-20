import React from "react";
import { tags } from "../../util/util";

import "./index.css";

export default function Sidebar() {
  const sortedTags = tags.sort((tag1, tag2) => tag2.count - tag1.count);
  return (
    <div className="Sidebar">
      <div className="SidebarTitleWrapper">
        <span className="SidebarTitle">All Tags</span>
      </div>
      <div className="SidebarTagCloud">
        {sortedTags.map((tag) => {
          return (
            <div className="SidebarTag" key={tag.id}>
              <span className="SidebarTagName">{tag.name}</span>
              <span className="SidebarTagPostCount">
                {tag.count}{" "}
                {String(tag.count).slice(-1) === "1" ? "Post" : "Posts"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
