import { Container, Heading, Text, Image, HStack } from "@chakra-ui/react";

export default function About() {
    return (
        <Container bg="blue.700" maxWidth="65vw" centerContent>
            <Heading>About Me</Heading>

            <HStack spacing={10} pt="15px">
                <Image 
                    src="/headshot.jpg"
                    boxSize='135px'
                    borderRadius='full'
                    border={'3px solid #1E2428'}
                />

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec elit id tortor ultrices euismod. Nulla facilisi. 
                    Aliquam erat volutpat. Mauris elementum eros ac efficitur posuere. 
                    Suspendisse pulvinar velit vitae ex ultrices, in consequat justo consectetur. 
                    Nunc id lectus sed libero viverra dapibus. Ut non tempor velit. Suspendisse eleifend posuere arcu, 
                    nec malesuada ex eleifend nec. Nulla malesuada augue auctor, tempus lacus eget, rutrum purus. 
                    Cras consectetur sem quis ipsum cursus, sit amet tincidunt metus auctor. 
                    Quisque facilisis velit a ullamcorper vulputate. Duis feugiat commodo diam et.
                </Text>
            </HStack>
        </Container>
    )
}