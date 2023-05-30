import { Box, Flex, Spacer, Text, Divider, Button } from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import SocialMedia from "../global/SocialMedia";
import { FiArrowUpCircle } from "react-icons/fi";


export default function Footer() {
    return (
        // TODO: Fix the position of the navbar to the top of the screen
        <Box height="75px" width="100vw" bg={"gray.900"} p="13px">
            <Flex as="nav" p="10px" alignItems="center">
                <Text fontSize="md">&copy; Jaeyong Lee. Built with&nbsp;&hearts; using React.js</Text>
                <Spacer />
                <SocialMedia fontSize="25px"/>

                <Button variant='ghost' onClick={() => scroll.scrollToTop({ duration: 500 })}>
                    <FiArrowUpCircle fontSize={30} color="#48BB78"/>
                </Button>
            </Flex>
        </Box>
    )
}
