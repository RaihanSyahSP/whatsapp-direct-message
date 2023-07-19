import { AtSignIcon, ExternalLinkIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Code,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Stack,
  StackDivider,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import NextImage from "next/image";

export default function Index() {
  const breakpoints = {
    base: "7",
    sm: "",
  };

  return (
    <div>
      <Head>
        <title>WA Helper</title>
        <meta
          name="description"
          content="A web app to save your time to directly chat without saving the phone number"
        />
      </Head>
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
          divider={<StackDivider borderColor="gray.200" />}
        >
          {/* <NextImage
            src="/static/images/next-chakra.png"
            width={654}
            height={124.02}
            alt="Next.js and Chakra UI"
          /> */}

          <VStack spacing="1">
            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>
              WhatsApp Direct
            </Heading>
            <Text opacity="80%">Easy Chat Without Saving Number</Text>
            <Text opacity="80%" as="b">
              This site does not collect any personal information
            </Text>
          </VStack>

          <Stack spacing={4} width="50vw">
            <VStack align="start" spacing={1}>
              <Text>Phone Number</Text>
              <InputGroup>
                <InputLeftAddon children="+234" />
                <Input type="number" placeholder="phone number" focusBorderColor="pink.400"/>
              </InputGroup>
            </VStack>

            <VStack align="start" spacing={1}>
              <Text>Message</Text>
              <Textarea placeholder="Input your message" />
            </VStack>

            <Button leftIcon={<SunIcon/>} colorScheme="blue">
              Send Message
            </Button>
          </Stack>

          <Stack>
            <Link
              color="teal.500"
              href="https://github.com/zakiego/next-chakra"
              fontSize={{ base: "sm", md: "md" }}
              _focus={{ boxShadow: "none" }}
              isExternal
            >
              View github repository <ExternalLinkIcon ml="2px" />
            </Link>
          </Stack>
        </VStack>
      </Container>
    </div>
  );
}