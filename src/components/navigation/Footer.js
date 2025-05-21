import { Box, Flex, Spacer, Text, Button, useColorMode } from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUpCircle } from 'react-icons/fi';

export default function Footer() {
    const { colorMode } = useColorMode();

    return (
        <Box
            height="75px"
            width="100%"
            overflow-x="hidden"
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
            p="13px"
        >
            <Flex as="nav" p="10px" alignItems="center">
                <Text fontSize="md">Last updated: May 2025</Text>
                <Spacer />

                <Button
                    variant="ghost"
                    onClick={() => scroll.scrollToTop({ duration: 500 })}
                    rightIcon={<FiArrowUpCircle fontSize={24} />}
                    fontWeight="normal"
                >
                    Back to Top
                </Button>
            </Flex>
        </Box>
    );
}
