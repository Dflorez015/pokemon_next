// imports
import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'
// components
import { HeadLayout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
// api
import { rest } from '../api'
// ts
import { HomeTypeProps, IPokemonListResponse } from '../ts'
// utils
import { addParamsPokemonList } from '../util/functions'

const Home: NextPage<HomeTypeProps> = ({ pokemons }) => {

  return (
    <HeadLayout headTitle="Listado de pokemones">
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </HeadLayout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("---------------fetching 151 pokemons---------------")
  const { data } = await rest.get<IPokemonListResponse>('/pokemon?limit=151')
  const pokeList = addParamsPokemonList(data.results)
  console.dir(pokeList);
  console.log("---------------151 pokemons loaded---------------")

  return {
    props: {
      pokemons: pokeList
    }
  }
}

export default Home
