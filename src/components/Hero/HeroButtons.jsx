import { Button } from "./style";
import AppleGreen from "../../assets/img/appleGreenSVG.svg";
import AppleWhite from "../../assets/img/appleWhiteSVG.svg";
import GoogleAppWhite from "../../assets/img/googleAppWhite.svg";
import GoogleAppGreen from "../../assets/img/googleAppGreen.svg";

import { useState } from "react";

function HeroButtons() {
  const [Apple, setApple] = useState(AppleGreen);
  const [Google, setGoogle] = useState(GoogleAppWhite);

  const handleHover = (e) => {
    if (e === "apple") {
      setApple(AppleWhite);
    } else {
      setGoogle(GoogleAppGreen);
    }
  };

  const handleLeave = (e) => {
    if (e === "apple") {
      setApple(AppleGreen);
    } else {
      setGoogle(GoogleAppWhite);
    }
  };

  return (
    <>
      <Button
        onMouseEnter={() => handleHover("apple")}
        onMouseLeave={() => handleLeave("apple")}
      >
        <div className="divButtonImg">
          <img src={Apple} alt="" />
        </div>
        <div className="divButtonName">
          <span>Apple Store</span>
        </div>
      </Button>
      <Button
        primary={true}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleLeave()}
      >
        <div className="divButtonImg">
          <img src={Google} alt="" />
        </div>
        <div className="divButtonName">
          <span>Google Play</span>
        </div>
      </Button>
    </>
  );
}
export default HeroButtons;
