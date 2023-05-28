import { Box, Container, SimpleGrid } from "@chakra-ui/react";


export default function Projects() {
  return (
    <Container centerContent>
        <SimpleGrid p="20px" spacing="10px" minChildWidth="310px" maxWidth="80vw">

            <Box bg="blue.100" height="200px" border="1px solid"></Box>
            <Box bg="blue.100" height="200px" border="1px solid"></Box>
            <Box bg="blue.100" height="200px" border="1px solid"></Box>
            <Box bg="blue.100" height="200px" border="1px solid"></Box>

            <Box bg="blue.100" height="200px" border="1px solid"></Box>
            <Box bg="blue.100" height="200px" border="1px solid"></Box>
            <Box bg="blue.100" height="200px" border="1px solid"></Box>
            <Box bg="blue.100" height="200px" border="1px solid"></Box>

        </SimpleGrid>
    </Container>
  )
}
