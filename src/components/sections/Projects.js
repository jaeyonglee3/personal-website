import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Text,
    HStack,
    Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const cardStyle = {
    borderRadius: 'xl',
    overflow: 'hidden',
    shadow: 'md',
    bg: 'rgba(45, 55, 72, 0.6)',
    backdropFilter: 'blur(4px)',
    color: 'white',
};

const ProjectCard = ({ title, description, image, githubLink, isProject }) => (
    <Card sx={cardStyle}>
        <Image src={image} alt={title} objectFit="cover" h="160px" w="100%" />

        <CardHeader pb="0">
            <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody pt="10px" fontSize="sm">
            <Text>{description}</Text>
        </CardBody>

        <CardFooter pt="10px">
            {isProject && (
                <HStack spacing="8px">
                    <Icon as={FaGithub} boxSize={5} />
                    <Link href={githubLink} isExternal>
                        View on GitHub
                    </Link>
                </HStack>
            )}
        </CardFooter>
    </Card>
);

export default function Projects() {
    const cards = [
        {
            title: 'DevDash',
            description: 'A sleek developer productivity dashboard built with React and Chakra UI.',
            image: '/images/devdash.jpg',
            githubLink: 'https://github.com/example/devdash',
            isProject: true,
        },
        {
            title: 'UofT Research Assistant',
            description: 'Worked on NLP models for document summarization in Python and PyTorch.',
            image: '/images/research.jpg',
            isProject: false,
        },
        {
            title: 'FitTrack',
            description: 'A mobile app to track fitness habits and goals using React Native.',
            image: '/images/fittrack.jpg',
            githubLink: 'https://github.com/example/fittrack',
            isProject: true,
        },
        {
            title: 'PointClickCare Internship',
            description: 'Worked on internal tools for data pipeline monitoring and alerting.',
            image: '/images/pcc.jpg',
            isProject: false,
        },
        {
            title: 'Clio UI Revamp',
            description: 'Collaborated on redesigning client onboarding flows using TypeScript.',
            image: '/images/clio.jpg',
            isProject: false,
        },
        {
            title: 'CodeCollab',
            description: 'A real-time code collaboration tool with WebSocket support.',
            image: '/images/codecollab.jpg',
            githubLink: 'https://github.com/example/codecollab',
            isProject: true,
        },
    ];

    return (
        <Container name="Projects & Experience" centerContent py="60px">
            <Heading mb="6">Projects & Experience</Heading>

            <SimpleGrid spacing="20px" minChildWidth="300px" maxW="90vw">
                {cards.map((card, index) => (
                    <ProjectCard key={index} {...card} />
                ))}
            </SimpleGrid>
        </Container>
    );
}
