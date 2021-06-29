import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from "react"
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core"
import mobile_bg from '../images/vertical_title.jpg'
import { Link } from 'gatsby';
import { useSnackbar } from "notistack"
import ObolIcon from './ObolIcon'
import Image from './image'

const useStyles = makeStyles((theme) =>
  createStyles({
    // root: {
    //   flexGrow: 1,
    //   background: `transparent url(${bg}) 0% 0% no-repeat padding-box;`,
    //   margin: `0 auto`,
    //   width: '100%',
    //   padding: `0rem 0 9.0875rem 0`,
    // }
    root: {
      backgroundColor: `transparent`,
      backgroundImage: `url(${mobile_bg})`,
      backgroundRepeat: `no-repeat`,
      backgroundOrigin: `padding-box`,
      backgroundPosition: '50%',
      backgroundSize: `cover`,
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
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '4px',
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
    },
    learnMore: {
      alignSelf: 'center',
      margin: 'auto'
    },
    title: {
      alignSelf: 'flex-start',
      font: "normal normal normal 42px/48px Montserrat",
      color: 'white',
      // backgroundColor: 'red',
      [theme.breakpoints.up('md')]: {
        font: "normal normal normal 64px/72px Montserrat",
      },
    },
    subtitle: {
      colour: 'white',
      font: "normal normal 300 26px/34px Montserrat",
      color: 'white',
      // backgroundColor: 'green',
      [theme.breakpoints.up('md')]: {
        font: "normal normal normal 36px/48px Montserrat",
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
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.menu}>
            <Grid item>
              <Link to="/" className={classes.link}>
                <ObolIcon className={classes.menuLogo} />
              </Link>
            </Grid>
            <Grid item>
              <Button color="inherit" className={classes.menuButton} variant="outlined" onClick={handleSignUpClick}>Sign Up</Button>
            </Grid>
          </Grid>
          <Image />
          <Button color="inherit" className={classes.learnMore} variant="outlined" onClick={handleSignUpClick}>Learn More</Button>
          <Link to="/" className={classes.link}>
            <Typography className={classes.title} variant="h5">
              {siteTitle.toUpperCase()}
            </Typography>
          </Link>
          <Link to="/" className={classes.link}>
            <Typography className={classes.subtitle} variant="h5" >
              {siteDescription.toUpperCase()}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>

  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
