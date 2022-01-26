import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import React from "react"
import { HiChevronRight } from "react-icons/hi"
import { Layout } from "../components/Layout"
import { colors } from "../colors"
import { useColorMode } from "@chakra-ui/color-mode"
import { NextPage } from "next"
import Link from "next/link"

const Projects: NextPage = () => {
  const { colorMode } = useColorMode()

  return (
    <Layout page="/projects">
      <Flex
        flexDirection="column"
        mt="auto"
        mb="auto"
        mr={["auto", "0", "0"]}
        ml={["auto", "0", "0"]}
      >
        <Heading color={colors.projects.title[colorMode]}>
          <chakra.span color="teal.300">My</chakra.span> Projects
        </Heading>
        <Flex
          mt="20px"
          overflow="auto"
          borderRadius="sm"
          className="scrollbar"
          flexDir={["column", "row", "row"]}
        >
          {[
            {
              id: 1,
              name: "HostyFly.com",
              text: "HostyFly.com was the first project I worked on that was successful, it is a  website that provides websites and all other kinds of web services, I worked on the front-end of the landing page and other pages like the prices page and affiliate landing page.",
              image: "/images/projects/hostyfly.png",
              link: "https://hostyfly.com/",
            },
            {
              id: 2,
              name: "LaserHairStyle.in",
              text: "LaserHairStyle.in is a website that I made for a barbershop, nothing too special but had to give an honorable mention.",
              image: "/images/projects/laserhairstyle.png",
              link: "https://laserhairstyle.in/",
            },
            {
              id: 3,
              name: "sa1.co.in",
              text: "sa1.co.in, the site you are currently visiting, is also made by me.",
              image: "/images/projects/sa1.png",
              link: "https://sa1.co.in/",
            },
          ].map((item) => (
            <Box
              key={item.id}
              minW={["auto", "sm", "sm"]}
              maxW="sm"
              borderWidth="1px"
              borderRadius="sm"
              borderColor={colors.projects.projectBg.border[colorMode]}
              overflow="hidden"
              shadow="base"
              mr={[null, "5", "5"]}
              mb={["5", "0", "0"]}
              position="relative"
              backgroundColor={colors.projects.projectBg[colorMode]}
            >
              <Image src={item.image} w="100%" alt={item.name} />
              <Box p="6">
                <Heading size="md" color={colors.projects.title[colorMode]}>
                  {item.name}
                </Heading>
                <Text
                  fontSize="xs"
                  lineHeight="5"
                  mt="4"
                  mb="55px"
                  color={colors.projects.text[colorMode]}
                >
                  {item.text}
                </Text>
                <Link href={item.link} passHref>
                  <Button
                    variant="outline"
                    rightIcon={<HiChevronRight />}
                    color={colors.projects.visitBtn.text[colorMode]}
                    borderColor={colors.projects.visitBtn.border[colorMode]}
                    position="absolute"
                    bottom="5"
                  >
                    Visit Now
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Projects
