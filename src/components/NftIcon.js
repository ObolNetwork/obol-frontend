import React from "react"
import { SvgIcon } from "@material-ui/core"

export default function NftIcon(props) {
  return (
    <SvgIcon {...props}>
      <g>
        <rect
          x="1"
          y="5"
          width="22"
          height="13"
          rx="1"
          ry="1"
          lx="1"
          ly="1"
          fill="#ffffff"
          stroke="#ffffff"
        />
        <text
          xmlns="http://www.w3.org/2000/svg"
          fontWeight="bold"
          textAnchor="start"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="10"
          id="svg_1"
          y="15.0"
          x="2"
          strokeWidth="0"
          stroke="#000"
          fill="#000000"
        >
          NFT
        </text>
      </g>
    </SvgIcon>
  )
}
