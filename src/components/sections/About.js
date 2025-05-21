import { Container, Heading, Text, Image, HStack } from '@chakra-ui/react';

export default function About() {
    return (
        <Container maxWidth="65vw" name="About Me" centerContent>
            <Heading>About Me</Heading>

            <HStack spacing={10} pt="15px" pb="20px">
                <Text>
                    Hi! My name is Jaeyong and I'm a Computer Science student at the University of
                    Toronto. I have experience working on both front-end and back-end development
                    through my roles working at the Intelligent Adaptive Interventions Lab and
                    Serv2U. In my free time, I enjoy playing the guitar and exploring nature.
                </Text>
            </HStack>
        </Container>
    );
}
