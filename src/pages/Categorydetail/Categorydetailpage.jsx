import React, { useState } from "react";
import CategoryDetailCard from "../../components/categorydetailcomponent/CategoryDetailCard";
import Navbar from "../../components/Navbar/Navbar";
import {Box} from "@chakra-ui/react"
import Footer from "../../components/Footer/Footer";

const Categorypage = () => {
  const [city, setCity] = useState("");
  return (
    <>
      <Navbar setCity={setCity} />
      <Box height='8vh'/>
      <CategoryDetailCard city={city} />;

      <Footer />
    </>
  );
};

export default Categorypage;
