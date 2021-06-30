
import React from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { StaticImage, getImage } from 'gatsby-plugin-image';
import ObolIconWhite from './ObolIconWhite';


// // Prepare static icons that are not svgs

// const image = getImage(data.avatar)
// // This is the same as:
// const image = data?.avatar?.childImageSharp?.gatsbyImageData

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
            backgroundColor: `#141414`,
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
            color: '#626262',
            margin: 'auto',
            borderRadius: '4px',
            padding: '0.1rem 0.2rem',
            boxSizing: 'content-box',
        },
        social: {
            maxWidth: '1.5rem',
            textDecoration: 'none',
            margin: '0 0.15rem 0 0.15rem',
            color: 'white',
            verticalAlign: 'middle'
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
            color: '#909090',
        },
        text: {
            textDecoration: 'none',
            textAlign: 'center',
            color: '#909090',
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

            <ObolIconWhite className={classes.logo} />

            {/* Copyright text */}
            <p className={classes.text}>
                &#169; {new Date().getFullYear().toString() + " "}
                <Link
                    to="https://obol.network/"
                    rel="noopener noreferrer"
                    className={classes.link}
                >Obol Network
                </Link>
            </p>

            {/* Social Media SVGs */}
            <span className={classes.socials}>
                {/* Twitter */}
                <a
                    href="https://twitter.com/ObolNetwork"
                    rel="noopener noreferrer"
                    target="_blank"
                >
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
                {/*Github, unhappy its not an SVG like the others */}
                <a
                    href="https://github.com/ObolNetwork/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <StaticImage
                        src="../images/github-icon.png"
                        alt="Github Icon"
                        layout="constrained"
                        placeholder="none"
                        className={classes.social}
                    />
                </a>
                {/* Discord */}
                <a
                    href="https://discord.gg/n6ebKsX46w"
                    rel="noopener noreferrer"
                    target="_blank"
                >

                    <StaticImage
                        src="../images/Discord-Logo-White.svg"
                        alt="Github Icon"
                        layout="constrained"
                        placeholder="none"
                        className={classes.social}
                        style={{ margin: '0.2rem 0.15rem 0 0.15rem', }}
                    />
                </a>
            </span>

        </div>
    )
}
