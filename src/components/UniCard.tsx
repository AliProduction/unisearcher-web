import { Badge, Box, Image } from '@chakra-ui/react'
import React, { FunctionComponent, ReactElement } from 'react'
import { Uni } from '../types/Uni'

const UniCard: FunctionComponent<Uni> = ({ name, country, domains, web_pages, imageUrl }): ReactElement => {

  const routeToUni = (): void => {
    window.location.href = web_pages[0];
  }

  return (
    <Box onClick={routeToUni} _hover={{ "borderColor": 'teal' }} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image m="4" float="right" height={'20px'} width={'auto'} src={imageUrl} alt={'img'} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            University
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {domains} &bull; {country}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {name}
        </Box>

        <Box>{web_pages}</Box>
      </Box>
    </Box>
  )
}

export {
  UniCard
}

