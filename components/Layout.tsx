import React from "react"
import { Flex } from "@chakra-ui/layout"
import { Header } from "./Header"
import { useColorMode } from "@chakra-ui/color-mode"
import { colors } from "../colors"

export const Layout: React.FC<{
  page: "/" | "/about" | "/projects" | "/contact"
}> = ({ children, page }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex flexDirection="column" overflow="hidden" backgroundColor="gray.50">
      <Header page={page} />
      <Flex
        h="calc(100vh - 70px)"
        w="100vw"
        mt="70px"
        backgroundColor={colors.background[colorMode]}
      >
        <Flex
          flexDirection="column"
          padding="5px 1.5rem"
          w={["100vw", "100vw", "100vw", "90em"]}
          mr="auto"
          ml="auto"
          overflow="auto"
          className="scrollbar"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
