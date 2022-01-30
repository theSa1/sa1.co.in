import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, Grid, Heading } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Textarea } from "@chakra-ui/textarea"
import React, { useState } from "react"
import { HiChevronRight } from "react-icons/hi"
import { Layout } from "../components/Layout"
import { SocialMedia } from "../components/SocialMedia"
import { useColorMode } from "@chakra-ui/color-mode"
import { colors } from "../colors"
import {
  Alert,
  AlertIcon,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react"
import { Formik } from "formik"
import Head from "next/head"

const Contact = () => {
  const { colorMode } = useColorMode()
  const [alertType, setAlertType] = useState<"success" | "error" | "none">(
    "none"
  )
  return (
    <Layout page="/contact">
      <Head>
        <title>sa1 | Contact Me</title>
        <meta name="description" content="Contact me via twitter or email." />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Grid
        gridTemplateRows="1fr"
        gridTemplateColumns={["1fr", "1fr 40vw", "1fr 1fr"]}
        mt="auto"
        mb="auto"
      >
        <Flex h="100%" flexDir="column" mr={["0", "30px", "30px"]}>
          <Heading mb="20px">
            Contact <chakra.span color="teal.300">Me</chakra.span>
          </Heading>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={async (
              { name, email, message },
              { setSubmitting, resetForm }
            ) => {
              setAlertType("none")

              const res = await fetch(
                process.env["NEXT_PUBLIC_CONTACT_FORM_API_URL"] as string,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name, email, message }),
                }
              )

              if (res.status !== 200) {
                setAlertType("error")
              } else {
                setAlertType("success")
              }

              setSubmitting(false)
              resetForm()
            }}
            validate={(values) => {
              let errors: { [key: string]: any } = {}
              if (!values.name) {
                errors.name = "Required"
              } else if (values.name.split("").length < 3) {
                errors.name = "Name Must Be More Than 3 Characters"
              } else if (!values.email) {
                errors.email = "Required"
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address"
              } else if (!values.message) {
                errors.message = "Required"
              } else if (values.message.split("").length < 3) {
                errors.message = "Message Must Be More Than 3 Characters"
              }
              return errors
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
              handleSubmit,
            }) => (
              <chakra.form onSubmit={handleSubmit}>
                {alertType === "none" || (
                  <Flex mb="20px">
                    <Alert status={alertType}>
                      <AlertIcon />
                      {alertType === "success"
                        ? "Message was sent successfully!"
                        : "An error occurred while sending the message"}
                    </Alert>
                  </Flex>
                )}
                <Flex>
                  <FormControl
                    isInvalid={errors.name && touched.name ? true : false}
                    mr="10px"
                  >
                    <Input
                      placeholder="Name"
                      backgroundColor={colors.contact.inputBg[colorMode]}
                      borderColor={colors.contact.inputBg.border[colorMode]}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    />
                    {errors.name && touched.name && (
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl
                    isInvalid={errors.email && touched.email ? true : false}
                    ml="10px"
                  >
                    <Input
                      placeholder="E-Main"
                      backgroundColor={colors.contact.inputBg[colorMode]}
                      borderColor={colors.contact.inputBg.border[colorMode]}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    )}
                  </FormControl>
                </Flex>
                <FormControl
                  isInvalid={errors.message && touched.message ? true : false}
                  mt="20px"
                >
                  <Textarea
                    placeholder="Message"
                    h="230px"
                    backgroundColor={colors.contact.inputBg[colorMode]}
                    borderColor={colors.contact.inputBg.border[colorMode]}
                    name="message"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                  />
                  {errors.message && touched.message && (
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  )}
                </FormControl>
                <Flex mt="20px" alignItems="center">
                  <Button
                    mr="10px"
                    rightIcon={<HiChevronRight />}
                    variant="outline"
                    backgroundColor={colors.contact.inputBg[colorMode]}
                    borderColor={colors.contact.sendBtn.border[colorMode]}
                    color={colors.contact.sendBtn.text[colorMode]}
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Send
                  </Button>
                  <SocialMedia color={colors.contact.icon[colorMode]} />
                </Flex>
              </chakra.form>
            )}
          </Formik>
        </Flex>
        <Flex
          h="100%"
          justifyContent="center"
          alignContent="center"
          ml="30px"
          display={["none", "flex", "flex"]}
        >
          <Image
            src="/images/contact-image.svg"
            w={["100%", "100%", "md"]}
            alt="Contact Hero Image"
          />
        </Flex>
      </Grid>
    </Layout>
  )
}

export default Contact
