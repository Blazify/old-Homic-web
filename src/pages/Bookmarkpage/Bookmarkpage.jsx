import React from "react";
import BookmarkDetail from "../../components/Bookmark/BookmarkDetail";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Box } from "@chakra-ui/react";

const Bookmarkpage = () => {
  return (
    <>
      <Navbar />
      <Box height='8vh'></Box>
      <BookmarkDetail />
      <Footer />
    </>
  );
};

export default Bookmarkpage;
