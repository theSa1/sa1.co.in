import {
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react"
import Link from "next/link"
import React, { useState } from "react"
import { FaBars, FaHeart, FaMoon, FaSun } from "react-icons/fa"
import { colors } from "../colors"
import { SocialMedia } from "./SocialMedia"
import { theme as chakraTheme } from "@chakra-ui/react"
import ReactCanvasConfetti from "react-canvas-confetti"

interface HeaderTypes {
  page: "/" | "/about" | "/projects" | "/contact"
}

interface MobileNavTypes {
  isOpen: boolean
  page: "/" | "/about" | "/projects" | "/contact"
}

interface NavTypes {
  display?: [
    "inline-flex" | "none",
    "inline-flex" | "none",
    "inline-flex" | "none"
  ]
  page: "/" | "/about" | "/projects" | "/contact"
}

interface NavButtonsTypes {
  display?: [
    "inline-flex" | "none",
    "inline-flex" | "none",
    "inline-flex" | "none"
  ]
}

export const Header: React.FC<HeaderTypes> = ({ page }) => {
  const { colorMode } = useColorMode()
  const [likes, setLikes] = React.useState("...")
  const [mobileMenuIsOpen, mobileMenuSetOpen] = React.useState(false)

  React.useEffect(() => {
    fetch(process.env["NEXT_PUBLIC_LIKES_API_URL"] as string, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((data) => {
      data.json().then((data) => {
        setLikes(data.likes.toString())
      })
    })
  }, [])

  const [liked, setLiked] = useState(false)

  return (
    <>
      <ReactCanvasConfetti
        className="Hello"
        fire={liked}
        onDecay={() => {
          setLiked(false)
        }}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        angle={90}
        origin={{ x: 0.5, y: 1.3 }}
        spread={200}
        particleCount={500}
        startVelocity={70}
      />
      <Flex
        pos="absolute"
        left="0"
        right="0"
        top="0"
        height="70px"
        shadow="base"
        width="100vw"
        m="0"
        justifyContent="center"
        zIndex="4"
        backgroundColor={colors.header.background[colorMode]}
      >
        <Flex
          width="90em"
          height="100%"
          padding="0 1.5rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" passHref>
            <svg
              width="69"
              height="38"
              viewBox="0 0 69 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19" cy="19" r="19" fill="#4FD1C5" />
              <path
                d="M68.37 0V31.004H62.7665V5.46506H62.5853L55.3506 10.0975V4.95035L63.0384 0H68.37Z"
                fill={colors.header.textColor[colorMode]}
              />
              <path
                d="M39.6523 31.2514C38.1607 31.2514 36.8173 30.9884 35.6219 30.4625C34.4368 29.9265 33.4969 29.1376 32.8022 28.0958C32.1176 27.0541 31.7754 25.7696 31.7754 24.2424C31.7754 22.9276 32.0206 21.8403 32.511 20.9806C33.0014 20.121 33.6706 19.4332 34.5185 18.9174C35.3665 18.4016 36.3218 18.0122 37.3843 17.7492C38.457 17.4761 39.5655 17.2789 40.7098 17.1576C42.089 17.016 43.2077 16.8895 44.0659 16.7783C44.9241 16.6569 45.5473 16.4749 45.9355 16.2321C46.334 15.9793 46.5332 15.5899 46.5332 15.064V14.9729C46.5332 13.8301 46.1909 12.9451 45.5064 12.318C44.8219 11.6909 43.836 11.3774 42.5487 11.3774C41.1899 11.3774 40.1121 11.6707 39.3152 12.2573C38.5285 12.8439 37.9973 13.5367 37.7214 14.3358L32.5416 13.6075C32.9503 12.1916 33.6246 11.0082 34.5645 10.0575C35.5044 9.0967 36.6538 8.37861 38.0126 7.90325C39.3714 7.41778 40.8732 7.17505 42.5181 7.17505C43.6521 7.17505 44.781 7.30653 45.9049 7.56949C47.0287 7.83246 48.0554 8.26736 48.9851 8.8742C49.9149 9.47092 50.6607 10.2851 51.2226 11.3167C51.7947 12.3484 52.0808 13.6379 52.0808 15.1853V30.7811H46.7477V27.58H46.5638C46.2267 28.2273 45.7516 28.8342 45.1386 29.4005C44.5358 29.9568 43.7747 30.4069 42.8552 30.7508C41.946 31.0845 40.8783 31.2514 39.6523 31.2514ZM41.0929 27.2159C42.2065 27.2159 43.1719 26.9985 43.9893 26.5636C44.8066 26.1185 45.4349 25.5319 45.8742 24.8037C46.3237 24.0755 46.5485 23.2816 46.5485 22.4219V19.6759C46.3748 19.8175 46.0785 19.949 45.6597 20.0704C45.251 20.1917 44.7913 20.2979 44.2804 20.389C43.7696 20.48 43.2639 20.5609 42.7633 20.6317C42.2627 20.7025 41.8285 20.7632 41.4607 20.8138C40.6331 20.925 39.8924 21.1071 39.2386 21.3599C38.5847 21.6128 38.0688 21.9668 37.6908 22.4219C37.3128 22.8669 37.1237 23.4434 37.1237 24.1514C37.1237 25.1628 37.4967 25.9264 38.2425 26.4422C38.9883 26.958 39.9384 27.2159 41.0929 27.2159Z"
                fill={colors.header.textColor[colorMode]}
              />
              <path
                d="M18.9305 7.17505C23.9809 7.17505 26.8256 9.54172 27.7687 13.1676L23.6462 13.8958C23.1138 12.3332 21.8056 10.7706 18.9761 10.7706C16.39 10.7706 14.4429 12.0449 14.4581 13.8351C14.4429 15.4129 15.5534 16.2776 18.1242 16.8845L21.836 17.7341C26.1258 18.7202 28.2251 20.7531 28.2251 24.0452C28.2251 28.2627 24.3156 31.2514 18.6719 31.2514C13.4237 31.2514 9.98571 28.9302 9.2251 24.8037L13.6214 24.1362C14.1691 26.427 15.9185 27.5952 18.6414 27.5952C21.623 27.5952 23.555 26.1843 23.555 24.3789C23.555 22.9225 22.5053 21.9212 20.2539 21.4206L16.2988 20.5559C11.9177 19.5849 9.90965 17.3851 9.90965 14.0778C9.90965 9.95134 13.6518 7.17505 18.9305 7.17505Z"
                fill={colors.header.textColor[colorMode]}
              />
            </svg>
          </Link>
          <Nav display={["none", "inline-flex", "inline-flex"]} page={page} />
          <Flex>
            <NavButtons display={["none", "inline-flex", "inline-flex"]} />
            <Button
              size="sm"
              variant="outline"
              leftIcon={<FaHeart />}
              ml="10px"
              color={colors.header.likeBtn.text[colorMode]}
              borderColor={colors.header.likeBtn.border[colorMode]}
              onClick={() => {
                fetch(process.env["NEXT_PUBLIC_LIKES_API_URL"] as string, {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ like: true }),
                }).then((data) => {
                  data.json().then((data) => {
                    setLikes(data.likes.toString())
                    setLiked(true)
                  })
                })
              }}
            >
              {likes} Likes
            </Button>
            <IconButton
              aria-label="Toggle Hamburger Menu"
              size="sm"
              variant="outline"
              ml="10px"
              display={["inline-flex", "none", "none"]}
              onClick={() => mobileMenuSetOpen((prev) => !prev)}
            >
              <FaBars color={chakraTheme.colors.gray["400"]} />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
      <MobileNav isOpen={mobileMenuIsOpen} page={page} />
    </>
  )
}

