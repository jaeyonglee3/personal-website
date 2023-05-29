import { Box, Flex, Heading, Button, Spacer, HStack, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll';

const menuItems = ['About Me', 'Skills', 'Projects', 'Contact', 'Resume']; 

const MenuButton = () => (
    <Text>Button</Text>
)

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
            <Flex as="nav" p="10px" alignItems="center">

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
