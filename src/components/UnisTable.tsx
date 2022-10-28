import { SimpleGrid } from '@chakra-ui/react'
import React, { FunctionComponent, ReactElement } from 'react'
import { Uni } from '../types/Uni'
import { UnisTableProps } from '../types/UnisTableProps'
import { UniCard } from './UniCard'

const UnisTable: FunctionComponent<UnisTableProps> = ({ unisData, currentCountry }): ReactElement => {
  return (
    <>
      <SimpleGrid padding={10} columns={4} spacingX='40px' spacingY='20px'>
        {unisData.map((uni: Uni, index: number) =>
          <UniCard
            key={index}
            domains={uni.domains}
            web_pages={uni.web_pages}
            country={uni.country}
            name={uni.name}
            imageUrl={'/countryFlags/' + currentCountry + '.png'}
          />
        )}
      </SimpleGrid>
    </>
  )
}

export {
  UnisTable
}

