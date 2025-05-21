import { Box, Flex, HStack, Button, Spacer, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../global/ColorModeSwitcher';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import SocialMedia from '../global/SocialMedia';
import { FaExternalLinkAlt } from 'react-icons/fa';

const menuItems = ['About Me', 'Skills', 'Projects & Experience'];

export default function Navbar() {
    const { colorMode } = useColorMode();
    const openResume = () => {
        window.open('/Jaeyong-Resume.pdf', '_blank');
    };

    return (
        <Box
            width="100vw"
            position="fixed"
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
            zIndex={2}
        >
            <Flex as="nav" px="20px" py="16px" alignItems="center">
                <Button
                    fontWeight="normal"
                    variant={'ghost'}
                    onClick={() => scroll.scrollToTop({ duration: 500 })}
                >
                    Jaeyong Lee
                </Button>
                <HStack spacing={'12px'}>
                    {menuItems.map(item => (
                        <ScrollLink key={item} to={item} smooth duration={500} offset={-80}>
                            <Button variant={'ghost'}>{item}</Button>
                        </ScrollLink>
                    ))}
                    <Button
                        onClick={openResume}
                        variant={'ghost'}
                        rightIcon={<FaExternalLinkAlt fontSize={16} />}
                    >
                        Resume
                    </Button>
                </HStack>
                <Spacer />
                <SocialMedia fontSize="20px" />
                <ColorModeSwitcher />
            </Flex>
        </Box>
    );
}
