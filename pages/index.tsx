import { Heading } from "@chakra-ui/react"
import type { NextPage } from "next"
import { Layout } from "../components/Layout"

const Home: NextPage = () => {
  return (
    <Layout page="/">
      <Heading>Hello</Heading>
    </Layout>
  )
}

export default Home
