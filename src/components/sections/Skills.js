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
    backdropFilter: 'blur(1px)',
    color: 'white',
    p: 6,
};

const cardStyle2 = {
    borderRadius: 'xl',
    height: '400px',
    overflow: 'hidden',
    shadow: 'md',
    bg: 'rgba(45, 55, 72, 0.6)',
    backdropFilter: 'blur(1px)',
    color: 'white',
    p: 4,
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

                <Card {...cardStyle2} width="100%" maxW="800px" justifyContent="center">
                    <VStack
                        as="ul"
                        spacing={4}
                        pl="1em"
                        style={{ listStyleType: 'disc' }}
                        align="start"
                    >
                        <Text as="li" fontSize="lg">
                            To the left, I've listed the skills I have experience with in no
                            particular order.
                        </Text>
                        <Text as="li" fontSize="lg">
                            I'm always eager to learn and have regularly picked up new skills in
                            previous roles.
                        </Text>
                        <Text as="li" fontSize="lg">
                            I really enjoy aspects of both backend and frontend, and I appreciate
                            the challenges that each comes with.
                        </Text>
                    </VStack>
                </Card>
            </HStack>
        </Container>
    );
}
