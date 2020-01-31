import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Grid from "@material-ui/core/Grid";
import imagesimage from "../../assets/images.jpg";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import LinkButton from "../Layout/LinkButton";
import Image from "../../models/image";
import { getAllImages } from "../../services/image_service";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

export default function Images() {
  const classesBase = useStylesBase();
  const [images, setImages] = useState<Image[]>([]);
  const [filteredImages, setFilteredImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(3);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      const result: Image[] = await getAllImages();
      if (result) {
        setImages(result);
        setFilteredImages(result);
      }
      setLoading(false);
    }
    fetchImages();
  }, [images]);

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
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(blog => regex.test(blog.title)));
    }
  }

  const pagination =
    filteredImages.length > 0 ? (
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={filteredImages.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={""}
      />
    ) : (
      <Paper elevation={0} className={classesBase.stemPaper}>
        <p className={classesBase.textCenter}>No blogs found</p>
      </Paper>
    );

  const content = loading ? (
    <Grid container justify="center" className={clsx(classesBase.mt3, classesBase.mb3)}>
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      {filteredImages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((image: Image) => {
        return (
          <div key={image.id}>
            <Paper elevation={0} className={classesBase.stemPaper}>
              <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>{image.title}</h6>
              <p>{image.description}</p>
              <p>{image.content}</p>
              <p>...</p>
              <p>Published: {image.createdAt}</p>
              <Grid container justify="center">
                <LinkButton className={classesBase.button} to={{ pathname: `/image/${image.id}` }}>
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
          <img src={imagesimage} className={classesBase.headerImage} alt="" />
          <span className={classesBase.headerText}>Images</span>
        </Grid>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>News &amp; Advice Blogs</h4>
            <p>
              Keep up to date with the latest industry news, as well as regular activites offering recruitment and
              careers advice provided by Stem Skills &amp; Recruitment.
            </p>
          </Grid>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <form onSubmit={handleSubmitSearch}>
              <TextField
                className={clsx(classesBase.textField, classesBase.whiteTextField)}
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
