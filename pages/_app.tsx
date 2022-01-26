import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { theme as chakraTheme } from "@chakra-ui/react"
import "../styles/global.css"
import "../styles/header.css"

const theme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  config: {
    ...chakraTheme.config,
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  breakpoints: createBreakpoints({
    sm: "50em",
    md: "65em",
    lg: "90em",
    xl: "100em",
  }),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
