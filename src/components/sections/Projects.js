import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from '@chakra-ui/react';

const cardStyle = {
    borderRadius: 'xl',
    overflow: 'hidden',
    shadow: 'md',
    bg: 'rgba(45, 55, 72, 0.6)',
    backdropFilter: 'blur(4px)',
    color: 'white',
};

const ProjectCard = ({ title, subtitle, description, image, projectLink }) => (
    <Card sx={cardStyle}>
        <Image src={image} alt={title} objectFit="cover" h="160px" w="100%" />

        <CardHeader pb="0">
            <Heading size="md">{title}</Heading>
            {subtitle && (
                <Text fontSize="13px" color="gray.400" mt="1">
                    {subtitle}
                </Text>
            )}
        </CardHeader>

        <CardBody pt="10px" fontSize="sm">
            <Text>{description}</Text>
        </CardBody>

        <CardFooter pt="10px">
            {
                // projectLink.startsWith('http') && (
                //     <Button
                //         as="a"
                //         href={projectLink}
                //         leftIcon={<FaGithub />}
                //         colorScheme="gray"
                //         size="sm"
                //     >
                //         {'GitHub'}
                //     </Button>
                // )

                // Use below when experience details are ready
                <Button
                    as="a"
                    href={projectLink}
                    target={projectLink.startsWith('http') ? '_blank' : '_self'}
                    leftIcon={projectLink.startsWith('http') ? <FaGithub /> : <FaArrowRightLong />}
                    colorScheme="gray"
                    size="sm"
                >
                    {projectLink.startsWith('http') ? 'GitHub' : 'Read More'}
                </Button>
            }
        </CardFooter>
    </Card>
);

export default function Projects() {
    const cards = [
        {
            title: 'PointClickCare Internship',
            subtitle: 'Software Engineer ⋅ Jan 2025 - Aug 2025',
            description: 'A sleek developer productivity dashboard built with React and Chakra UI.',
            image: '/images/devdash.jpg',
            githubLink: 'https://github.com/example/devdash',
            projectLink: '/experience/pointclickcare',
        },
        {
            title: 'Geotab Internship',
            subtitle: 'Software Developer ⋅ May 2024 - Aug 2024',
            description: 'Worked on NLP models for document summarization in Python and PyTorch.',
            image: '/images/research.jpg',
            projectLink: '/experience/geotab',
        },
        {
            title: 'U of T Research Lab',
            subtitle: 'Software Developer (05/2023 - 03/2024)',
            description: 'A mobile app to track fitness habits and goals using React Native.',
            image: '/images/fittrack.jpg',
            githubLink: 'https://github.com/example/fittrack',
            projectLink: '/experience/iai',
        },
        {
            title: 'U of T CS Department',
            subtitle: 'May 2023 - Aug 2023',
            description: 'Worked on internal tools for data pipeline monitoring and alerting.',
            image: '/images/pcc.jpg',
            projectLink: '/experience/sds',
        },
        {
            title: 'Caspr',
            subtitle: 'Next.js, Firebase, TypeScript, React, Three.js, Vercel',
            description: 'Collaborated on redesigning client onboarding flows using TypeScript.',
            image: '/images/clio.jpg',
            projectLink: 'https://github.com/jaeyonglee3/Caspr',
        },
        {
            title: 'EasyChat',
            subtitle: 'MongoDB, Express.js, React, Node.js, Typescript, Socket.IO',
            description: 'A real-time code collaboration tool with WebSocket support.',
            image: '/images/codecollab.jpg',
            projectLink: 'https://github.com/jaeyonglee3/EasyChat',
        },
        {
            title: 'ScanEats',
            subtitle: 'Python, TensorFlow, Flask, React',
            description: 'A real-time code collaboration tool with WebSocket support.',
            image: '/images/codecollab.jpg',
            projectLink: 'https://github.com/jaeyonglee3/ScanEats',
        },
        {
            title: 'MelodyMatch',
            subtitle: 'Python, Plotly, Bottle Web Framework, Tkinter',
            description: 'A real-time code collaboration tool with WebSocket support.',
            image: '/images/codecollab.jpg',
            projectLink: 'https://github.com/jaeyonglee3/MelodyMatch',
        },
        {
            title: 'JoltEd Chrome Extension',
            subtitle: 'JavaScript, React, Chrome API, OpenAI API',
            description: 'A real-time code collaboration tool with WebSocket support.',
            image: '/images/codecollab.jpg',
            projectLink: 'https://github.com/jaeyonglee3/MelodyMatch',
        },
        {
            title: 'Rotman Commerce HR Association Website',
            subtitle: 'HTML, CSS, JavaScript',
            description: 'A real-time code collaboration tool with WebSocket support.',
            image: '/images/codecollab.jpg',
            projectLink: 'https://github.com/jaeyonglee3/MelodyMatch',
        },
        {
            title: 'Habitual (iOS App)',
            subtitle: 'Swift',
            description: 'A real-time code collaboration tool with WebSocket support.',
            image: '/images/codecollab.jpg',
            projectLink: 'https://github.com/jaeyonglee3/MelodyMatch',
        },
        {
            title: 'Coming Soon!',
            subtitle: 'As of May 2025',
            description:
                "I'm working on a new full-stack project that implements RAG techniques for personalized learning experiences.",
            image: '/images/codecollab.jpg',
            projectLink: 'https://github.com/jaeyonglee3/MelodyMatch',
        },
    ];

    return (
        <Container name="Projects & Experience" centerContent py="60px" maxWidth="85vw">
            <Heading mb="2">Projects & Experience</Heading>
            <Text mb="6" fontSize="lg" textAlign="center">
                Here, I've selected a few of my projects and experiences that I'm most proud of.
            </Text>

            <SimpleGrid spacing="20px" minChildWidth="300px" maxW="90vw">
                {cards.map((card, index) => (
                    <ProjectCard key={index} {...card} />
                ))}
            </SimpleGrid>
        </Container>
    );
}
