import React from "react"
import type { NextPage } from "next"
import { Layout } from "../components/Layout"
import { Flex, Heading } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { HiChevronRight } from "react-icons/hi"
import { SocialMedia } from "../components/SocialMedia"
import { colors } from "../colors"
import Link from "next/link"
import Head from "next/head"

const Home: NextPage = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout page="/">
      <Head>
        <title>sa1</title>
        <meta
          name="description"
          content="I like to build websites and apps that can change our lives forever for the better."
        />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Flex h="calc(100vh - 80px)" className="home-section">
        <Flex
          mt="auto"
          mb="auto"
          w={["100%", "50%", "50%", "50%"]}
          flexDirection="column"
          h="100%"
          justifyContent="center"
        >
          <Heading size="md" color={colors.home.titleText.ln1[colorMode]}>
            Hello,
          </Heading>
          <Heading size="xl" color={colors.home.titleText.ln2.pt1[colorMode]}>
            I’m{" "}
            <chakra.span color={colors.home.titleText.ln2.pt2[colorMode]}>
              savan,
            </chakra.span>
          </Heading>
          <Heading color={colors.home.titleText.ln3[colorMode]} size="md">
            Programmer & Web Developer
          </Heading>
          <Heading
            as="h1"
            color={colors.home.subtitleText[colorMode]}
            size="sm"
            mt="15px"
            maxW="530px"
          >
            I like to build{" "}
            <chakra.span
              color={colors.home.subtitleText.highlighted[colorMode]}
            >
              websites
            </chakra.span>{" "}
            and{" "}
            <chakra.span
              color={colors.home.subtitleText.highlighted[colorMode]}
            >
              apps
            </chakra.span>{" "}
            that can change our lives forever for the better.
          </Heading>
          <Flex mt="15px">
            <Link href="/about" passHref>
              <Button
                w="fit-content"
                backgroundColor="teal.300"
                size="sm"
                color="white"
                _hover={{ backgroundColor: "teal.400" }}
                _active={{ backgroundColor: "teal.300" }}
                rightIcon={<HiChevronRight />}
                fontWeight="500"
              >
                Know More
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                w="fit-content"
                variant="outline"
                size="sm"
                color={colors.home.btns.contactBtn.text[colorMode]}
                borderColor={colors.home.btns.contactBtn.border[colorMode]}
                ml="10px"
                fontWeight="500"
              >
                Contact Me
              </Button>
            </Link>
          </Flex>
          <Flex mt="15px">
            <SocialMedia color={colors.home.icon[colorMode]} />
          </Flex>
        </Flex>
        <Flex
          mt="auto"
          mb="auto"
          w={["100%", "50%", "50%"]}
          flexDirection="column"
          display={["none", "flex", "flex"]}
          justifyContent="center"
          alignItems="center"
        >
          <chakra.img src="images/home-image.svg" width="md" />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Home
