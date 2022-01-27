import {
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { FaBars, FaHeart, FaMoon, FaSun } from "react-icons/fa"
import { colors } from "../colors"
import { SocialMedia } from "./SocialMedia"
import { theme as chakraTheme } from "@chakra-ui/react"

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

  return (
    <>
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
              width="122"
              height="38"
              viewBox="0 0 122 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.7324" cy="18.7324" r="18.7324" fill="#4FD1C5" />
              <path
                d="M39.2574 30.0853C43.0517 30.0853 45.1878 28.1583 46.0393 26.4404H46.2186V29.5774H50.5805V14.3406C50.5805 7.66323 45.3223 6.33374 41.6774 6.33374C37.5246 6.33374 33.7004 8.00681 32.2066 12.1895L36.4042 13.1455C37.0615 11.5173 38.7346 9.94876 41.7371 9.94876C44.6202 9.94876 46.099 11.4575 46.099 14.0567V14.1613C46.099 15.7896 44.426 15.7597 40.3031 16.2377C35.9561 16.7456 31.5045 17.8809 31.5045 23.0943C31.5045 27.6056 34.8955 30.0853 39.2574 30.0853ZM40.2284 26.5002C37.7038 26.5002 35.8814 25.3649 35.8814 23.154C35.8814 20.7639 38.0026 19.9125 40.5869 19.5689C42.0359 19.3747 45.4716 18.9863 46.114 18.344V21.3017C46.114 24.0205 43.948 26.5002 40.2284 26.5002Z"
                fill={colors.header.textColor[colorMode]}
              />
              <path
                d="M75.3367 6.6325H70.5415L64.7455 24.2893H64.5065L58.6956 6.6325H53.9005L62.2359 29.5774H67.0161L75.3367 6.6325Z"
                fill={colors.header.textColor[colorMode]}
              />
              <path
                d="M85.5132 30.0853C89.3075 30.0853 91.4437 28.1583 92.2951 26.4404H92.4744V29.5774H96.8363V14.3406C96.8363 7.66323 91.5781 6.33374 87.9332 6.33374C83.7804 6.33374 79.9563 8.00681 78.4625 12.1895L82.6601 13.1455C83.3173 11.5173 84.9904 9.94876 87.993 9.94876C90.876 9.94876 92.3549 11.4575 92.3549 14.0567V14.1613C92.3549 15.7896 90.6818 15.7597 86.5589 16.2377C82.2119 16.7456 77.7604 17.8809 77.7604 23.0943C77.7604 27.6056 81.1513 30.0853 85.5132 30.0853ZM86.4842 26.5002C83.9597 26.5002 82.1372 25.3649 82.1372 23.154C82.1372 20.7639 84.2584 19.9125 86.8427 19.5689C88.2917 19.3747 91.7275 18.9863 92.3698 18.344V21.3017C92.3698 24.0205 90.2038 26.5002 86.4842 26.5002Z"
                fill={colors.header.textColor[colorMode]}
              />
              <path
                d="M107.252 15.9539C107.252 12.294 109.493 10.2027 112.6 10.2027C115.632 10.2027 117.47 12.1895 117.47 15.5207V29.5774H121.936V14.9829C121.936 9.30642 118.814 6.33374 114.123 6.33374C110.673 6.33374 108.417 7.93212 107.356 10.367H107.073V6.6325H102.785V29.5774H107.252V15.9539Z"
                fill={colors.header.textColor[colorMode]}
              />
              <path
                d="M27.4115 12.4733C26.4853 8.9031 23.6919 6.57275 18.7324 6.57275C13.5489 6.57275 9.87412 9.30643 9.87412 13.3696C9.87412 16.6261 11.8459 18.7921 16.1481 19.7482L20.032 20.5996C22.2429 21.0926 23.2736 22.0785 23.2736 23.5126C23.2736 25.2902 21.3765 26.6794 18.4486 26.6794C15.7747 26.6794 14.0568 25.5292 13.519 23.2736L9.2019 23.9308C9.94881 27.994 13.3248 30.2795 18.4785 30.2795C24.0205 30.2795 27.8596 27.3367 27.8596 23.1839C27.8596 19.9424 25.7981 17.9407 21.5856 16.9697L17.9407 16.1331C15.4162 15.5356 14.3257 14.6841 14.3406 13.1306C14.3257 11.3679 16.2378 10.1131 18.7772 10.1131C21.5557 10.1131 22.8404 11.6517 23.3632 13.1903L27.4115 12.4733Z"
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
