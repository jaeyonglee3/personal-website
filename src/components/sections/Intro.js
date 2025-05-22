import { Container, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import { ArrowDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const BouncingArrow = motion(ArrowDownIcon);

export default function Landing() {
    return (
        <Container
            as="section"
            overflow-x="hidden"
            maxW="50vw"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            centerContent
        >
            <VStack spacing={4} align="center" textAlign="center">
                <Image src="/headshot.jpg" boxSize="180px" borderRadius="full" />
                <Heading size="3xl">Hello!</Heading>
                <Text fontSize="xl">
                    I'm Jaeyong, a Software Developer currently studying Computer Science at the
                    University of Toronto.
                </Text>
                <Heading size="lg">🇨🇦 🇰🇷</Heading>
                <ScrollLink to="About Me" smooth duration={500} offset={-80}>
                    <BouncingArrow
                        pt="20px"
                        w={10}
                        h={20}
                        cursor="pointer"
                        role="button"
                        tabIndex={0}
                        _focus={{ outline: 'none', boxShadow: 'none' }}
                        animate={{ y: [-10, 0, -10] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    />
                </ScrollLink>
            </VStack>
        </Container>
    );
}
