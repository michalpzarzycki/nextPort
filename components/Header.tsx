import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import styles from '../styles/Header.module.css'



export default function Header({sections=[], title}: any) {

  return (
    <React.Fragment>
      <Toolbar className={styles.toolbar}>
        <Button size="small">HOME</Button>
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
          <EmailIcon style={{color: "#3b49df"}}/>
        </IconButton>
        <IconButton>
          <GitHubIcon style={{color: "#3b49df"}}/>
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={styles.toolbarSecondary} style={{ justifyContent: 'space-between' }}>
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

