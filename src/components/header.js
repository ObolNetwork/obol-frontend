import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from "react"
import { AppBar, Button, Grid, Toolbar } from "@material-ui/core"
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useSnackbar } from "notistack";
import ObolIconWhite from './ObolIconWhite';
import obol_logo from '../images/obolnetwork.png'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({

    root: {
      display: 'grid',
      backgroundColor: `#fff`,
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
      backgroundColor: '#141414'
    },
    menu: {
      marginRight: theme.spacing(1),
      alignSelf: 'flex-end',
      marginBottom: 'auto',
      justifyContent: 'space-between'
    },
    menuLogo: {
      textDecoration: 'none',
      color: '#424242',
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
    },
    appbar: {
      backgroundColor: `rgba(75,75,75, 0.2)`,
      gridArea: '1/1',
      position: 'relative',
      placeItems: 'center',
      display: 'grid'
      // opacity: 0.72
    },
    toolbar: {
      minHeight: 450,
      height: '100vh',
      width: '100vw',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      flexDirection: 'column',
      backgroundColor: `transparent`,
      [theme.breakpoints.up('md')]: {
        minHeight: 350,
      },
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
      height: '10rem'
    },
    learnMore: {
      alignSelf: 'center',
      margin: 'auto'
    },
    title: {
      alignSelf: 'flex-start',
      font: "normal normal normal 42px/48px Rockwell",
      color: 'white',
      // backgroundColor: 'red',
      [theme.breakpoints.up('md')]: {
        font: "normal normal normal 64px/72px Rockwell",
      },
    },
    subtitle: {
      alignSelf: 'center',
      margin: 'auto',
      colour: 'white',
      font: "normal normal 300 26px/34px Rockwell",
      color: 'white',
      // backgroundColor: 'green',
      [theme.breakpoints.up('md')]: {
        font: "normal normal normal 36px/48px Rockwell",
      },
    },
  }),
);

export default function Header({ siteTitle, siteDescription }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  // Temporary pop up saying sign up coming soon
  function handleSignUpClick(event) {
    console.log(typeof (event))
    console.log(event)
    enqueueSnackbar("Coming Soon", {
      variant: 'info',
      autoHideDuration: 3000,
    });

  }

  return (

    <div className={classes.root}>
      <StaticImage
        className={classes.bg_image}
        layout="fullWidth"
        loading="eager"
        alt=""
        quality={100}
        placeholder="blurred"
        objectPosition="50%"
        jpgOptions={{quality: 100}}
        src={`../images/vertical_title.jpg`}
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
          {/* <Button color="inherit" className={classes.learnMore} variant="outlined" onClick={handleSignUpClick}>Learn More</Button> */}
          {/* <Typography className={classes.learnMore}  >Learn More</Typography> */}
          {/* <Link to="/" className={classes.link}>
            <Typography className={classes.title} variant="h5">
              {siteTitle.toUpperCase()}
            </Typography>
          </Link> */}
          {/* <Link to="/" className={classes.link}> */}
            <Typography className={classes.subtitle} variant="h5" >
              {siteDescription}
            </Typography>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </div>

  )
}
