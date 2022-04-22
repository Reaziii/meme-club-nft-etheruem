import React from "react";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <BounceLoader color={"#fff"} loading={true} css={override} size={100} />
    </div>
  );
};

export default LoadingScreen;
