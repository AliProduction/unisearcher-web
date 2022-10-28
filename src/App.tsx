import { Button, Center, Flex, Heading, Input } from '@chakra-ui/react';
import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react';
import { CountrySelector } from './components/CountrySelector';
import { DataLoading } from './components/DataLoading';
import { NoData } from './components/NoData';
import { UnisTable } from './components/UnisTable';
import { Uni } from './types/Uni';

const App: FunctionComponent = (): ReactElement => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [unis, setUnis] = useState<Uni[]>([]);
  const [country, setCountry] = useState<string>("Germany");

  const apiUrl: string = 'http://universities.hipolabs.com/search?country=' + country;

  const loadApi = async (url: string) => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then((data: Uni[]) => {
        setUnis(data);
        setLoading(false);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadApi(apiUrl)
  }, [apiUrl])


  const changeCountry = (countryName: string): void => {
    setCountry(countryName)
  }

  const filterUnis = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let val = e.target.value;

    if (val.length > 0) {
      let filtered = unis.filter(uni => uni.name.includes(val));
      setUnis(filtered);
    } else {
      loadApi(apiUrl);
    }
  }

  const routeToAlicanAkis = (): void => {
    window.location.href = 'https://github.com/AliProduction';
  } 

  return (
    <div className="App">

      {/* Head */}
      <Flex direction={'column'} justifyContent={'space-between'}>
        <Button onClick={routeToAlicanAkis} borderRadius={0} colorScheme={'teal'}>Alican Akis</Button>
        <Heading pt={5} as='h1' size='4xl' noOfLines={1}>
          <Center>University Searcher &#127979;</Center>
        </Heading>
        <Flex justifyContent={'space-between'} p={10}>
          <CountrySelector changeCountry={changeCountry} />
          <Input
            width={'86%'}
            mr={10}
            variant='outline'
            placeholder='&#128270; Search ...'
            onChange={filterUnis}
          />
        </Flex>
      </Flex>


      {/* Head Ending */}

      {/* All Universities getting listed here */}
      {!isLoading ? unis.length > 0 ? <UnisTable unisData={unis} currentCountry={country} /> : <NoData /> : <DataLoading />}
      {/* ----------------------------------- */}
    </div>
  );
}

export default App;
