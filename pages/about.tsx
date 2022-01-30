import React from "react"
import { Layout } from "../components/Layout"
import { Flex, Grid, Heading, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Progress } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/color-mode"
import { colors } from "../colors"
import { NextPage } from "next"
import Head from "next/head"

const About: NextPage = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout page="/about">
      <Head>
        <title>sa1 | About Me</title>
        <meta name="description" content="About me and my skills." />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Grid
        gridTemplateColumns={["1fr", "1fr 30vw", "1fr 400px"]}
        gridTemplateRows="1fr"
        gap="20px"
        mt="auto"
        mb="auto"
        pt="20px"
        pb="20px"
      >
        <Flex
          border="1px solid"
          borderColor={colors.about.sectionBg.border[colorMode]}
          borderRadius="6px"
          shadow="base"
          backgroundColor={colors.about.sectionBg[colorMode]}
          padding="20px 25px"
          flexDirection="column"
          h="100%"
        >
          <Heading color={colors.about.title[colorMode]}>
            About <chakra.span color="teal.300">Me</chakra.span>
          </Heading>
          <Text mt="20px" color={colors.about.text[colorMode]}>
            I'm a web developer/programmer who likes to build websites and
            services as a passion.
            <br />
            <br />I live in a small village in Gujarat India, my age is only 15
            but I don't let that be a problem for me, I have built several
            websites, and although they are far from perfect but as a 15 y/o I'm
            proud of that achievement.
            <br />
            <br />I want to explore deep into web/app development and expand my
            skill set I am also exploring all the technologies for development,
            that way I can ship my apps to more sets of devices.
            <br />
            <br />
            My goal is to convert this passion of mine to a profession and
            create apps/websites that add value to people's lives.
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Flex
            border="1px solid"
            borderColor={colors.about.sectionBg.border[colorMode]}
            borderRadius="6px"
            shadow="base"
            backgroundColor={colors.about.sectionBg[colorMode]}
            padding="20px 25px"
            flexDirection="column"
          >
            <Heading size="md" color={colors.about.title[colorMode]}>
              Skills
            </Heading>
            <Flex flexDirection="column" mt="15px">
              <Text color={colors.about.title[colorMode]}>Front-end</Text>
              <Progress value={75} h="4px" colorScheme="teal" />
            </Flex>
            <Flex flexDirection="column" mt="12px">
              <Text color={colors.about.title[colorMode]}>Back-end</Text>
              <Progress value={80} h="4px" colorScheme="teal" />
            </Flex>
          </Flex>
          <Flex
            border="1px solid"
            borderColor={colors.about.sectionBg.border[colorMode]}
            borderRadius="6px"
            shadow="base"
            backgroundColor={colors.about.sectionBg[colorMode]}
            padding="20px 25px"
            flexDirection="column"
            mt="20px"
          >
            <Heading size="md" color={colors.about.title[colorMode]}>
              Technologys
            </Heading>
            <Flex flexDirection="column" mt="15px">
              <Text color={colors.about.title[colorMode]}>React</Text>
              <Progress value={75} h="4px" colorScheme="teal" />
            </Flex>
            <Flex flexDirection="column" mt="12px">
              <Text color={colors.about.title[colorMode]}>CSS</Text>
              <Progress value={60} h="4px" colorScheme="teal" />
            </Flex>
            <Flex flexDirection="column" mt="12px">
              <Text color={colors.about.title[colorMode]}>Express</Text>
              <Progress value={65} h="4px" colorScheme="teal" />
            </Flex>
            <Flex flexDirection="column" mt="12px">
              <Text color={colors.about.title[colorMode]}>Node JS</Text>
              <Progress value={70} h="4px" colorScheme="teal" />
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </Layout>
  )
}

export default About