const MobileNav: React.FC<MobileNavTypes> = ({ isOpen, page }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      shadow="base"
      display={
        isOpen === true ? ["flex", "none", "none"] : ["none", "none", "none"]
      }
      zIndex="2"
      padding="0 1.5rem"
      flexDirection="column"
      justifyContent="center"
      pos="absolute"
      top="70px"
      left="0"
      right="0"
      backgroundColor={colors.header.background[colorMode]}
    >
      <Nav page={page} />
      <NavButtons />
    </Flex>
  )
}

const Nav: React.FC<NavTypes> = ({ display, page: location }) => {
  const [page, setPage] = React.useState("")
  const { colorMode } = useColorMode()

  React.useEffect(() => {
    if (typeof location == "undefined") {
      return
    }
    setPage(location)
  }, [location])
  return (
    <Flex
      display={display}
      justifyContent={["center", "start", "start"]}
      m={["10px 0", "0", "0"]}
    >
      <Heading
        as="p"
        size="sm"
        color={colors.header.textColor[colorMode]}
        m="0 12px"
        _after={{ backgroundColor: "teal.300" }}
        className={`menu-item${page === "/" ? " active" : ""}`}
      >
        <Link href="/">Home</Link>
      </Heading>
      <Heading
        as="p"
        size="sm"
        color={colors.header.textColor[colorMode]}
        m="0 12px"
        _after={{ backgroundColor: "teal.300" }}
        className={`menu-item${
          page === "/about" || page === "/about/" ? " active" : ""
        }`}
      >
        <Link href="/about">About</Link>
      </Heading>
      <Heading
        as="p"
        size="sm"
        color={colors.header.textColor[colorMode]}
        m="0 12px"
        _after={{ backgroundColor: "teal.300" }}
        className={`menu-item${
          page === "/projects" || page === "/projects/" ? " active" : ""
        }`}
      >
        <Link href="/projects">Projects</Link>
      </Heading>
      <Heading
        as="p"
        size="sm"
        color={colors.header.textColor[colorMode]}
        m="0 12px"
        _after={{ backgroundColor: "teal.300" }}
        className={`menu-item${
          page === "/contact" || page === "/contact/" ? " active" : ""
        }`}
      >
        <Link href="/contact">Contact</Link>
      </Heading>
    </Flex>
  )
}

const NavButtons: React.FC<NavButtonsTypes> = ({ display }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Flex
        m={["10px 0", "0", "0"]}
        justifyContent={["center", "start", "start"]}
        display={display}
      >
        <SocialMedia color={colors.header.icon[colorMode]} />
        <IconButton
          aria-label="Toggle dark mode"
          size="sm"
          rounded="full"
          variant="outline"
          m="0 10px"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? (
            <FaMoon color={colors.header.icon[colorMode]} />
          ) : (
            <FaSun color={colors.header.icon[colorMode]} />
          )}
        </IconButton>
      </Flex>
    </>
  )
}
