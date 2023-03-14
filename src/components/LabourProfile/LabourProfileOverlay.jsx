import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import LabourProfile from "./LabourProfile";

const LabourProfileOverlay = (props) => {
  const serviceData = props.serviceData;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        style={{
          textDecoration: "none",
          color: "#ea5455",
          background: "none",
          border: "none",
          fontSize: "25px",
        }}
      >
        View Profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#ffecec">
          <ModalHeader></ModalHeader>
          <ModalCloseButton border="none" color='black'/>
          <ModalBody>
            <LabourProfile serviceData={serviceData} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LabourProfileOverlay;
