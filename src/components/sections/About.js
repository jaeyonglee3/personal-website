import { Container, Heading, Text, VStack, Box, HStack, Image, Flex } from '@chakra-ui/react';

export default function About() {
    return (
        <Container maxWidth="85vw" name="About Me" centerContent py="60px">
            <Heading mb="6">About Me</Heading>

            <HStack spacing="40px" align="center" flexWrap="wrap" justify="center">
                <Box textAlign="center">
                    <Image
                        src="/sunset.jpg"
                        alt="dang the image won't load :( Imagine a beautiful sunset!"
                        borderRadius="xl"
                        boxSize={['250px', '300px']}
                        objectFit="cover"
                        shadow="lg"
                    />
                    <Text fontSize="sm" mt="2" color="gray.300">
                        📸 A trip to Georgian Bay — 08/2024
                    </Text>
                </Box>

                <Box
                    borderRadius="2xl"
                    bg="rgba(45, 55, 72, 0.6)"
                    p="30px"
                    color="white"
                    shadow="md"
                    backdropFilter="blur(1px)"
                    flex="1"
                >
                    <VStack spacing="20px" align="start" fontSize="lg">
                        {[
                            {
                                emoji: '👨‍💻',
                                text: (
                                    <>
                                        I'm in my 3rd year of CS at the University of Toronto and I
                                        have a passion for{' '}
                                        <Text as="span" fontWeight="bold">
                                            software development
                                        </Text>{' '}
                                        - especially when it comes to building meaningful products
                                        that make life a little easier.
                                    </>
                                ),
                            },
                            {
                                emoji: '💡',
                                text: (
                                    <>
                                        I love building{' '}
                                        <Text as="span" fontWeight="bold">
                                            clean, practical software
                                        </Text>
                                        —things people actually want to use. Whether it's a tool to
                                        save time or something that sparks joy, I'm all about it.
                                    </>
                                ),
                            },
                            {
                                emoji: '🧠',
                                text: (
                                    <>
                                        My interests include{' '}
                                        <Text as="span" fontWeight="bold">
                                            full-stack development
                                        </Text>
                                        ,{' '}
                                        <Text as="span" fontWeight="bold">
                                            system design
                                        </Text>
                                        , and{' '}
                                        <Text as="span" fontWeight="bold">
                                            developer tools
                                        </Text>
                                        . I'm always curious about how things work under the hood.
                                    </>
                                ),
                            },
                            {
                                emoji: '🌱',
                                text: (
                                    <>
                                        In my free time, I enjoy making{' '}
                                        <Text as="span" fontWeight="bold">
                                            music
                                        </Text>{' '}
                                        — I play guitar and drums, and some of my favourite bands
                                        are The Beatles, Eagles, and Dire Straits. I also love
                                        playing{' '}
                                        <Text as="span" fontWeight="bold">
                                            basketball
                                        </Text>{' '}
                                        and spending time{' '}
                                        <Text as="span" fontWeight="bold">
                                            outdoors
                                        </Text>
                                        , especially in seek of amazing views.
                                    </>
                                ),
                            },
                        ].map((item, i) => (
                            <Flex key={i} align="start">
                                <Box fontSize="xl" mr="12px" pt="3px">
                                    {item.emoji}
                                </Box>
                                <Text>{item.text}</Text>
                            </Flex>
                        ))}
                    </VStack>
                </Box>
            </HStack>
        </Container>
    );
}
