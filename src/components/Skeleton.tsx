import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="contact"
    speed={3}
    width={366}
    height={50}
    viewBox="0 0 366 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="40" cy="25" r="25" /> 
    <rect x="74" y="3" rx="7" ry="7" width="138" height="15" /> 
    <rect x="75" y="32" rx="7" ry="7" width="160" height="12" />
  </ContentLoader>
)

export default Skeleton