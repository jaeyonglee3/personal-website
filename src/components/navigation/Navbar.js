import { Box, Flex, Heading, Button, Spacer, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

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

    // TODO: Fix the position of the navbar to the top of the screen
    <Box width="100vw" position="fixed" bg="gray.900">
        <Flex as="nav" p="10px" alignItems="center">

            <Heading size="md" pl="15px">Jaeyong Lee</Heading>
            <Spacer />
            
            <HStack spacing="20px">
                <Button sx={buttonStyles}>About Me</Button>
                <Button sx={buttonStyles}>Skills</Button>
                <Button sx={buttonStyles}>Projects</Button>
                <Button sx={buttonStyles}>Contact</Button>
                <Button sx={buttonStyles} bg="blue.100">Resume</Button>
                {/* TODO: Change the colour of the resume button to make it stand out */}
                <ColorModeSwitcher />
            </HStack>

        </Flex>
    </Box>
    )
}
