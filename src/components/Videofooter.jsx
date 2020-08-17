import React from "react";
import { Avatar, Button } from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Ticker from "react-ticker";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Videofooter({ chanel, avatarSrc, likes, shares, song }) {
  return (
    <div className="videofooter">
      <div className="videotext">
        <Avatar src={avatarSrc} /> karthik.
        <Button>Follow</Button>
      </div>
      <div className="videoticker">
        <Ticker mode="smooth" className="ticker">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
        <div className="footericons">
          <FavoriteIcon>700</FavoriteIcon>
          <ThumbUpOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Videofooter;
