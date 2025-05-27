import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/Navbar';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Footer from './components/navigation/Footer';
import ParticlesBg from 'particles-bg';
import theme from './theme';
import ExperienceDetail from './components/sections/ExperienceDetail'; // New detail page

function Home() {
    return (
        <>
            <NavBar />
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </>
    );
}

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
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/experience/:slug" element={<ExperienceDetail />} />
                        </Routes>
                    </Router>
                </ChakraProvider>
            </Box>
        </Box>
    );
}

export default App;
