import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Stack,
  VisuallyHidden,
  chakra,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
interface Props {}

const SocialButton = ({
  children,
  label,
  href
}: {
  children: React.ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
      alignItems={'center'}
      as={'a'}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      cursor={'pointer'}
      display={'inline-flex'}
      h={8}
      href={href}
      justifyContent={'center'}
      rounded={'full'}
      target={'_blank'}
      transition={'background 0.3s ease'}
      w={8}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export function Navbar(props: Props) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        px={4}
        width={'full'}
        zIndex={10}
      >
        <Container maxW={'3xl'}>
          <Flex
            alignItems={'center'}
            h={'4rem'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                href={'https://www.linkedin.com/in/jruizsilva/'}
                label={'Twitter'}
              >
                <FaLinkedin />
              </SocialButton>
              <SocialButton
                href={'https://github.com/jonathanruizsilva'}
                label={'YouTube'}
              >
                <FaGithub />
              </SocialButton>
            </Stack>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
