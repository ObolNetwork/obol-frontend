import React from "react"
import { SvgIcon } from "@material-ui/core"

export function NftOutlinedIcon(props) {
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
          fill="rgba(0, 0, 0, 0.87)"
          stroke="rgba(0, 0, 0, 0.87)"
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
          fill="#ffffff"
        >
          NFT
        </text>
      </g>
    </SvgIcon>
  )
}
