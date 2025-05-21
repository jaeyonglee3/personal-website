import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/navigation/Navbar';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Footer from './components/navigation/Footer';
import theme from './theme';
import ParticlesBg from 'particles-bg';
import { Box } from '@chakra-ui/react';

function App() {
    return (
        <Box position="relative" minH="100vh" overflow="hidden">
            {/* Background particles */}
            <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0}>
                <ParticlesBg type="cobweb" num={160} color="#BEBEBE" />
            </Box>

            {/* Foreground content */}
            <Box position="relative" zIndex={1}>
                <ChakraProvider theme={theme}>
                    <NavBar />
                    <Intro />
                    <About />
                    <Projects />
                    <Footer />
                </ChakraProvider>
            </Box>
        </Box>
    );
}

export default App;
