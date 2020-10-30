import React from "react";
import { Box } from "grommet";
import Loader from "react-loader-spinner";

const Loading = () => (
  <Box align="center" justify="center" height="100vh">
    <Loader type="Bars" color="#1C75BC" height="100" width="100" />
  </Box>
);

export default Loading;
