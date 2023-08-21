import { ReactNode } from "react";
import { Container, VStack, useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { colorMode } = useColorMode();
  const breakpoints = {
    base: "0",
    lg: "0",
    md: "0",
    sm: "0",
  };

  return (
    <>
      <Container
            maxWidth="100%"
            className="vercel"
            paddingX={breakpoints}
            bgColor={colorMode === "light" ? "gray.100" : "gray.800"}
            color={colorMode === "light" ? "gray.700" : "white"}
          >
        <Header />
            <VStack
              align="center"
              justify="center"
              height="100vh"
              spacing="6"
              textAlign="center"
            >
              {children}
            </VStack>
        <Footer />
      </Container>
    </>
  );
}
