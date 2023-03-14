import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewServiceRequest from "../../components/ServiceRequest/NewServiceRequest";
import Footer from "../../components/Footer/Footer";

export default function ServiceRequest() {
  return (
    <>
      <Navbar transparent={false} />

      <NewServiceRequest />
      <Footer />
    </>
  );
}
