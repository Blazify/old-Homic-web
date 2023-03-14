import React from "react";
import Detail from "../../components/Detail/Detail";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";
import { Box } from "@chakra-ui/react";

const Detailpage = () => {
  return (
    <>
      <Navbar />
      <Box height="8vh"></Box>
      <Detail />;
      <Footer />
    </>
  );
};

export default Detailpage;
