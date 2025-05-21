import { Container, Heading, Image, Text, VStack } from '@chakra-ui/react';

import { ArrowDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const BouncingArrow = motion(ArrowDownIcon);

export default function Landing() {
    return (
        <Container
            as="section"
            overflow-x="hidden"
            maxW="100%"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            centerContent
        >
            <VStack spacing={4}>
                <Image src="/headshot.jpg" boxSize="176px" borderRadius="full" />
                <Heading size="3xl">hello!</Heading>
                <Text fontSize="xl">
                    My name is Jaeyong Lee and I study Computer Science at the University of
                    Toronto.
                </Text>
                <Heading size="lg">🇨🇦 🇰🇷</Heading>
                <BouncingArrow
                    pt="20px"
                    w={10}
                    h={20}
                    animate={{ y: [-10, 0, -10] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                />
            </VStack>
        </Container>
    );
}
