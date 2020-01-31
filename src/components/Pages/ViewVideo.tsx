import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import LinkButton from "../Layout/LinkButton";
import Video, { BlankVideo } from "../../models/video";
import { getVideo } from "../../services/video_service";
import useStylesBase from "../../styles/styles-base";
import { useParams } from "react-router";
import clsx from "clsx";

export default function ViewVideo() {
  const classesBase = useStylesBase();
  const [video, setVideo] = useState<Video>(BlankVideo());
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchVideo() {
      if (id) {
        setLoading(true);
        const result = await getVideo(id);
        if (result) {
          setVideo(result);
        }
        setLoading(false);
      }
    }
    fetchVideo();
  }, [id]);

  const content = loading ? (
    <Grid container justify="center" className={clsx(classesBase.mt3, classesBase.mb3)}>
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <Paper key={video.id} elevation={0} className={classesBase.viewPaper}>
      <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>{video.title}</h6>
      <p>{video.description}</p>
      <div></div>
      <p>{video.content}</p>
      <p>Published: {video.createdAt}</p>
    </Paper>
  );

  return (
    <div>
      <Grid container justify="center" className={classesBase.contentContainer}>
        <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
          {content}
        </Grid>
        <Grid container justify="center" className={classesBase.mb3}>
          <LinkButton className={classesBase.button} to="/videos">
            Videos
          </LinkButton>
        </Grid>
      </Grid>
    </div>
  );
}
