import { ReactNode } from "react";
import { Container, VStack } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const breakpoints = {
    base: "7",
    sm: "",
  };

  return (
    <Container
      maxWidth="container.xl"
      className="vercel"
      paddingX={breakpoints}
    >
      <VStack
        align="center"
        justify="center"
        height="100vh"
        spacing="6"
        textAlign="center"
      >
        {children}
      </VStack>
    </Container>
  );
}
