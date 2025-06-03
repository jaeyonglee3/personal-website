import {
    Box,
    Flex,
    Text,
    Button,
    useColorMode,
    VStack,
    Link,
    useBreakpointValue,
} from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUpCircle } from 'react-icons/fi';

export default function Footer() {
    const { colorMode } = useColorMode();

    return (
        <Box w="100%" bg={colorMode === 'dark' ? 'gray.800' : 'gray.200'} py={4} px={6} mt="auto">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
                gap={2}
            >
                <VStack spacing={1} align="start">
                    <Text fontSize="sm">Site last updated: May 2025</Text>
                    <Link
                        href="https://github.com/jaeyonglee3/personal-website"
                        isExternal
                        fontSize="sm"
                        color={colorMode === 'dark' ? 'blue.200' : 'blue.400'}
                        _hover={{ textDecoration: 'underline' }}
                    >
                        I built this site with React, check out the repo here!
                    </Link>
                </VStack>

                <VStack spacing={1} align="end">
                    <Button
                        variant="ghost"
                        onClick={() => scroll.scrollToTop({ duration: 700 })}
                        rightIcon={<FiArrowUpCircle fontSize={20} />}
                        size={'sm'}
                    >
                        Back to Top
                    </Button>
                    <Text fontSize="sm">
                        Feel free to contact me for anything, I always love to chat!
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
}
