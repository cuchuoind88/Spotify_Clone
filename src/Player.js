import React, { useEffect } from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        {/*Sidebar*/}
        <Sidebar />
        {/*Body*/}
        <Body spotify={spotify} />
      </div>
      {/*Footer*/}
      <Footer spotify={spotify} />
    </div>
  );
}
