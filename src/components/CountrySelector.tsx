import { Button, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { FunctionComponent, ReactElement } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { countrys } from '../Countrys';
import { Country } from '../types/Country';
import { CountrySelectorProps } from '../types/CountrySelectorProps';


const CountrySelector: FunctionComponent<CountrySelectorProps> = ({ changeCountry }): ReactElement => {
  return (
    <Menu>
      <MenuButton colorScheme={'teal'} as={Button} rightIcon={<FaChevronDown />}>
        Change Country
      </MenuButton>
      <MenuList>
        {countrys.map((country: Country) =>
          <MenuItem onClick={(): void => changeCountry(country.label)} key={country.label} minH='48px'>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src={country.imgUrl}
              alt={country.label}
              mr='12px'
            />
            <span>{country.label}</span>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export {
  CountrySelector
};