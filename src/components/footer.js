
import React from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import ObolIcon from './ObolIcon';

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
            backgroundColor: `#2E2E2E`,
            display: 'flex',
            padding: '1rem',
            minHeight: '5rem',
            flexDirection: `column`,
            justifyContent: 'space-evenly',
            fontFamily: "Montserrat, Roboto, Helvetica, Arial, sans-serif",
            [theme.breakpoints.up('md')]: {
                flexDirection: `row`,
            },
        },
        logo: {
            //maxWidth: '5rem',
            textDecoration: 'none',
            color: '#424242',
            margin: 'auto',
            fontSize: 'large',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '4px',
            padding: '0.2rem 0.4rem',
            boxSizing: 'content-box',
        },
        social: {
            maxWidth: '2rem',
            textDecoration: 'none',
            padding: '0.2rem',
            color: 'white'
        },
        socials: {
            margin: 'auto',
            display: 'flex',
            justifyItems: 'flex-start',
            color: 'white',
            [theme.breakpoints.up('md')]: {
                justifyItems: 'center',
            },
        },
        link: {
            textDecoration: 'none',
            color: '#707070',
        },
        text: {
            textDecoration: 'none',
            textAlign: 'center',
            color: '#707070',
            margin: 'auto',
            padding: '1rem',
            // flexGrow: 1
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


export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <ObolIcon className={classes.logo} />

            {/* Copyright text */}
            <p className={classes.text}>
                &#169; {new Date().getFullYear().toString() + " "}
                <Link
                    to="https://oisin.kyne.eu/"
                    rel="noopener noreferrer"
                    className={classes.link}
                    target="_blank"
                >Obol Network
                </Link>
            </p>

            {/* Social Media SVGs */}
            <span className={classes.socials}>
                {/* Twitter */}
                <a className="ml-3 text-gray-500" href="https://twitter.com/ObolNetwork">
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className={classes.social}
                        viewBox="0 0 24 24"
                    >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                {/*Instagram */}
                <a className="ml-3 text-gray-500" href="https://instagram.com">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className={classes.social}
                        viewBox="0 0 24 24"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                {/* LinkedIn */}
                <a className="ml-3 text-gray-500" href="https://www.linkedin.com/company/kyne-software/">
                    <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className={classes.social}
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </span>

        </div>
    )
}
