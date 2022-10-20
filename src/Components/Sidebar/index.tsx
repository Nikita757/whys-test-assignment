import TagCloud from "../TagCloud";

import "./index.css";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarTitleWrapper">
        <span className="SidebarTitle">All Tags</span>
      </div>
      <TagCloud />
    </div>
  );
}
