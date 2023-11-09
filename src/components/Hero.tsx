import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'

export function Hero() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          alignItems={'center'}
          as={Box}
          height='calc(100vh - 4rem)'
          justifyContent={'center'}
          spacing={{ base: 8, md: 14 }}
          textAlign={'center'}
        >
          <Heading
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            fontWeight={600}
            lineHeight={'110%'}
          >
            Hola, soy Jonathan
            <br />
            <Text as={'span'} color={'green.400'}>
              Desarrollador Full Stack
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Como desarrollador Full Stack, he adquirido habilidades en trabajo
            en equipo, resolución de problemas y autonomía a través de mi
            experiencia en el desarrollo de aplicaciones grupales e individuales
            con enfoque en metodologías ágiles. Mi dominio abarca HTML, CSS,
            JavaScript, Typescript, Java, React.js, Node.js, Express.js, Spring
            Boot, JPA, Sequelize y PostgreSQL. Estoy al tanto de las últimas
            tendencias y entusiasmado por colaborar en proyectos desafiantes que
            impulsen el éxito de tu empresa.
          </Text>
          <Stack
            align={'center'}
            alignSelf={'center'}
            direction={'column'}
            position={'relative'}
            spacing={3}
          >
            <Button
              _hover={{
                bg: 'green.500',
                textDecoration: 'none'
              }}
              as={Link}
              bg={'green.400'}
              colorScheme={'green'}
              href={
                'https://drive.google.com/file/d/1NzbU1CFDlFTk0LdnaMokE0Md0VOox2TM/view'
              }
              px={6}
              rounded={'full'}
              target={'_blank'}
            >
              Abrir CV
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
