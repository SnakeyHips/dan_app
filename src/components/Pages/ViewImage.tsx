import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import LinkButton from "../Layout/LinkButton";
import Image, { BlankImage } from "../../models/image";
import { getImage } from "../../services/image_service";
import useStylesBase from "../../styles/styles-base";
import { useParams } from "react-router";
import clsx from "clsx";

export default function ViewImage() {
  const classesBase = useStylesBase();
  const [image, setImage] = useState<Image>(BlankImage());
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchImage() {
      if (id) {
        setLoading(true);
        const result = await getImage(id);
        if (result) {
          setImage(result);
        }
        setLoading(false);
      }
    }
    fetchImage();
  }, [id]);

  const content = loading ? (
    <Grid container justify="center" className={clsx(classesBase.mt3, classesBase.mb3)}>
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <Paper key={image.id} elevation={0} className={classesBase.viewPaper}>
      <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>{image.title}</h6>
      <p>{image.description}</p>
      <div></div>
      <p>{image.content}</p>
      <p>Published: {image.createdAt}</p>
    </Paper>
  );

  return (
    <div>
      <Grid container justify="center" className={classesBase.contentContainer}>
        <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
          {content}
        </Grid>
        <Grid container justify="center" className={classesBase.mb3}>
          <LinkButton className={classesBase.button} to="/images">
            Images
          </LinkButton>
        </Grid>
      </Grid>
    </div>
  );
}
