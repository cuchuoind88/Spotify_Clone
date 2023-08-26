import React from "react";
import "./SidebarOption.css";
function SidebarOption({ title, Icon, GetPlaylist, id }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h4 className="sidebarOption_title">{title}</h4>
      ) : (
        <p onMouseOver={GetPlaylist(id)}>{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
