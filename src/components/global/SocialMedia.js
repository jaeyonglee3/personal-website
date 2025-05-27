import { HStack, Link, Tooltip, useToast } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const emailAddress = 'jaeyong.lee@mail.utoronto.ca';

const socialMedia = [
    {
        aria: 'Linkedin',
        icon: <AiFillLinkedin fontSize="32px" />,
        href: 'https://www.linkedin.com/in/jaeyong-lee/',
        tooltip: 'LinkedIn',
    },
    {
        aria: 'GitHub',
        icon: <AiFillGithub fontSize="32px" />,
        href: 'https://github.com/jaeyonglee3',
        tooltip: 'GitHub',
    },
    {
        aria: 'Email',
        icon: <AiOutlineMail fontSize="32px" />,
        href: `mailto:${emailAddress}`,
        tooltip: 'Click to copy my email address',
        isEmail: true,
    },
];

export default function SocialMedia(props) {
    const toast = useToast();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            toast({
                title: 'Email copied!',
                description: 'You can now paste it wherever you need.',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            toast({
                title: 'Failed to copy',
                description: 'Something went wrong. Please try again.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <HStack spacing="20px" pr="12px">
            {socialMedia.map((social, i) => (
                <Tooltip key={i} label={social.tooltip} hasArrow>
                    {social.isEmail ? (
                        <span
                            style={{ cursor: 'pointer', fontSize: props.fontSize }}
                            onClick={handleCopy}
                        >
                            {social.icon}
                        </span>
                    ) : (
                        <Link
                            aria-label={social.aria}
                            href={social.href}
                            fontSize={props.fontSize}
                            isExternal
                        >
                            {social.icon}
                        </Link>
                    )}
                </Tooltip>
            ))}
        </HStack>
    );
}
