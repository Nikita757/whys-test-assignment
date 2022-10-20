import { Button } from "@mui/material";

import "./index.css";

export default function Header() {
  return (
    <header className="Header" role={"banner"}>
      <div className="HeaderNavBar">
        <div className="HeaderNavBarLogo">
          <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-react-social-media-tanah-basah-glyph-tanah-basah.png" />
        </div>
        <div className="HeaderNavBarSignIn">
          <Button
            style={{
              background: "#fff",
              borderRadius: "0.8rem",
              border: "none",
            }}
            variant="outlined"
            className="Button"
          >
            Sign In
          </Button>
        </div>
        <div className="HeaderNavBarSignUp">
          <Button
            style={{
              background: "#fff",
              borderRadius: "0.8rem",
              border: "none",
            }}
            variant="outlined"
            className="Button"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
