import { Center, Heading } from '@chakra-ui/react';
import React, { FunctionComponent, ReactElement } from 'react'

const NoData: FunctionComponent = (): ReactElement => {
  return (
    <Center>
      <Heading mt={20}>No Data founded!</Heading>
    </Center>
  )
}

export {
  NoData
};