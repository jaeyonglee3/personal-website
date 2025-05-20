import { Box, Flex, Divider, Button, Spacer, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../global/ColorModeSwitcher";
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import SocialMedia from "../global/SocialMedia";

const menuItems = ['About Me', 'Skills', 'Projects']; 


export default function navbar() {
    const buttonStyles = {
        fontSize: "17px",
        bg: null,
        ':hover': {
            color: 'black'
            // TODO: add a bouncing animation or something to menu buttons when hovered
        }
    }

    const openResume = () => {
        window.open("/Jaeyong-Resume.pdf", "_blank")
    }

    return (
        <Box width="100vw" position="fixed" bg="gray.900">

            {/* Social Media Icons above menu */}
            <Flex width="100vw" p="8px" alignItems="center" justify="flex-end">
                <Divider />
                <SocialMedia fontSize="20px"/>
            </Flex>

            {/* Start menu here */}
            <Flex as="nav" pl="10px" pr="10px" pb="5px" alignItems="center">

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

                    <Button sx={buttonStyles} onClick={openResume}>Resume</Button>

                    {/* TODO: Change the colour of the resume button to make it stand out */}
                    <ColorModeSwitcher />
                </HStack>

            </Flex>
        </Box>
    )
}
