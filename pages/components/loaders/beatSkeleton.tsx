import React from "react";
import ContentLoader from "react-content-loader";

const BeatSkeleton = () => (
  <ContentLoader
    speed={2}
    width={260}
    height={240}
    viewBox='0 0 260 240'
    backgroundColor='#454545'
    foregroundColor='#303030'
    //{...props}
  >
    <rect x='15' y='0' rx='5' ry='5' width='230' height='230' />
  </ContentLoader>
);

export default BeatSkeleton;
