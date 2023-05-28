import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export default function Footer() {
    const buttonStyles = {
        fontSize: "17px",
        bg: null,
        ':hover': {
            color: 'black'
        }
    }

    return (

    // TODO: Fix the position of the navbar to the top of the screen
    <Box height="125px" width="100vw" bg={"blue.900"}>
        <Flex as="nav" p="10px" alignItems="center">

            <Heading size="md" pl="15px">Built with LOVE using React.JS</Heading>
            <Spacer />
            <Text>I am a footer.</Text>

        </Flex>
    </Box>
    )
}
