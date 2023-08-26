import React from "react";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://i.scdn.co/image/ab67616d000048514e5df11b17b2727da2b718d8"
          className="footer_albumLogo"
        ></img>
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>User</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleOutlinedIcon className="footer_green" />
        <SkipPreviousOutlinedIcon className="footer_icon" />
        <PlayCircleOutlinedIcon fontSize="large" className="footer_icon" />
        <SkipNextOutlinedIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeUpIcon />
          </Grid>
          <Grid item xs>
            <Slider className="custom_slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
