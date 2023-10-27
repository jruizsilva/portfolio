import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { CaptionCarousel, Footer, Hero, Navbar } from 'components'
import theme from 'theme'

// clean the localstorage if the initial theme is not working
export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <Hero />
      <CaptionCarousel />
      <Footer />
    </ChakraProvider>
  )
}
