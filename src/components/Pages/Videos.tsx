import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Grid from "@material-ui/core/Grid";
import videosimage from "../../assets/videos.jpg";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import LinkButton from "../Layout/LinkButton";
import Video from "../../models/video";
import { getAllVideos } from "../../services/video_service";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

export default function Videos() {
  const classesBase = useStylesBase();
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(3);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchVideos() {
      setLoading(true);
      const result: Video[] = await getAllVideos();
      if (result) {
        setVideos(result);
        setFilteredVideos(result);
      }
      setLoading(false);
    }
    fetchVideos();
  }, [videos.length]);

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
  }

  function handleSubmitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const regex = new RegExp(`^.*${searchTerm}.*$`, "i");
    if (!searchTerm) {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(blog => regex.test(blog.title)));
    }
  }

  const pagination =
    filteredVideos.length > 0 ? (
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={filteredVideos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={""}
      />
    ) : (
      <Paper elevation={0} className={classesBase.paper}>
        <p className={classesBase.textCenter}>No videos found :(</p>
      </Paper>
    );

  const content = loading ? (
    <Grid container justify="center" className={clsx(classesBase.mt3, classesBase.mb3)}>
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      {filteredVideos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((video: Video) => {
        return (
          <div key={video.id}>
            <Paper elevation={0} className={classesBase.paper}>
              <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>{video.title}</h6>
              <p>{video.description}</p>
              <p>{video.content}</p>
              <p>...</p>
              <p>Published: {video.createdAt}</p>
              <Grid container justify="center">
                <LinkButton className={classesBase.button} to={{ pathname: `/video/${video.id}` }}>
                  View
                </LinkButton>
              </Grid>
            </Paper>
          </div>
        );
      })}
      {pagination}
    </>
  );

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={videosimage} className={classesBase.headerImage} alt="" />
          <span className={classesBase.headerText}>Videos</span>
        </Grid>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>Dan's Rockin' Videos</h4>
            <p>
              Here are some shit videos I've made. Enjoy!
            </p>
          </Grid>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <form onSubmit={handleSubmitSearch}>
              <TextField
                className={clsx(classesBase.textField, classesBase.searchTextField)}
                variant="filled"
                margin="dense"
                fullWidth
                hiddenLabel
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  )
                }}
              />
            </form>
            {content}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
