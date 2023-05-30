import {
    Box,
    Container,
    Heading,
    Spacer,
    Text,
    VStack
  } from '@chakra-ui/react';

import { ArrowDownIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion";

const BouncingArrow = motion(ArrowDownIcon);

export default function Landing(props) {
    return (
        <Container as="section" maxWidth="100vw" h="100vh" pt={['25vh', '35vh']} centerContent>
            <VStack>
                <Heading size="4xl">Jaeyong Lee</Heading>
                <Heading size="md">🇨🇦 🇰🇷</Heading>
                <Text fontSize="lg">Computer Science @ University of Toronto</Text>
                <BouncingArrow pt="20px" w={10} h={20} animate={{ y: [-10, 0, -10] }} transition={{ repeat: Infinity, duration: 1 }} />
            </VStack>
        </Container>       
    )
}