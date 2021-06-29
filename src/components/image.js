import { StaticImage } from "gatsby-plugin-image"

export function ObolNetworkLogoWide() {
 return (
   <StaticImage
     src="../images/obolnetwork.svg"
     alt="Obol Network Logo"
     placeholder="blurred"
     layout="fixed"
     width={200}
     height={200}
   />
 )
}