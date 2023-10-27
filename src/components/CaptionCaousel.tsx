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
      title: 'Aplicación de finanzas',
      description:
        'Aplicación web de finanzas personales que permite a los usuarios registrar y analizar sus ingresos y egresos de manera efectiva. Con autenticación de usuarios, filtros, búsquedas y paginación.',
      projectImage: images.finanzasApp,
      subtitle: 'Proyecto personal',
      stack: [
        'Javascript',
        'React.js',
        'Node.js',
        'Express.js',
        'Sequelize',
        'PostgreSQL'
      ],
      github: {
        frontend: 'https://github.com/jruizsilva/finanzas-app-frontend',
        backend: 'https://github.com/jruizsilva/finanzas-app-backend'
      },
      deploy: 'https://finanzas-app-frontend-jruizsilva.vercel.app'
    },
    {
      id: uuidv4(),
      title: 'Subidor de imagenes',
      description:
        'Práctico subidor de imágenes con función de arrastrar y soltar (drag and drop). Permite a los usuarios cargar imágenes de manera sencilla y rápida. Una vez que se ha subido la imagen, la aplicación genera automáticamente una URL única que puede ser copiada y compartida para acceder a la imagen almacenada en la plataforma.',
      projectImage: images.imageUploader,
      subtitle: 'Proyecto personal - devchallenges.io',
      stack: [
        'Javascript',
        'React.js',
        'Node.js',
        'Express.js',
        'Sequelize',
        'PostgreSQL'
      ],
      github: {
        frontend: 'https://github.com/jruizsilva/image-uploader-frontend',
        backend: 'https://github.com/jruizsilva/image-uploader-backend'
      },
      deploy: 'https://image-uploader-frontend-jruizsilva.vercel.app'
    },
    {
      id: uuidv4(),
      title: 'Clon MercadoLibre',
      description:
        'La aplicación web es un clon de Mercado Libre que permite a los usuarios registrarse, iniciar sesión y realizar diversas actividades relacionadas con la compra y venta en línea. Los usuarios pueden buscar, filtrar y solicitar productos, hacer preguntas sobre ellos y recibir respuestas de los propietarios. También pueden agregar productos al carrito, recibir notificaciones sobre sus compras y contactar a los vendedores a través de un chat. Además, pueden calificar los productos que han comprado y realizar un seguimiento de sus publicaciones, compras y ventas. La aplicación también ofrece funciones de edición de perfil y recuperación de contraseñas.',
      projectImage: images.eCommerceLabs,
      subtitle: 'Proyecto grupal - Henry Bootcamp',
      stack: [
        'Javascript',
        'React.js',
        'Node.js',
        'Express.js',
        'Sequelize',
        'PostgreSQL'
      ],
      github: {
        frontend: 'https://github.com/jruizsilva/e-commerce-labs-frontend',
        backend: 'https://github.com/jruizsilva/e-commerce-labs-backend'
      },
      deploy: 'https://e-commerce-labs-frontend-jruizsilva.vercel.app'
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
