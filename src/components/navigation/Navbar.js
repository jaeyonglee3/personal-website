import { Box, Flex, Divider, HStack, Button, Spacer, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../global/ColorModeSwitcher';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import SocialMedia from '../global/SocialMedia';
import { FaExternalLinkAlt } from 'react-icons/fa';

const menuItems = ['About Me', 'Projects & Experience', 'Skills'];

export default function Navbar() {
    const { colorMode } = useColorMode();
    const openResume = () => {
        window.open('/Jaeyong Lee Resume.pdf', '_blank');
    };

    return (
        <Box
            width="100vw"
            position="fixed"
            bg={colorMode === 'dark' ? '#0a0b0f' : '#F7FAFC'}
            zIndex={2}
        >
            <Flex as="nav" px="20px" py="12px" alignItems="center">
                <Button
                    fontWeight="normal"
                    variant={'ghost'}
                    onClick={() => scroll.scrollToTop({ duration: 500 })}
                >
                    Jaeyong Lee
                </Button>

                <Divider orientation="vertical" height="24px" mx="12px" borderColor="gray.500" />

                <HStack spacing={'12px'}>
                    {menuItems.map(item => (
                        <ScrollLink key={item} to={item} smooth duration={500} offset={-80}>
                            <Button variant={'ghost'} size={'md'}>
                                {item}
                            </Button>
                        </ScrollLink>
                    ))}
                    <Button
                        onClick={openResume}
                        variant={'ghost'}
                        rightIcon={<FaExternalLinkAlt fontSize={12} />}
                    >
                        My Resume
                    </Button>
                </HStack>

                <Spacer />
                <SocialMedia fontSize="20px" />
                <ColorModeSwitcher />
            </Flex>
        </Box>
    );
}
