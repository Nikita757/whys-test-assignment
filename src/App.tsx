import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import PostPage from "./Components/Pages/PostPage";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <PostPage />
      <Sidebar />
    </div>
  );
}

export default App;
