import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
// import post1 from '!!raw-loader!../static/blog-post1.md';
import post1 from '../static/blog-post1.md';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main({posts=['', '', ''], title}:any) {
  const classes = useStyles();
useEffect(() => {
    
    
console.log("POSTS", posts)
}, [posts])
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post: any) => (
        <Markdown key="">{post1}</Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}