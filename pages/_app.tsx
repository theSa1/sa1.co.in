import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { theme as chakraTheme } from "@chakra-ui/react"
import "../styles/global.css"
import "../styles/header.css"
import { useRouter } from "next/router"
import { useEffect } from "react"

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

declare global {
  interface Window {
    gtag: any
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const handleRouteChange = (url: string) => {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
