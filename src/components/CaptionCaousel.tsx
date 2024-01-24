import { Box, Container, Heading, chakra } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid' // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import { ProjectCard } from './ProjectCard'

import { images } from 'assets'
import { type Project } from 'interfaces'

const SliderChakra = chakra(Slider)

// Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1
// }
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

export function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const projects: Project[] = [
    {
      id: uuidv4(),
      title: 'Clon Twitter',
      description:
        'Desarrollar una aplicación que permite a los usuarios publicar posts, comentar, dar likes a posts o comentarios, guardar posts, seguir usuarios. Subir imagenes de perfil y de fondo, editar los datos del usuario',
      projectImage: images.twitterClon,
      subtitle: 'Proyecto personal',
      stack: [
        'Typescript',
        'React.js',
        'Chakra UI',
        'Zustand',
        'TanStack Query',
        'Spring Boot 3',
        'H2'
      ],
      github: {
        frontend: 'https://github.com/jruizsilva/twitter-clon-devchallenges',
        backend: 'https://github.com/jruizsilva/twitterclonv2'
      },
      deploy: 'https://twitter-clon-frontend.vercel.app'
    },
    {
      id: uuidv4(),
      title: 'Simple Chat App',
      description:
        'Desarrollar una aplicación web que permite a los usuarios chatear un salas publicas o privadas',
      projectImage: images.chatApp,
      subtitle: 'Proyecto personal',
      stack: [
        'Typescript',
        'React.js',
        'Chakra UI',
        'Zustand',
        'TanStack Query',
        'Spring Boot 3',
        'H2'
      ],
      github: {
        frontend:
          'https://github.com/jruizsilva/basic-chat-with-websocket-frontend',
        backend:
          'https://github.com/jruizsilva/basic-chat-with-websocket-backend'
      },
      deploy: 'https://basic-chat-with-websocket-frontend.vercel.app/'
    }
  ]

  return (
    <Container
      id='projects'
      maxW={'3xl'}
      mb={16}
      minHeight='calc(100vh - 4rem)'
      p={{ base: 0, sm: '1rem' }}
    >
      <Box height={'100%'} position={'relative'} w={'100%'}>
        <Heading fontWeight={600} mb={8} size={'2xl'}>
          Proyectos
        </Heading>

        <SliderChakra {...settings}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </SliderChakra>
      </Box>
    </Container>
  )

  // return (
  //   <Box
  //   // height='600px'
  //   // overflow={'hidden'}
  //   // position={'relative'}
  //   // width={'full'}
  //   >
  //     {/* Left Icon */}
  //     {/* <IconButton
  //       aria-label='left-arrow'
  //       left={side}
  //       position='absolute'
  //       top={top}
  //       transform={'translate(0%, -50%)'}
  //       variant='ghost'
  //       zIndex={2}
  //       onClick={() => slider?.slickPrev()}
  //     >
  //       <BiLeftArrowAlt size='40px' />
  //     </IconButton> */}
  //     {/* Right Icon */}
  //     {/* <IconButton
  //       aria-label='right-arrow'
  //       position='absolute'
  //       right={side}
  //       top={top}
  //       transform={'translate(0%, -50%)'}
  //       variant='ghost'
  //       zIndex={2}
  //       onClick={() => slider?.slickNext()}
  //     >
  //       <BiRightArrowAlt size='40px' />
  //     </IconButton> */}
  //     {/* Slider */}
  //     <Slider
  //       {...settings}
  //       ref={(slider) => {
  //         setSlider(slider)
  //       }}
  //     >
  //       {
  //         projects.map((project) => (
  //           <ProjectCard key={project.id} {...project} />
  //         ))
  //         // cards.map((card, index) => (
  //         //   <Box
  //         //     // backgroundImage={`url(${card.image})`}
  //         //     key={index}
  //         //     backgroundPosition='center'
  //         //     backgroundRepeat='no-repeat'
  //         //     backgroundSize='cover'
  //         //     height={'6xl'}
  //         //     position='relative'
  //         //   >
  //         //     {/* This is the block you need to change, to customize the caption */}
  //         //     <Container minHeight='600px' position='relative' size='80'>
  //         //       <Stack
  //         //         maxW={'72'}
  //         //         position='absolute'
  //         //         spacing={6}
  //         //         top='50%'
  //         //         transform='translate(0, -50%)'
  //         //         w={'full'}
  //         //       >
  //         //         <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
  //         //           {card.title}
  //         //         </Heading>
  //         //         <Text color='GrayText' fontSize={{ base: 'md', lg: 'lg' }}>
  //         //           {card.text}
  //         //         </Text>
  //         //       </Stack>
  //         //     </Container>
  //         //   </Box>
  //         // ))
  //       }
  //     </Slider>
  //   </Box>
  // )
}
