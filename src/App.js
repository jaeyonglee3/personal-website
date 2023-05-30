import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import NavBar from "./components/navigation/Navbar";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Footer from "./components/navigation/Footer";
import theme from "./theme"
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Footer />
      <ParticlesBg type="cobweb" num={150} color="#BEBEBE" bg={true} /> 

    </ChakraProvider>
  );
}

export default App; 
