import React from 'react'
import { HStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";


const Footer = () => {
  return (
    <footer>
      <HStack justifyContent="center" height="20vh">
        <Link
          color="teal.500"
          href="https://github.com/RaihanSyahSP/whatsapp-direct-message"
          fontSize={{ base: "sm", md: "md" }}
          _focus={{ boxShadow: "none" }}
          isExternal
        >
          View github repository <ExternalLinkIcon ml="2px" />
        </Link>
      </HStack>
    </footer>
  );
}

export default Footer