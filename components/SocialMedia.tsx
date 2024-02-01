import { IconButton } from "@chakra-ui/button"
import React from "react"
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa"

export const SocialMedia: React.FC<{ color: string }> = ({ color }) => {
  return (
    <>
      <a href="https://github.com/thesa1">
        <IconButton
          aria-label="Github"
          size="sm"
          rounded="full"
          variant="ghost"
          m="0 3px"
        >
          <FaGithub size="25px" color={color} />
        </IconButton>
      </a>
      <a href="https://twitter.com/sa1wasTooShort/">
        <IconButton
          aria-label="Twitter"
          size="sm"
          rounded="full"
          variant="ghost"
          m="0 3px"
        >
          <FaTwitter size="25px" color={color} />
        </IconButton>
      </a>
      <a href="mailto:i@sa1.dev">
        <IconButton
          aria-label="E-Mail"
          size="sm"
          rounded="full"
          variant="ghost"
          m="0 3px"
        >
          <FaEnvelope size="25px" color={color} />
        </IconButton>
      </a>
    </>
  )
}
