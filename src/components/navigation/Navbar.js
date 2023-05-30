import { Box, Flex, Divider, Link, Button, Spacer, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const menuItems = ['About Me', 'Skills', 'Projects', 'Contact', 'Resume']; 
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


export default function navbar() {
    const buttonStyles = {
        fontSize: "17px",
        bg: null,
        ':hover': {
            color: 'black'
            // TODO: add a bouncing animation or something to menu buttons when hovered
        }
    }

    return (
        <Box width="100vw" position="fixed" bg="gray.900">

            {/* Social Media Icons above menu */}
            <Flex width="100vw" p="8px" alignItems="center" justify="flex-end">
                <Divider />
                    <HStack spacing="20px" pr="13px">
                        {socialMedia.map((social, i) => (
                            <Link
                                key={i}
                                aria-label={social.aria}
                                href={social.href}
                                fontSize="20px"
                                isExternal
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </HStack>
            </Flex>

            {/* <Divider /> */}

            {/* Start menu here */}
            <Flex as="nav" pl="10px" pr="10px" pb="10px" alignItems="center">

                <Button sx={buttonStyles} size="md" pl="15px" onClick={() => scroll.scrollToTop({ duration: 500 })}>
                    Jaeyong Lee
                </Button>
                
                <Spacer />
                
                <HStack spacing="20px">

                    {menuItems.map(item => (
                        <ScrollLink to={item} smooth={true} duration={500} offset={-80}>
                            <Button sx={buttonStyles}>
                                {item}
                            </Button>
                        </ScrollLink>
                    ))}

                    {/* TODO: Change the colour of the resume button to make it stand out */}
                    <ColorModeSwitcher />
                </HStack>

            </Flex>
        </Box>
    )
}
