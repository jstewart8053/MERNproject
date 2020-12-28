import React from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes}>Post</h1>
    </div>
  );
}

export default Post;
