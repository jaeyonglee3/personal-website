import { Container, Heading, Image, Text, VStack, HStack } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const BouncingArrow = motion(ArrowDownIcon);
const MotionImage = motion(Image);

const imageGallery = [
    { src: '/images/gallery/1.jpg', rotate: -3 },
    { src: '/images/gallery/2.jpg', rotate: 2 },
    { src: '/images/gallery/3.jpg', rotate: -2 },
    { src: '/images/gallery/4.jpg', rotate: 3 },
    { src: '/images/gallery/5.jpg', rotate: -2 },
];

export default function Landing() {
    return (
        <Container
            as="section"
            overflowX="hidden"
            maxW="100vw"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            centerContent
        >
            <VStack spacing={3} align="center" textAlign="center">
                <HStack spacing={6}>
                    {imageGallery.map(({ src, rotate }, i) => (
                        <MotionImage
                            key={i}
                            src={src}
                            boxSize="225px"
                            borderRadius="2xl"
                            objectFit="cover"
                            initial={{ rotate }}
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.3 }}
                            shadow="md"
                        />
                    ))}
                </HStack>

                <Heading size="xl" pt={8}>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Hi, nice to meet you!',
                        ]}
                        speed={20}
                        repeat={0}
                    />
                </Heading>

                <Text fontSize="xl">
                    I'm Jaeyong, a Software Engineer studying Computer Science at the University of
                    Toronto (2022 - 2027)
                </Text>
                {/* <Heading size="lg">🇨🇦 🇰🇷</Heading> */}
                <ScrollLink to="About Me" smooth duration={500} offset={-80}>
                    <BouncingArrow
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
