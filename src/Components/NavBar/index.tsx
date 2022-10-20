import { Button } from "@mui/material";

import "./index.css";

export default function NavBar() {
  const buttonStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: "0.8rem",
    border: "none",
    whiteSpace: "nowrap",
  };
  return (
    <div className="NavBar">
      <div className="NavBarLogo">
        <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-react-social-media-tanah-basah-glyph-tanah-basah.png" />
      </div>
      <div className="NavBarSignIn">
        <Button style={buttonStyle} variant="outlined" className="Button">
          Sign In
        </Button>
      </div>
      <div className="NavBarSignUp">
        <Button style={buttonStyle} variant="outlined" className="Button">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
