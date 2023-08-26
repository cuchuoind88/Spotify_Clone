import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";
export default function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:12z9Eji6gxZDOugP26b0bV`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        console.log(res);
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <div className="body_info_top">
          <img src={discover_weekly?.images[0].url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>{discover_weekly?.name}</h2>
            <p>Discription.....</p>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon
              className="body__shuffle"
              onClick={playPlaylist}
            />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}
