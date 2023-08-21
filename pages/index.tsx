import {  ArrowForwardIcon } from "@chakra-ui/icons";
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
  FormLabel,
} from "@chakra-ui/react";
import {isMobile} from "react-device-detect";
import { Select } from "chakra-react-select";
import { useSnackbar } from "notistack";

import { CountryPhonesProps, getCountryCodes } from "~/helpers/fetcher";
import Layout from "~/components/Layout/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Index() {
  const { enqueueSnackbar } = useSnackbar();
  
  const [listCountryCodes, setListCountryCodes] = useState<CountryPhonesProps[]>([]);
  const [countryCode, setCountryCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
 
  const fetchCountryCodes = async () => {
    try {
      const codes = await getCountryCodes();
      setListCountryCodes(codes);
    } catch (error) {
      console.error("Error fetching country codes:", error);
    }
  }  

  const groupedOptions = listCountryCodes.map((country) => ({
    label: `${country.name} (${country.dial_code})`,
    value: country.dial_code,
  }));

  const handleChangeCountry = (e: any) => {
    setCountryCode(e.value.replace("+", ""));
    console.log(countryCode);
  }

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(String(e.target.value));
    console.log(phoneNumber);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(encodeURIComponent(e.target.value));
    console.log(message);
  }

  const sendMessage = () => {
    if (phoneNumber.length === 0) {
      enqueueSnackbar("Phone number is required", {
        variant: "error",
      });
      return;
    }

    if (countryCode.length === 0) {
      enqueueSnackbar("Phone number is required", {
        variant: "error",
      });
      return;
    }

    if (isMobile) {
      const url = `https://wa.me/${countryCode + phoneNumber}${message.length > 0 ? `?text=${message}` : ""}}`;
      window.open(url, "_blank");
    } else {
      const url = `https://web.whatsapp.com/send?phone=${
        countryCode + phoneNumber
      }${message.length > 0 ? `&text=${message}` : ""}`;
      window.open(url, "_blank");
    }
  }

  useEffect(() => {
    fetchCountryCodes();
  }, []);

    
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
        <VStack
          spacing="1"
          marginTop={5}
          padding={{ base: "10px", lg: "15px" }}
        >
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>
            WhatsApp Direct
          </Heading>
          <Text opacity="80%">Easy Chat Without Saving Number</Text>
          <Text opacity="80%" as="b">
            This site does not collect any personal information
          </Text>
        </VStack>
        <Stack
          as="section"
          spacing={4}
          justifyContent="center"
          width={{ md: "40%", base: "70%" }}
        >
          <VStack align="start" spacing={1}>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
              <Flex gap={2} width="full">
                <Select
                  size="md"
                  options={groupedOptions}
                  onChange={handleChangeCountry}
                  id="selectbox"
                  instanceId="selectbox"
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  maxMenuHeight={250}
                />
                <Input
                  flexBasis="80%"
                  type="number"
                  isRequired
                  name="phone_number"
                  placeholder="phone number"
                  onChange={handleChangePhoneNumber}
                />
              </Flex>
            </InputGroup>
          </VStack>

          <VStack align="start" spacing={1}>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Input your message"
              onChange={handleMessage}
              name="message"
            />
          </VStack>

          <Button
            leftIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            onClick={() => sendMessage()}
          >
            Send Message
          </Button>
        </Stack>
      </Layout>
    </div>
  );
}
