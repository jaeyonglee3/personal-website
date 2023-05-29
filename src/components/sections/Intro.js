import {
    Box,
    Container,
    Heading,
    Spacer,
    Text,
    VStack
  } from '@chakra-ui/react';

import { ArrowDownIcon } from '@chakra-ui/icons';


export default function Landing(props) {

    return (
        // TODO: add a button somewhere that leads to a PDF of my resume
        <Container as="section" maxWidth="100vw" h="100vh" pt={['25vh', '35vh']} centerContent>
            <VStack>
                <Heading size="4xl">Jaeyong Lee</Heading>
                <Text>🇨🇦 🇰🇷</Text>
                <Text>Computer Science @ University of Toronto</Text>

                {/* TODO: Animate the arrow down icon to bounce up and down and maybe push it down some more */}
                <ArrowDownIcon w={8} h={8} boxSize={6} />
            </VStack>
        </Container>       
    )
}