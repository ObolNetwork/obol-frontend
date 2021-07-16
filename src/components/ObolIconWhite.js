import React from "react"
import { SvgIcon } from "@material-ui/core"
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
    createStyles({

        curve: {
            fill: 'None',
            strokeMiterlimit: 10,
            strokeWidth: '6px',
            stroke: '#fff'
        }
    })
);

export default function ObolIconWhite(props) {
  const classes = useStyles();
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 60">
        <defs>

        </defs>
          <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
            <path className={classes.curve} d="M104.72,28c0,28.49-23.09,37.56-51.58,20.28S2.21,26.13,3,37.39,26.93,39.58,54.6,17.11,104.72-.47,104.72,28Z" />
            </g></g>
      </svg>
    </SvgIcon>
  )
}
