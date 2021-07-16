import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from "react"
import { AppBar, Button, Grid, Toolbar } from "@material-ui/core"
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ObolIconWhite from './ObolIconWhite';
import obol_logo from '../images/obolnetwork.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({

    root: {
      display: 'grid',
      // borderRadius: '1em',
      padding: '1em',
      background: `conic-gradient(from 315deg, #19314b, #37606b, #61ac9f, #81bba3, #61ac9f, #37606b, #19314b)`
      // Not using background images as they can't be loaded in a performant manner
      // switched to StaticImage instead with overlapping grid elements.
      // backgroundImage: `url(${mobile_bg})`,
      // backgroundRepeat: `no-repeat`,
      // backgroundOrigin: `padding-box`,
      // backgroundPosition: '50%',
      // backgroundSize: `cover`,
    },
    bg_image: {
      gridArea: "1/1",
      maxHeight: '100vh',
      backgroundColor: '#141414',
      borderRadius: `1em`
    },
    menu: {
      marginRight: theme.spacing(1),
      alignSelf: 'flex-end',
      marginBottom: 'auto',
      justifyContent: 'space-between'
    },
    menuLogo: {
      textDecoration: 'none',
      color: '#000',
      fontSize: '22pt',
      // backgroundColor: 'rgba(255, 255, 255, 0.85)',
      // borderRadius: '4px',
      padding: '0.2rem 0.4rem',
      boxSizing: 'content-box',
    },
    menuButton: {
      // marginRight: theme.spacing(1),
      // alignSelf: 'flex-end',
      // marginBottom: 'auto'
      color: '#fff'
    },
    appbar: {
      backgroundColor: `transparent`,
      // backgroundColor: `rgba(75,75,75, 0.2)`,
      gridArea: '1/1',
      position: 'relative',
      placeItems: 'center',
      display: 'grid',
      boxShadow: 'none'
      // opacity: 0.72
    },
    toolbar: {
      minHeight: 450,
      height: '97vh',
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      flexDirection: 'column',
      backgroundColor: `transparent`,
    },
    link: {
      textDecoration: 'none',
      color: '#fff',
    },
    obolLogo: {
      backgroundColor: `transparent`,
      backgroundImage: `url(${obol_logo})`,
      backgroundRepeat: `no-repeat`,
      backgroundOrigin: `padding-box`,
      backgroundPosition: '50%',
      backgroundSize: `contain`,
      width: '100%',
      maxWidth: `800px`,
      height: '10rem',
      margin: `auto`,
      [theme.breakpoints.up('lg')]: {
        height: "6rem",
      },
    },
    learnMore: {
      alignSelf: 'center',
      margin: 'auto'
    },
    title: {
      alignSelf: 'center',
      font: "normal normal normal 42px/48px Rockwell",
      color: '#fff',
      // backgroundColor: 'red',
      [theme.breakpoints.up('md')]: {
        font: "normal normal normal 64px/72px Rockwell",
      },
    },
    subtitle: {
      alignSelf: 'center',
      textAlign: 'center',
      margin: 'auto',
      font: "normal normal 300 26px/34px Rockwell",
      color: '#fff',
      // textShadow: `0px 0px 5px #fff`,
      // backgroundColor: 'green',
      [theme.breakpoints.up('md')]: {
        font: "normal normal normal 36px/48px Rockwell",
      },
    },
  }),
);

export default function Header({ siteTitle, siteDescription }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StaticImage
        className={classes.bg_image}
        layout="fullWidth"
        loading="eager"
        alt="Background Image"
        placeholder="blurred"
        src={`../images/obol_bg_image.png`}
      />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.menu}>
            <Grid item>
              <Link to="/" className={classes.link}>
                <ObolIconWhite className={classes.menuLogo} />
              </Link>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to={"https://discord.gg/n6ebKsX46w"}
                rel="noopener noreferrer"
                target="_blank"
                color="inherit"
                className={classes.menuButton}
                variant="outlined"
                size={'small'}>
                Join the Discord
              </Button>
            </Grid>
          </Grid>
            <div className={classes.obolLogo} />
            {/* <Typography className={classes.title} variant="h5">
              {siteTitle}
            </Typography> */}
            <Typography className={classes.subtitle} variant="h5" >
              {siteDescription}
            </Typography>
   
        </Toolbar>
      </AppBar>
    </div>

  )
}
