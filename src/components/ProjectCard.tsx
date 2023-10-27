import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Button,
  Flex,
  Tag,
  Link
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import { type Project } from 'interfaces'
interface Props extends Project {}

export function ProjectCard({
  title,
  description,
  projectImage,
  subtitle,
  stack,
  github,
  deploy
}: Props) {
  return (
    <Center>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        maxW={'768px'}
        overflow={'hidden'}
        p={6}
        rounded={'md'}
        w={'full'}
        width={'100%'}
      >
        <Box bg={'gray.50'} h={'210px'} mb={6} mt={-6} mx={-6} pos={'relative'}>
          <Image
            h={'100%'}
            objectFit={'cover'}
            objectPosition={'center center'}
            src={projectImage}
            w={'100%'}
          />
        </Box>
        <Stack mb={6}>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontFamily={'body'}
            fontSize={'2xl'}
          >
            {title}
          </Heading>
          <Text
            color={'green.500'}
            fontSize={'sm'}
            fontWeight={800}
            letterSpacing={1.1}
            textTransform={'uppercase'}
          >
            {subtitle}
          </Text>
          <Text color={'gray.500'}>{description}</Text>
        </Stack>

        <Flex flexDirection={'row'} flexWrap={'wrap'} gap={2} mb={6}>
          {stack.length > 0
            ? stack.map((tech) => (
                <Tag key={tech} size={'sm'}>
                  {tech}
                </Tag>
              ))
            : null}
        </Flex>
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          flexWrap={'wrap'}
          gap={2}
        >
          <Button
            _hover={{ bg: 'whiteAlpha.200', textDecoration: 'none' }}
            as={Link}
            href={github.frontend}
            leftIcon={<FaGithub />}
            size={'sm'}
            target={'_blank'}
            variant={'ghost'}
          >
            Frontend
          </Button>
          <Button
            _hover={{ bg: 'whiteAlpha.200', textDecoration: 'none' }}
            as={Link}
            href={github.backend}
            leftIcon={<FaGithub />}
            size={'sm'}
            target={'_blank'}
            variant={'ghost'}
          >
            Backend
          </Button>
          <Button
            _hover={{ bg: 'whiteAlpha.300', textDecoration: 'none' }}
            as={Link}
            href={deploy}
            leftIcon={<FaExternalLinkAlt />}
            ml={{ sm: 'auto' }}
            size={'sm'}
            target={'_blank'}
            variant={'solid'}
          >
            Ver demo
          </Button>
        </Flex>
      </Box>
    </Center>
  )
}
