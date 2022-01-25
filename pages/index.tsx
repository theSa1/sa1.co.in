import { Flex, Heading } from "@chakra-ui/react"
import type { NextPage } from "next"
import { Header } from "../components/Header"

const Home: NextPage = () => {
  return (
    <Flex>
      <Header page="/" />
    </Flex>
  )
}

export default Home
