import { Center, Spinner } from '@chakra-ui/react';
import React, { FunctionComponent, ReactElement } from 'react'

const DataLoading: FunctionComponent = (): ReactElement => {
  return (
    <Center mt={20}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Center>
  )
}

export {
  DataLoading
};