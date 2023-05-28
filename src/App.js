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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Footer />

    </ChakraProvider>
  );
}

export default App; 
