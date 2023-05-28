import {
    Box,
    Container,
    Heading,
    Text,
    VStack
  } from '@chakra-ui/react';

export default function Landing(props) {

    return (
        // TODO: add a button somewhere that leads to a PDF of my resume
        <Container as="section" maxWidth="100vw" h="100vh" pt={['25vh', '35vh']} centerContent>
            <VStack>
                <Heading size="4xl">Jaeyong Lee</Heading>
                <Text>🇨🇦 🇰🇷</Text>
                <Text>Computer Science @ University of Toronto</Text>
            </VStack>
        </Container>       
    )
}