import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  card: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '100%',
    height: 200
  },
});

export default function FeaturedPost(props: any) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          {/* <Hidden xsDown>
        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />

          </Hidden> */}
          <div className={classes.cardDetails}>
            <CardContent>
              <CardMedia
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
                title={post.imageTitle}
              />

              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
