import React, { useState } from "react";
import gear from "./settings-gear-svgrepo-com.svg";
import "./settings.css";
const Settings = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <>
      <img
        onClick={() => setClicked(!clicked)}
        className={clicked ? "rotate" : ""}
        id="settings_gear"
        alt="settings"
        src={gear}
      />
      <div id="settings_menu">
        <button>Reset</button>
        <div>Color</div>
      </div>
    </>
  );
};

export default Settings;
