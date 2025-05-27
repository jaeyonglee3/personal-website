import {
    Box,
    Card,
    CardBody,
    Container,
    Heading,
    HStack,
    Icon,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import {
    SiPython,
    SiGo,
    SiC,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiPostgresql,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiFlask,
    SiSpring,
    SiJest,
    SiPostman,
    SiRedux,
    SiGit,
} from 'react-icons/si';
import { FaNode, FaDatabase, FaJava } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const cardStyle = {
    borderRadius: 'xl',
    height: '400px',
    overflow: 'hidden',
    shadow: 'md',
    bg: 'rgba(45, 55, 72, 0.6)',
    backdropFilter: 'blur(4px)',
    color: 'white',
    p: 6,
};

const skills = [
    {
        label: 'Java',
        icon: FaJava,
    },
    {
        label: 'Python',
        icon: SiPython,
    },
    {
        label: 'Go',
        icon: SiGo,
    },
    {
        label: 'C',
        icon: SiC,
    },
    {
        label: 'JavaScript',
        icon: SiJavascript,
    },
    {
        label: 'TypeScript',
        icon: SiTypescript,
    },
    {
        label: 'React',
        icon: SiReact,
    },
    {
        label: 'HTML',
        icon: SiHtml5,
    },
    {
        label: 'CSS',
        icon: SiCss3,
    },
    {
        label: 'Tailwind CSS',
        icon: SiTailwindcss,
    },
    {
        label: 'Flask',
        icon: SiFlask,
    },
    {
        label: 'Express.js',
        icon: SiExpress,
    },
    {
        label: 'Spring Boot',
        icon: SiSpring,
    },
    {
        label: 'Jest',
        icon: SiJest,
    },
    {
        label: 'PostgreSQL',
        icon: SiPostgresql,
    },
    {
        label: 'MongoDB',
        icon: SiMongodb,
    },
    {
        label: 'SQL / NoSQL',
        icon: FaDatabase,
    },
    {
        label: 'Node.js',
        icon: FaNode,
    },
    {
        label: 'Postman',
        icon: SiPostman,
    },
    {
        label: 'Redux',
        icon: SiRedux,
    },
    {
        label: 'Git',
        icon: SiGit,
    },
];

export default function Skills() {
    return (
        <Container maxWidth="85vw" name="Skills" centerContent py="60px">
            <Heading mb="6">Skills</Heading>
            <HStack spacing="40px" align="center">
                <Card {...cardStyle} width="100%" maxW="1000px">
                    <CardBody>
                        <Heading size="md" mb="4">
                            Tech Stack
                        </Heading>
                        <Wrap spacing="20px">
                            {skills.map(({ label, icon: IconComponent }) => (
                                <WrapItem key={label}>
                                    <VStack spacing={1}>
                                        {IconComponent ? (
                                            <Icon as={IconComponent} fontSize="28px" />
                                        ) : (
                                            <Box h="28px" />
                                        )}
                                        <Text fontSize="sm" textAlign="center">
                                            {label}
                                        </Text>
                                    </VStack>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </CardBody>
                </Card>

                <Card {...cardStyle} width="100%" maxW="800px">
                    <CardBody>
                        <Heading size="md" mb="4">
                            Aspirations
                        </Heading>
                        <Text fontSize="lg">
                            I'm passionate about building software that's thoughtful, well-designed,
                            and useful — from developer tools to user-focused products. I aspire to
                            work on engineering teams where I can help design scalable systems,
                            write clean code, and solve meaningful problems through tech.
                        </Text>
                    </CardBody>
                </Card>
            </HStack>
        </Container>
    );
}
