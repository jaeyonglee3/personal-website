import { Box, Card, CardBody, CardFooter, CardHeader, Container, Heading, SimpleGrid } from "@chakra-ui/react";

const ProjectCard = () => {
  const cardStyle = {
    fontSize: "17px",
    height: "200px",
  };

  return (
  <Card sx={cardStyle}>
    <CardHeader>
      PROJECT NAME
    </CardHeader>
    
    <CardBody>
      A description of the project
    </CardBody>

    <CardFooter>
      Link to the project
    </CardFooter>
  </Card>
  );
}
  

export default function Projects() {
  const numCards = 6;

  return (
    <Container name="Projects" centerContent>
      <Heading>Projects</Heading>

      <SimpleGrid p="20px" spacing="10px" minChildWidth="370px" maxWidth="85vw">

        {Array(numCards).fill().map((_, index) => (
          <ProjectCard key={index} />
        ))};

      </SimpleGrid>
    </Container>
  )
}
