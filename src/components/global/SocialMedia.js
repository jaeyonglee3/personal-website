import { HStack, Link } from "@chakra-ui/react"
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const socialMedia = [
    {
        aria: 'Linkedin',
        icon: <AiFillLinkedin />,
        href: "https://www.linkedin.com/in/jaeyong-lee/"
    },
    {
        aria: 'GitHub',
        icon: <AiFillGithub />,
        href: "https://github.com/jaeyonglee3"
    },
    {
        aria: 'Email',
        icon: <AiOutlineMail />,
        href: 'mailto:jaeyong.lee@mail.utoronto.ca'
    }
]

export default function SocialMedia(props) {
  return (
    <HStack spacing="20px" pr="13px">
        {socialMedia.map((social, i) => (
            <Link
                key={i}
                aria-label={social.aria}
                href={social.href}
                fontSize={props.fontSize}
                isExternal
            >
                {social.icon}
            </Link>
        ))}
    </HStack>
  )
}
