import {  SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import Layout from "~/components/Layout/Layout";
import Head from "next/head";

export default function Index() {

  return (
    <div>
      <Head>
        <title>WA Helper</title>
        <meta
          name="description"
          content="A web app to save your time to directly chat without saving the phone number"
        />
      </Head>
      <Layout>
        <VStack spacing="1" marginTop={5}>
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>
            WhatsApp Direct
          </Heading>
          <Text opacity="80%">Easy Chat Without Saving Number</Text>
          <Text opacity="80%" as="b">
            This site does not collect any personal information
          </Text>
        </VStack>
        <Stack as="section" spacing={4} justifyContent="center" width={{md: "40%", base:"70%"}}>
          <VStack align="start" spacing={1}>
            <Text>Phone Number</Text>
            <InputGroup>
              <Flex gap={2} width="full">
                <Select size="md"/>
                <Input flexBasis="80%" type="number" placeholder="phone number" />
              </Flex>
            </InputGroup>
          </VStack>

          <VStack align="start" spacing={1}>
            <Text>Message</Text>
            <Textarea placeholder="Input your message" />
          </VStack>

          <Button leftIcon={<SunIcon />} colorScheme="blue">
            Send Message
          </Button>
        </Stack>
      </Layout>
    </div>
  );
}
