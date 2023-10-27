import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        align={{ base: 'center', md: 'center' }}
        as={Stack}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        maxW={'3xl'}
        py={4}
        spacing={4}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Inicio</Link>
          <Link href={'#projects'}>Proyectos</Link>
        </Stack>
        <Text>© Creado por Jonathan Ruiz Silva - 2023</Text>
      </Container>
    </Box>
  )
}
