import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import styles from '../styles/Header.module.css'



export default function Header({sections=[], title}: any) {

  return (
    <React.Fragment>
      <Toolbar className={styles.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={styles.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={styles.toolbarSecondary}>
        {sections.map((section: any) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={styles.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};