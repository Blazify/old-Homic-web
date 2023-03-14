import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function UploadProfile() {
  return (
    <>
      <FormControl>
        <FormLabel>Uploage your profile</FormLabel>
        <Input type="file" />
      </FormControl>
    </>
  );
}
