import React, { useState } from "react";
import {
  Heading,
  Text,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <HStack
        p={4}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        bgColor={colorMode === "light" ? "white" : "gray.700"}
        color={colorMode === "light" ? "gray.700" : "white"}
        boxShadow="md" 
        position="fixed"
        width="100%"
        zIndex="10"     
      >
        <Heading as="h1" size={{base: "md", lg:"lg"}}>
          WhatsApp Direct
        </Heading>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="outline"
          colorScheme="teal"
          aria-label="Toggle Dark Mode"
        />
      </HStack>
    </header>
  );
};

export default Header;
